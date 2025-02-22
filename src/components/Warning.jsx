import { useState, useEffect } from 'react';

const Warning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const message = "Due to overwhelming demand, all new requests will have a two-week waiting period.";
  const additionalText = (
    <>
      <span style={{ fontFamily: "'Tilt Prism', cursive", fontWeight: "bold" }}>Athlete X Elite</span> is Texas born and bred. Your star athlete should not be a number in a database. We believe they are more.
      Why the #<span style={{ fontFamily: "'Tilt Prism', cursive", fontWeight: "bold" }}>1</span> and cream colors?{" "}
      <span style={{ fontFamily: "'Tilt Prism', cursive", fontWeight: "bold" }}>Athlete X Elite</span> treats every
      athlete as the #<span style={{ fontFamily: "'Tilt Prism', cursive", fontWeight: "bold" }}>1</span> draft pick and cream of the crop. We believe every athlete is <span style={{ fontFamily: "'Tilt Prism', cursive", fontWeight: "bold" }}>1 / 1</span>. In this spirit, every app we design is coded from scratch and unique.
    </>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="warning-container" style={{ margin: '35px', textAlign: 'center' }}>
      {/* Warning Message */}
      <h1
        className="fade-in"
        style={{
          color: '#FFA500',
          fontSize: '1.2rem',
          fontFamily: "'Changa', cursive",
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '10px',
          borderRadius: '5px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-in',
        }}
      >
        {message}
      </h1>
      <p
        style={{
          color: '#FFFDD0', // Cream color
          fontSize: '1.1rem',
          fontFamily: "'Changa', cursive",
          marginTop: '20px',
        }}
      >
        {additionalText}
      </p>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Warning;
