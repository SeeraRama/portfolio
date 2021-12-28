import React from "react";
import "./About.css";
import aboutImg from "../../img/Me.jpeg";
function About() {
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Software Developer with 6 years of experience in client
                interactions, software designing and development. Possess
                excellent communication and coordination skills. Proficient in
                adapting to technologies and delivering quality solutions within
                timeline.
              </p>
              <p className="about__text p__color">
                Experienced Software Engineer with a demonstrated history of
                working in the computer software industry. Skilled in
                OutSystems, React, React Native, SQL, Rapid Application
                Development (RAD ), Agile Methodologies, and Data Structures.
                Strong engineering professional with a Master of Computer
                Applications (MCA) focused in Computer Science from Maulana Azad
                National Institute of Technology.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
