import React, {useState} from "react";
import Frontpage from "./pages/Frontpage.jsx";
import Music from "./Music.jsx";
import Time from "./Time.jsx";

function App(){
    const [isClicked, setisClicked] = useState(false);

    function handleonclick(){
        setisClicked(!isClicked);
    }
    
    return (
    <div>
    <h1 class="mt-3">Aifert Yet</h1>
    <Time />
    <h4 class = "location"> PERTH, WA</h4>
    <hr class = "mt-5 mb-5 custom-hr" />
    <div class = "container content text-center"></div>
    <Music expand = {!isClicked}/>
    {isClicked ? undefined :<img onClick={handleonclick} className = "button dropdown mt-5" src={process.env.PUBLIC_URL + '/images/button-arrow-expand-1-64.png'} alt="Button" />}
    <Frontpage expand = {isClicked}/>
    {isClicked ? 
    <img
        onClick={handleonclick}
        className={`button up mt-5 ${isClicked ? 'rotate' : ''}`}
        src={process.env.PUBLIC_URL + '/images/button-arrow-expand-1-64.png'}
        alt="Button"
    /> :
    undefined
    }
    </div>
    );
}

export default App;