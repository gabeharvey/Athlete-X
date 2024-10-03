import { useState, useRef } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import '../App.css';

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
    }, 3000);
    setTimeout(() => {
      setIsH3Visible(true);
    }, 6000); 
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
      <div className="fancy-divider"></div>
      {isH3Visible && (
        <div className="zoom-in">
          <h3>
            It is crucial to stand out! The talent and skills are there. People want to see it quickly and First Class!
          </h3>
        </div>
      )}
      <Flex 
        justify="center" 
        align="center" 
        mt="5px" 
        height="100vh" 
      >
        <Box 
          w={{ base: "90%", sm: "70%", md: "60%", lg: "50%" }} 
          h="400px" 
          borderRadius="12px" 
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)" 
          position="relative" 
          overflow="hidden" 
          bgImage="url('/tech-city.png')" 
          bgSize="cover"
          bgPosition="center"
          mb={{ base: "80px", sm: "20px", md: "20px", lg: "20px" }}
        >
          <Text 
            position="absolute" 
            bottom="20px" 
            left="20px" 
            fontSize="2xl" 
            fontWeight="bold" 
            color="#FFFDD0" 
            fontFamily="'Changa', cursive"
          >
            Why Athlete X?
          </Text>
        </Box>
      </Flex>
      <audio ref={audioRef} src="/outdoor-basketball-bounce.mp3" preload="auto" />
    </div>
  );
}

export default About;
