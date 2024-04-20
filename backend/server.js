import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import 'dotenv/config';

const app = express();
const port = 4000;
const timeUrl = "https://timeapi.io/api/Time/current/zone";

const day_int_map ={
    "Monday" : 1,
    "Tuesday" : 2,
    "Wednesday" : 3,
    "Thursday" : 4,
    "Friday" : 5,
    "Saturday" : 6,
    "Sunday" : 7
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

let num;

function generateRandomNumber(max_number) {
    return Math.floor(Math.random() * max_number);
}

async function getAccessToken() {
    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': process.env.clientID,
                'client_secret': process.env.clientSecret
            })
        );
        return response.data.access_token;
    } catch (error) {
        console.error(error.message);
        throw new Error('Failed to get access token');
    }
}

async function getTracks(access_token) {
    try {
        if(!num){
            const response = await axios.get(`${timeUrl}?timeZone=Australia/Perth`);
            const { dayOfWeek } = response.data;
            num = day_int_map[dayOfWeek]
        }
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${process.env[`playlistID${num}`]}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        return response.data.tracks.items;
    } catch (error) {
        console.error(error.message);
        console.log(error.message);
        throw new Error('Failed to get tracks');
    }
}

async function getRandomSong(tracks) {
    let randomSong = tracks[generateRandomNumber(tracks.length)];
    return randomSong.track;
}

app.get("/api/getTime", async (req, res) => {
    try {
        const response = await axios.get(`${timeUrl}?timeZone=Australia/Perth`);
        const { hour, minute, seconds} = response.data;
        const time = `${hour} : ${minute < 10 ? '0' : ''}${minute} : ${seconds < 10 ? '0' : ''}${seconds}`;
        res.json({ time });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/api/getSong", async (req, res) => {
    try {
        const access_token = await getAccessToken();
        const tracks = await getTracks(access_token);
        const randomSong = await getRandomSong(tracks);
        const { album, name, preview_url, artists } = randomSong;
        const image = album.images.find(p => p.height === 640);
        res.json({
            imageURL: image ? image.url : '',
            songName: name,
            previewURL: preview_url,
            artist: artists[0].name
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/", async (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Server running on ${port} successfully`);
});
