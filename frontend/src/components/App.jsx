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
        <div className="main">
        <h1 className="mt-3">Aifert Yet</h1>
        <Time />
        <h4 className = "location"> PERTH, WA</h4>
        <hr className = "mt-5 mb-5 custom-hr" />
        <div className = "container text-center"></div>
        <Music expand = {!isClicked}/>
        {isClicked ? undefined :<img onClick={handleonclick} className = "button dropdown expand-button" src={process.env.PUBLIC_URL + '/images/button-arrow-expand-1-64.png'} alt="Button" />}
        <Frontpage expand = {isClicked}/>
        {isClicked ? 
        <img
            onClick={handleonclick}
            className={`expand-button ${isClicked ? 'rotate' : ''}`}
            src={process.env.PUBLIC_URL + '/images/button-arrow-expand-1-64.png'}
            alt="Button"
        /> :
        undefined
        }
        </div>        
    </div>

    );
}

export default App;