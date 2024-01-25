import React from "react";

function About(props){
    return (
    <div>
    
        <section id = "content">
            <div id = "about-container">
            </div>
            <div class="container about-container">
                <div class="main position-relative p-5 text-start text-muted border border-dashed rounded-5">
                    <h1>About Me</h1>
                    <hr class = "mt-3 mb-5 custom-hr" />
                    <p>Hi, my name is Aifert Yet.</p>
                    <br />
                    <p>I am currently undertaking my 3rd year of Software Engineering (Honours) at the University of Western Australia.</p>
                    <p>What makes me happy is : 
                    </p>
                    <ul>
                        <li><p>Chasing Greatness.</p></li>
                        <li><p>Witnessing Greatness.</p></li>
                        <li><p>Making Greatness.</p></li>
                    </ul>
                    <br/>
                    <p>A quote I live by : </p>
                    <p class="mt-3">The journey is never ending. There's always gonna be growth, improvement, adversity;
                    you just gotta take it all in and do what's right, continue to grow, continue to live in the moment. - 
                    Antonio Brown.
                    </p>
                <hr class = "mt-5 mb-3 custom-hr" />
                <footer>© 2023 Aifert @ YuenStudio </footer>
            </div>
            </div>
        </section>
    </div>
    )
}

export default About