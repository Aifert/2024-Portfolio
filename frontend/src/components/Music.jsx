import React, {useState, useEffect} from "react";

function Music(props){
    const [imageURL, setImageURL] = useState(`${process.env.PUBLIC_URL}/images/verdy-removebg-preview.png`);
    const [songName, setSongName] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const [artistName, setArtistName] = useState('');
    const [audio, setAudio] = useState(null);
    const [play, setPlay] = useState(false);
    const [preview, setPreview] = useState("Play");

    const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/getSong");
          const data = await response.json();
          const { imageURL, songName, previewURL, artist} = data;
          setImageURL(imageURL);
          setSongName(songName);
          setPreviewURL(previewURL);
          setArtistName(artist);
        } catch (error) {
          console.log(error.message);
        }
    };

    const playAudio = () => {
        if (!audio) {
          // Create new Audio object if it doesn't exist
          const newAudio = new Audio(previewURL);
          setAudio(newAudio);
          newAudio.play();
          setPlay(true);
          setPreview("Pause");
        } else {
          // Toggle between play and pause
          if (play) {
            setPreview("Play");
            audio.pause();
          } else {
            setPreview("Pause");
            audio.play();
          }
        }
    
        setPlay(!play);
      };

    useEffect(() => {
        if(props.expand){
            fetchData();
            setPreview("Play");
        }
      }, []);

    function handleNext(){
      setPreview("Play");
      setPlay(false);
      setAudio(null);
      if(audio){
        audio.pause();
      }
      fetchData();
    }
    
    if(props.expand){
        return (
        <div className="record">
            <div className="recordCard mb-3"> 
                <img src={imageURL} alt="albumURL"/>
            </div>
            <p>Currently listening to... </p>
            <h3 className = "songName mb-4">{songName} - {artistName}</h3>
            <div className = "buttons">
              <button className="button mx-2" onClick={async () => {
                if (previewURL === null) {
                    setPreview("No preview found, skipping to next song");
                    setTimeout(async () => {
                        await fetchData();
                        setPreview("Play");
                    }, 3000);
                } else {
                    playAudio();
                }
            }} >{preview}</button>
            <button className = "button mx-2" onClick={handleNext}>Next</button>
            </div>
            
        </div>
    )
    }
    else{
        return null;
    }
    
}

export default Music;