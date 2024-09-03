import React from "react";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg p-3 sticky-top bg-light">
    <div class="container-fluid">
        <a class="navbar-brand p-2" href="#">Nkem Jr</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button> 
        <div class="collapse navbar-collapse justify-content-end container" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#contact">Contacts</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    )
}

export default Navbar;