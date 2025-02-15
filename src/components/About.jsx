import { useState, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { PiThreadsLogoBold } from 'react-icons/pi';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isH3Visible, setIsH3Visible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const audioRef = useRef(null);

  const handleStart = () => {
    setIsVisible(true);
    audioRef.current.play();
    setTimeout(() => {
      setIsH2Visible(true);
    }, 5000);
    setTimeout(() => {
      setIsH3Visible(true);
    }, 10000);
    setIsButtonVisible(false);
  };

  return (
    <div className="about-container">
      {isButtonVisible && (
        <button className="clickMe" onClick={handleStart} style={{ marginTop: '2px' }}>
          Click & Learn More!
        </button>
      )}
      <h1 className={isVisible ? 'zoom-in' : ''}>
        Welcome to <span className="tilt-prism">Athlete X Elite</span>! You have done all the hard work and sacrifice. Allow us to present your Elite Athlete to the world!
      </h1>
      <div className="fancy-divider"></div>
      <h2 className={isH2Visible ? 'zoom-in' : ''}>
        Mobile friendly, yet responsive app showcasing athletic abilities and journey.
      </h2>
      <div className="fancy-divider"></div>
      {isH3Visible && (
        <h3 className="zoom-in">
          It is crucial to stand out! The talent and skills are there. People want to see it all quickly and First Class!
        </h3>
      )}
      <p className="centered-text">
        Do not see your sport listed? <span className="tilt-prism">Athlete X Elite</span> has you covered! 
        <Link to="/contact" style={{ marginLeft: '5px', color: '#FFA500', textDecoration: 'underline' }}>
          Contact
        </Link>
        {' '}
        us for more information.
      </p>
      <p className="centered-text">We are proud supporters of Youth Sports</p>
      <div className="centered-images">
        <img src="/ll-logo.png" alt="Little League Logo 1" className="small-image" />
      </div>
      <audio ref={audioRef} src="/epic-intro.mp3" preload="auto" />

      {/* Social Media Section */}
      <div className="social-media-section">
        <p className="social-media-text">Get Social with <span className="tilt-prism">Athlete X Elite</span></p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/people/Athlete-X-Elite/61568944931104/?mibextid=LQQJ4d&rdid=TEUVJDRMaCDf59oU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17sXncDzHY%2F%3Fmibextid%3DLQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={30} style={{ margin: '0 10px', color: '#3b5998' }} />
          </a>
          <a
            href="https://www.instagram.com/athlete_x_elite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={30} style={{ margin: '0 10px', color: '#E4405F' }} />
          </a>
          <a
            href="https://www.threads.net/athlete_x_elite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
          >
            <PiThreadsLogoBold size={30} style={{ margin: '0 10px', color: '#FFFDD0' }} />
          </a>
          <a
            href="https://www.youtube.com/@AthleteXElite" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={30} style={{ margin: '0 10px', color: '#FF0000' }} />
          </a>
          <a
            href="https://www.snapchat.com/add/AthleteXElite" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snapchat"
          >
            <FaSnapchatGhost size={30} style={{ margin: '0 10px', color: '#FFFC00' }} />
          </a>
          <a
            href="https://www.tiktok.com/@athlete_x_elite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok size={30} style={{ margin: '0 10px', color: '#69C9D0' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
