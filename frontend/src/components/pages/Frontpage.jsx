import React from "react";


function Frontpage(props){
    if(props.expand){
        return (    
        <div>
        <ul className = "container guide">
        <li className = "p-2"><a href = "#about">About</a></li>
        <li className = "p-2"><a href = "#skills">Skills</a></li>
        <li className = "p-2"><a href = "#education">Education</a></li>
        <li className = "p-2"><a href = "#competitions">Competitions</a></li>
        <li className = "p-2"><a href = "#work">Work Experience</a></li>
        <li className = "p-2"><a href = "#projects">Projects</a></li>
        <li className = "p-2"><a href = "#socials">Socials</a></li>
        </ul></div>             
        );
    }
}

export default Frontpage