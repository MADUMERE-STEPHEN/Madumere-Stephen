import React from "react";
import Myimg from './Professional 01-Photoroom.png'

function Hero(){
    return(
        <div class="container my-5" id="home">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-3 fw-bold lh-1 text-body-emphasis ">I'm <span>{"<"}</span>Stephen Madumere <span>{" />"}</span></h1>
            <p className="display-6">Front-End Developer</p>
            <p class="lead">
Hi, I'm Madumere Stephen, a web developer with a passion for front-end development. I've developed a strong foundation in HTML, CSS, JavaScript, React and Python. My expertise includes responsive design, web performance optimization. I'm always eager to explore new technologies and techniques.

I'm excited to share my projects and experiences with you through this portfolio. Let's connect and explore opportunities to collaborate!
</p>

            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

            </div>
          </div>
          <div class="col-lg-4  p-0 overflow-hidden">
              <img class="rounded" src={Myimg} alt="" width="500" />
          </div>
          
        </div>
      </div>
    )
}

export default Hero;