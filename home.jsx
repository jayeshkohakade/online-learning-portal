import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import './App1.css'

const App1 = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <label className="logo">ThinkingMinds</label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a className="loginbtn" href="#">Sign-In</a></li>
        </ul>
      </nav>
      
      {/* Carousel */}
      <Carousel id="bannerCarousel">
        <Carousel.Item>
          <img src="img/img1.jpg" className="d-block w-100" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/img2.jpg" className="d-block w-100" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/img3.jpg" className="d-block w-100" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      
      {/* Marquee Section */}
      <div className="marquee">
        <marquee>
          <span className="dot"></span> Welcome to <b>THINKING MINDS TECHNICAL TRAINING INSTITUTE !!</b>
          Learn Today, Lead Tomorrow...
          <span className="dot"></span> Get 24/7 Assistance by Professional Mentors
          <span className="dot"></span> Get exposure to Real-time projects
        </marquee>
      </div>
      
      {/* Course Cards */}
      <section>
        <h1 id="line">Unlock Your Digital Potential with ThinkingMinds</h1>
        <h3 id="subline">Unlock your potential with our comprehensive e-learning resources.</h3>
        <div className="container mt-5">
          <div className="row">
            {["fullstack-web.jpg", "mern-stack.jpg", "nodejs.jpg"].map((img, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img src={`img/${img}`} className="card-img-top" alt="Course" />
                  <div className="card-body">
                    <h5 className="card-title">{img.split(".")[0].replace("-", " ").toUpperCase()}</h5>
                    <p className="card-text">Some quick example text about this course.</p>
                    <a href="#" className="enroll-btn">Enroll Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h6 id="seeall"><a href="#">SEE ALL</a></h6>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            {[
              { title: "Institute", links: ["about us", "our services", "privacy policy", "affiliate program"] },
              { title: "Get Help", links: ["FAQ", "career", "blogs", "help and support", "investors"] },
              { title: "Terms", links: ["privacy and policy", "cookie setting", "sitemap", "accessibility statement"] }
            ].map((section, index) => (
              <div className="footer-col" key={index}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App1;
