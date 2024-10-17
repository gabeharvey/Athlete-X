/* eslint-disable react/prop-types */
import { Box, Text, Button, VStack, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, name, bio, bioLink }) {
  const [flipped, setFlipped] = useState(false);

  const flipSound = new Audio('/card-flip.mp3');

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip} 
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            {name}
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            Player Bio: {bio}
          </Text>
          <Button
            as="a"
            href={bioLink}
            target="_blank"
            rel="noopener noreferrer"
            mt={6}
            fontFamily="'Tilt Prism', sans-serif"
            fontWeight="bold"
            bg="transparent"
            color="#FFFDD0"
            border="2px solid #FFA500"
            borderRadius="8px"
            padding="10px 20px"
            fontSize="18px"
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{
              bg: '#FFA500',
              color: 'white',
              transform: 'scale(1.05)',
            }}
          >
            Player Bio
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function Elite() {
  return (
    <VStack spacing={8} align="center" justify="center" p={10} bgImage="url('/basketball.png')" bgSize="contain" bgPosition="center" bgRepeat="no-repeat" minH="100vh" mb="300px">
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Changa', cursive">
        Meet Our Elite Athletes
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Card
          frontImg="charlie-1.png" 
          name="Charlie Harvey"
          bio="Charlie Harvey is a promising young hockey player known for his quick reflexes and powerful shots. His ability to anticipate the flow of the game makes him a key player in both offensive and defensive situations."
          bioLink="https://charlie-harvey.netlify.app"
        />
        <Card
          frontImg="basketball-placeholder.png" 
          name="Ella Ramirez"
          bio="Ella Ramirez is a versatile player with excellent court vision and leadership skills. She is known for her ability to perform under pressure, making her a valuable asset to any team."
          bioLink="https://ella-ramirez.netlify.app"
        />
        <Card
          frontImg="logan-6.png"
          name="Logan Gonzalez"
          bio="Logan Gonzalez is a talented basketball player with a natural ability to score from anywhere on the court. His dedication and skills have earned him numerous accolades."
          bioLink="https://logan-gonzalez.netlify.app"
        />
        <Card
          frontImg="norah-1.png"
          name="Norah Castillo"
          bio="Norah Castillo is an accomplished golfer with a precise swing and a calm demeanor. She has a knack for reading the greens and staying composed under pressure, making her a formidable competitor."
          bioLink="https://norahcastillo.netlify.app"
        />
        <Card
          frontImg="ava-1.png"
          name="Ava Castillo"
          bio="Ava Castillo is a passionate dancer known for her graceful movements and expressive performances. She has trained in various dance styles and continues to impress audiences with her technique and creativity."
          bioLink="https://avacastillo.netlify.app"
        />
        <Card
          frontImg="football-player.png"
          name="John Smith"
          bio="John Smith is a rising star in football, known for his speed and agility on the field. He has averaged 200 yards rushing per game this season, leading his team to multiple victories."
          bioLink="https://example.com/john-smith"
        />
      </SimpleGrid>
    </VStack>
  );
}

export default Elite;
