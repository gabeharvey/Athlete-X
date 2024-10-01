import { useState, useRef } from 'react';
import '../App.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true); 
  const audioRef = useRef(null); 
  const handleStart = () => {
    setIsVisible(true); 
    audioRef.current.play(); 
    setTimeout(() => {
      setIsH2Visible(true);
    }, 3000);

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
        Welcome to <span className="tilt-prism">Athlete X</span>! You have done all the hard work and sacrifice. Allow us to present your Elite Athlete to the world!
      </h1>
      <div className="fancy-divider"></div>
      <h2 className={isH2Visible ? 'zoom-in' : ''}>
        Mobile friendly, yet responsive app showcasing athletic abilities.
      </h2>
      <audio ref={audioRef} src="/outdoor-basketball-bounce.mp3" preload="auto" />
    </div>
  );
}

export default About;