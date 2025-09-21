import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>📞 9794252254</p>
          <p>
            Hariaudh Nagar Colony, Bilariyaganj Road,<br />
            Azamgarh - 276001, Uttar Pradesh
          </p>
        </div>

        <div className="footer-section social-info">
          <h3>Connect with Us</h3>
          <p>
            <a
              href="https://www.instagram.com/sandeepstudioazamgarh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://www.facebook.com/Sandeepstudio88"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>

        <div className="footer-section hours-info">
          <h3>Operating Hours</h3>
          <p>Mon - Sat: 9:00 AM – 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Justdial Listing Section */}
        <div className="footer-section justdial-info">
          <h3>Website</h3>
          <p>
            <a
              href="https://www.justdial.com/Azamgarh/Sandeep-Studio-Mixing-Lab-Near-Hariaudh-Nagar-Colony-Heerapatti-Azamgarh-Azamgarh-City/9999P5252-5252-211111154517-B1T7_BZDET?trkid=&term=&ncatid=10343379&area=&search=Showing%20Results%20for%20%22Sandeep%20Studio%20Mixing%20Lab%22%20in%20Azamgarh&mncatname=Sandeep%20Studio%20Mixing%20Lab&ftterm=Sandeep%20Studio%20Mixing%20Lab&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail=" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Justdial Listing
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Sandeep Studio & Mixing Lab. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
