import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import SignIn from "./sign-in";
import EnquiryForm from "./enquiry";
import Footer from "./footer";
import App1 from "./home";
import Courses from "./courses";
import AdminDashboard from "./admin-dashboard";

import { Carousel } from "react-bootstrap";
import "./App1.css";

const App = () => {
  return (
    <Router>
      {/* Navbar (visible on all pages) */}
      <Navbar />

      {/* Routing Setup */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
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
              <section id="courses">
                <h1 id="line">Unlock Your Digital Potential with ThinkingMinds</h1>
                <h3 id="subline">Unlock your potential with our comprehensive e-learning resources.</h3>
                <div className="container mt-5">
                  <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4">
                      <div className="card">
                        <img src="img/fullstack-web.jpg" className="card-img-top" alt="Fullstack Web" />
                        <div className="card-body">
                          <h5 className="card-title">FULLSTACK-WEB</h5>
                          <p className="card-text">Build complete web applications using modern technologies.</p>
                          <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                      <div className="card">
                        <img src="img/mern-stack.jpg" className="card-img-top" alt="MERN Stack" />
                        <div className="card-body">
                          <h5 className="card-title">MERN STACK</h5>
                          <p className="card-text">Master MongoDB, Express.js, React, and Node.js.</p>
                          <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                      <div className="card">
                        <img src="img/nodejs.jpg" className="card-img-top" alt="Node.js" />
                        <div className="card-body">
                          <h5 className="card-title">NODE-JS</h5>
                          <p className="card-text">Learn backend development with Node.js and Express.</p>
                          <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                      </div>
                    </div>
                    <h6 id="seeall"><a href="#">SEE ALL</a></h6>
                  </div>
                </div>
              </section>

              {/* Enquiry Form */}
              <EnquiryForm />

              {/* Footer */}
              <Footer />
            </>
          }
        />

<Route path="/" element={<App/>} />

        {/* Courses Page */}
        <Route path="/courses" element={<Courses />} />

        {/* Sign-In Page */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
