import React from "react";
import fProject from './Screenshot 2024-08-22 183704.png'
import sProject from './Screenshot 2024-08-31 024048.png'
import tProject from './Screenshot 2024-09-02 013425.png'
import ftProject from './Screenshot 2024-09-02 013435.png'

function Projects(){
    return(
    <div id="projects">
        <h1 className="text-center my-4">Recent Projects</h1>
        <div class="row row-cols-1 row-cols-md-2 g-3 container-fluid my-4">
  <div class="col">
    <div class="card border shadow">
      <img src={fProject} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">First Personal Website</h5>
        <p class="card-text">
My  first Portfolio is a personal website that showcases my skills and experience as a web developer. This website features a responsive design, interactive elements, and is built using HTML, CSS, JavaScript, and React.
</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={sProject} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">RecycleRevolution</h5>
        <p class="card-text">
Recycling Revolution is an educational website that empowers individuals to take action against waste and promote sustainable practices. The website features interactive recycling guides, quotes,  built using HTML, CSS, JavaScript, and React.
</p>
<a href="https://madumere-stephen.github.io/RecyclingRevolution/" className="link-body-emphasis text-decoration-none border border-2 p-1 border-opacity-75 rounded border-success">View Website</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={tProject} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Food Village</h5>
        <p class="card-text">Developed a comprehensive online platform for food enthusiasts, featuring recipes, food menu with categories, and a satisfying parallax scrolling effect . Built using HTML, CSS and JavaScript, Food Village provides a user-friendly interface for exploring culinary delights.
        </p>
        <a href="https://madumere-stephen.github.io/Food-website/" className="link-body-emphasis text-decoration-none border border-2 p-1 border-opacity-75 rounded border-dark">View Website</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={ftProject} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Car Insurance</h5>
        <p class="card-text">Developed a car insurance website using HTML, CSS and JavaScript. The website features a user-friendly interface and responsive design, providing easy insurance quotes and policy purchases.
        </p>
        <a href="https://madumere-stephen.github.io/Car-website/" className="link-body-emphasis text-decoration-none border border-2 p-1 border-opacity-75 rounded border-danger">View Website</a>
      </div>
    </div>
  </div>
  </div>
</div>
    )
}

export default Projects;