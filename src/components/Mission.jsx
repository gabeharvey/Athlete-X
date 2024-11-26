import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Mission() {
  const [showMissionButton, setShowMissionButton] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(-1);
  const [missionStatementVisible, setMissionStatementVisible] = useState(false);
  const [statementStep, setStatementStep] = useState(0); 

  const missionTexts = [
    <>
      Every young athlete has <span style={{ fontFamily: 'Tilt Prism, cursive' }}>1</span> dream.
    </>,
    <>
      At <span style={{ fontFamily: 'Tilt Prism, cursive' }}>Athlete X Elite</span>, our number{' '}
      <span style={{ fontFamily: 'Tilt Prism, cursive' }}>1</span> goal and mission is to help them
      achieve that dream.
    </>,
    <>Every dream starts with opportunity.</>,
  ];

  const handleStartMission = () => {
    setShowMissionButton(false);
    let index = 0;
    const interval = setInterval(() => {
      setCurrentTextIndex(index);
      index++;
      if (index === missionTexts.length) {
        clearInterval(interval);
        setTimeout(() => {
          setMissionStatementVisible(true);
        }, 1500); 
      }
    }, 3000); 
  };

  const handleStatementSequence = () => {
    if (statementStep < 4) {
      setTimeout(() => {
        setStatementStep((prev) => prev + 1);
      }, 3000); 
    }
  };

  if (missionStatementVisible) {
    handleStatementSequence();
  }

  return (
    <div className="mission-container" style={{ fontFamily: 'Changa, sans-serif',        
        backgroundImage: `url('/basketball.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px', }}>
      {showMissionButton && (
        <button className="clickMe" onClick={handleStartMission}>
          Our Mission
        </button>
      )}

      {!showMissionButton && currentTextIndex >= 0 && currentTextIndex < missionTexts.length && (
        <h2 key={currentTextIndex} className="zoom-from-far mission-text">
          {missionTexts[currentTextIndex]}
        </h2>
      )}

      {missionStatementVisible && (
        <div className="mission-statement-container">
          {statementStep >= 1 && (
            <h1
              className="zoom-from-far"
              style={{
                fontFamily: 'Tilt Prism, cursive',
                color: '#FFFDD0',
                fontSize: '200px',
                fontWeight: 'bold',
              }}
            >
              1
            </h1>
          )}
          {statementStep >= 2 && (
            <h2 className="zoom-from-far">
              Our mission is to support young athletes by providing a platform to highlight their
              talents, inspire growth, and open doors to opportunities.
            </h2>
          )}
          {statementStep >= 3 && (
            <h2 className="zoom-from-far">
              <span style={{ fontStyle: 'italic' }}>Every young athlete deserves to shine.</span>
            </h2>
          )}
          {statementStep >= 4 && (
            <p className="zoom-from-far">
              Want to help us make a difference?{" "}
              <Link to="/contact" style={{ color: '#FFA500', textDecoration: 'underline' }}>
                Contact Us
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Mission;
