import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Social Links</p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <h2 className="social-logo">
              Email:- <span>ashishkumarnath9@gmail.com</span>
            </h2>
          </div>

          <div class="social-icons">
            <a
              class="social-icon-link youtube"
              href="https://github.com/AshishKumar409"
              target="blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </a>

            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/ashish-kumar-nath-64ab71195/"
              target="blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
