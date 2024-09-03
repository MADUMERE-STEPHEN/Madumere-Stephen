import React from "react";

function Footer(){
    return(
        <div class="container" id="contact">
  <footer class="py-5 shadow p-5">
    <div class="row">
      <div class=" col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#projects" class="nav-link p-0 text-body-secondary">Project</a></li>
          <li class="nav-item mb-2"><a href="#skills" class="nav-link p-0 text-body-secondary">Skills</a></li>
        </ul>
      </div>




      <div class="col-md-5 offset-md-1 mb-3">
        <form  action="https://formsubmit.co/stephenjuniormadumere@gmail.com" method="POST">
          <h5>Let's Talk</h5>
          <div class="">
            <label for="newsletter1"  class="visually-hidden">Email address</label>
            <input id="newsletter1" name="email" type="text" class="form-control" placeholder="Email address" />
            

  <textarea class="form-control my-2" id="exampleFormControlTextarea1"name="textarea" rows="3"></textarea>
  <input type="hidden" name="_captcha" value="false" />
            <button class="btn btn-secondary my-3" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 StephenJR. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a href="https://www.facebook.com/profile.php?id=100075721823750&mibextid=ZbWKwL" className="link-body-emphasis"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
        <li className="ms-3"><a href=" https://www.instagram.com/stephen_madumere?igsh=YzljYTk1ODg3Zg== " className="link-body-emphasis"><i class="fa-brands fa-instagram fa-2xl"></i></a></li>
        <li className="ms-3"><a href="https://github.com/MADUMERE-STEPHEN" className="link-body-emphasis"><i class="fa-brands fa-github fa-2xl"></i></a></li>

      </ul>



      <ul class="list-unstyled d-flex">
      </ul>
    </div>
  </footer>
</div>

    )
}

export default Footer;