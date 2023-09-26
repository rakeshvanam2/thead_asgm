// Header.js
import React, { useState } from "react";
import "./Home.css"; // Import your CSS for styling
import { AiFillCaretRight } from "react-icons/ai";
import {
  FaRegCalendarCheck,
  FaMinusCircle,
  FaPlusCircle
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  const [showData1, setShowData1] = useState(false);
  const [showData2, setShowData2] = useState(false);
  const [showData3, setShowData3] = useState(false);

  const handleChange1 = () => {
    setShowData1(!showData1);
  };

  const handleChange2 = () => {
    setShowData2(!showData2);
  };
  const handleChange3 = () => {
    setShowData3(!showData3);
  };
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src="https://woodpunchsgraphics.com/cdn/shop/files/Landscape_background_6d7a0a9b-492c-4ebd-ad61-dd0c4d8f90ae.jpg?v=1665398918&width=1500"
            alt="Logo"
          />
        </div>
        <div className="header-text">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <button className="header-button">
            Know More <AiFillCaretRight />
          </button>
        </div>
      </header>

      <section className="calander_header">
        <div className="heading">
          <h1>
            Upcoming <br />
            Examinations
          </h1>
          <p>
            enqurie about the examination & <br /> register for the exams
          </p>
        </div>
        <div className="vl"></div>

        <div className="calander_l1">
          <div>
            <FaRegCalendarCheck className="icon" />
          </div>
          <div>
            <h3>02th October 2014</h3>
            <h5>Level 1 Exam</h5>
          </div>
        </div>
        <div className="calander_l2">
          <div>
            <FaRegCalendarCheck className="icon" />
          </div>
          <div>
            <h3>Nov-Dec 2016</h3>
            <h5>Level 2 Exam</h5>
            <p>Lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className="calander_l3">
          <div>
            <FaRegCalendarCheck className="icon" />
          </div>
          <div>
            <h3>Ongoing this year</h3>
            <h5>Level 3 (Grad)</h5>
          </div>
        </div>
      </section>
      <section>
        <div className="text_boxs">
          <div className="box">
            <h5>Lorem ipsum</h5>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="box_icon">
              Know More <AiFillCaretRight className="icon1" />
            </button>
          </div>
          <div className="box">
            <h5>Lorem ipsum</h5>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="box_icon">
              Know More <AiFillCaretRight className="icon1" />
            </button>
          </div>
          <div className="box">
            <h5>Lorem ipsum</h5>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="box_icon">
              Know More <AiFillCaretRight className="icon1" />
            </button>
          </div>
          <div className="box">
            <h5>Lorem ipsum</h5>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="box_icon">
              Know More <AiFillCaretRight className="icon1" />
            </button>
          </div>
        </div>
      </section>
      <section class="content">
        <div class="content_text">
          <p>Lorem ipsum</p>
          <h1>123+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="content_text">
          <p>Lorem ipsum</p>
          <h1>12+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="content_text">
          <p>Lorem ipsum</p>
          <h1>12+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="content_text">
          <p>Lorem ipsum</p>
          <h1>123</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <section className="faq">
        <h1 className="faq_header">FAQ</h1>

        <div className="faq_content">
          <div className="faq_button">
            <p>
              How does an investor gain access to MF Utility?
              <button onClick={handleChange1}>
                {showData1 ? <FaMinusCircle /> : <FaPlusCircle />}
              </button>
              {showData1 && (
                <div className="content_faq">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </div>
              )}
            </p>
          </div>
        </div>

        <div className="faq_content">
          <div className="faq_button">
            <p>
              Will investor ba able to have multiple Common Account Numbers?
              <button onClick={handleChange2}>
                {showData2 ? <FaMinusCircle /> : <FaPlusCircle />}
              </button>
              {showData2 && (
                <div className="content_faq">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry .Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry
                </div>
              )}
            </p>
          </div>
        </div>
        <div className="faq_content">
          <div className="faq_button">
            <p>
              How does an investor gain access to MF Utility?
              <button onClick={handleChange3}>
                {showData3 ? <FaMinusCircle /> : <FaPlusCircle />}
              </button>
              {showData3 && (
                <div className="content_faq">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </div>
              )}
            </p>
          </div>
        </div>
      </section>
      <div>
        <img
          className="footer_img"
          src="https://www.nabtrade.com.au/campaigns/landing-pages/staff/_jcr_content/root/responsivegrid_605277362/teaser.coreimg.png/1670543858258/nabtrade10years-lp-masthead-1600x375-opt2-2x.png"
          alt="logo"
        />
      </div>
      <section class="sub_items">
        <h2 className="sub_heading">Subscribe</h2>
        <p className="sub_p">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
          <br /> simply dummy text of the printing and typesetting industry
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="search-input"
          />
          <button className="search-button">
            Subscribe Now
            <AiFillCaretRight className="sub_icon" />
          </button>
        </div>
      </section>
      <footer className="footer">
        <img
          className="footer_img"
          src="https://img.freepik.com/premium-photo/map-world-representing-global-network-line-wire-frame-banner-blue-background_38364-310.jpg"
          alt="logo"
        />
        <div className="footer_items">
          <div className="footer_contact">
            <h3>Contact us</h3>
            <p>
              {" "}
              Address:amet,consetetur,sodipscing eliter,sed diam
              <br />
              Email id: eirmod tempor invidunt ut labore et dolore
              <br />
              Phone no :123456789
            </p>
          </div>
          <div className="footer_follow">
            <h3>Follow us</h3>

            <p className="social-container">
              <a href="https://www.youtube.com/" className="youtube_social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com/" className="facebook_social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="http://www.instagram.com/" className="instagram_social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://wwww.twitter.com" className="twitter_social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://wwww.linkedin.com" className="twitter_social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </p>
          </div>
          <div className="footer_office">
            <h3>Head Office</h3>

            <p>
              Lorem ipsum dolor sit amet,consetetur sodipscing <br />
              eliter,sed diam nonumy eirmod tempor invidunt ut
            </p>
            <p>
              Lorem ipsum dolor sit amet,consetetur sodipscing <br />
              eliter
            </p>
            <p>
              Lorem ipsum dolor sit amet,consetetur sodipscing <br />
              eliter
            </p>
            <p>Lorem ipsum asd asdsaweeq Lorem ipsum</p>
          </div>
        </div>
        <div class="end_footer">
          <p>@ 2023 All Rights Reserved. Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default Header;
