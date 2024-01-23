import React from "react";


function Frontpage(props){
    if(props.expand){
        return (    
        <div>
        <ul className = "container guide">
        <li className = "p-2"><a href = "./static_page/about.html">About</a></li>
        <li className = "p-2"><a href = "./static_page/socials.html">Socials</a></li>
        <li className = "p-2"><a href = "./static_page/education.html">Education</a></li>
        <li className = "p-2"><a href = "./static_page/commit.html">Commitments</a></li>
        <li className = "p-2"><a href = "./static_page/work.html">Work Experience</a></li>
        <li className = "p-2"><a href = "./static_page/project.html">Projects</a></li>
        <li className = "p-2"><a href = "./static_page/skills.html">Skills</a></li>
        </ul></div>             
        );
    }
}

export default Frontpage