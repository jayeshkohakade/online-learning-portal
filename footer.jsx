import React from "react";
import "./App1.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="foot">
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
      <p className="footer-text">
        © {new Date().getFullYear()} <>THINKING MINDS.</> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
