/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Box, Text, Button, VStack, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, name, bio, bioLink, isUnderConstruction }) {
  const [flipped, setFlipped] = useState(false);

  const flipSound = new Audio('/card-flip.mp3');

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" position="relative" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        {/* Front side */}
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
          >
            {/* Conditionally render the Under Construction banner only on the front */}
            {isUnderConstruction && !flipped && (
              <Box
                position="absolute"
                bottom="0"
                w="100%"
                bg="yellow.400"
                color="black"
                textAlign="center"
                py={2}
                fontWeight="bold"
                fontSize="lg"
                zIndex="1"
                borderRadius="0 0 12px 12px"
                style={{ backfaceVisibility: 'hidden' }} // Prevents it from showing on the back
              >
                🚧 Under Construction 🚧
              </Box>
            )}
          </Box>
        </Box>

        {/* Back side */}
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

          {/* Under Construction Banner visible on the back, but not reversed */}
          {isUnderConstruction && flipped && (
            <Box
              position="absolute"
              bottom="0"
              w="100%"
              bg="yellow.400"
              color="black"
              textAlign="center"
              py={2}
              fontWeight="bold"
              fontSize="lg"
              zIndex="1"
              borderRadius="0 0 12px 12px"
              style={{ transform: 'rotateY(0deg)' }} 
            >
              🚧 Under Construction 🚧
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

function Elite() {
  return (
    <VStack spacing={8} align="center" justify="center" p={10} bgImage="url('/basketball.png')" bgSize="contain" bgPosition="center" bgRepeat="no-repeat" minH="100vh" mb="300px">
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Changa', cursive">
        Meet Elite Athletes
      </Text>
      <Text fontSize="xl" color="#FFFDD0" fontFamily="'Changa', cursive">
        Click on Card for more Info
      </Text>
      <Text fontSize="2xl" color="#FFFDD0" fontFamily="'Bungee', sans-serif" mt={6}>
        Football
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        <Card
          frontImg="michael-1.png"
          name="Michael Terry III"
          bio="Michael Terry III is a rising star in football, an extremely rare blend of speed, agility, size and strength on the field. He has led Alamo Heights HS to many victories this season."
          bioLink="https://michael-terry-III.netlify.app"
          isUnderConstruction={false}
        />
        {/* Add more football cards as needed */}
      </SimpleGrid>
      <Text fontSize="2xl" color="#FFFDD0" fontFamily="'Coda', system-ui" mt={6}>
        Men's Basketball
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        <Card
          frontImg="logan-6.png"
          name="Logan Gonzalez"
          bio="Logan Gonzalez is a talented basketball player with a natural ability to score from anywhere on the court. His dedication and skills have earned him numerous accolades."
          bioLink="https://logan-gonzalez.netlify.app"
          isUnderConstruction={false}
        />
        <Card
          frontImg="cruz-9.jpg"
          name="Cruz Cantu"
          bio="Cruz Cantu is known for power and toughness. A steady player with a calm demeanor that flourishes in high pressure situations."
          bioLink="https://cruz-cantu.netlify.app"
          isUnderConstruction={false}
        />
        {/* Add more men's basketball cards as needed */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Teko', sans-serif" mt={6}>
        Women's Basketball
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        <Card
          frontImg="ella-6.png"
          name="Ella Ramirez"
          bio="Ella Ramirez is a talented basketball player who is a natural leader. Calm, cool, and collected under pressure makes her as good a floor general as one can find."
          bioLink="https://ella-ramirez.netlify.app"
        />
        <Card
          frontImg="ai-basketball-placeholder.png"
          name="Audri Garcia"
          bio="Audri Garcia is known for toughness, speed, and agility. A player that can do it all very well. Extremely versatile and able to play multiple positions with ease."
          bioLink="https://audri-garcia.netlify.app"
          isUnderConstruction={true}
        />
        <Card
          frontImg="valentina-6.jpg"
          name="Valentina Cantu"
          bio="Valentina Cantu is a dominant force on the court, known for her strength and agility. A powerful rebounder and a tenacious defender, she excels in the paint, controlling both ends of the floor."
          bioLink="https://valentina-cantu.netlify.app"
        />
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Bebas Neue', sans-serif" mt={6}>
        Baseball
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add baseball cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Pacifico', cursive" mt={6}>
        Softball
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        <Card
          frontImg="corinne-1.PNG"
          name="Corinne Bouvier"
          bio="Corinne Bouvier is an oustanding softball player who is a field general and fearless on the mound."
          bioLink="https://corinne-bouvier.netlify.app"
        />
        <Card
          frontImg="softball-placeholder.png"
          name="Damia McGarity"
          bio="Damia McGarity is an oustanding softball player who has unmatched power at the plate and athleticism."
          bioLink="https://damia-mcgarity.netlify.app"
          isUnderConstruction={true}
        />
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Passion One', sans-serif" mt={6}>
        Volleyball
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
      <Card
          frontImg="volleyball-placeholder.png"
          name="Danica McGarity"
          bio="Danica McGarity is an outstanding volleyball player who commands attention and respect on the court."
          bioLink="https://danica-mcgarity.netlify.app"
          isUnderConstruction={true}
        />
              <Card
          frontImg="ally-1.jpeg"
          name="Ally Rosa"
          bio="Ally Rosa is a natural leader on the court. Fearless, Confident, and Commanding describe her game. Teammates respond to her positive energy. Ally is a true Libero."
          bioLink="https://ally-rosa.netlify.app"
        />
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Gentium Plus', serif" mt={6}>
        Golf
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        <Card
          frontImg="norah-1.png"
          name="Norah Castillo"
          bio="Norah Castillo is an exceptional golfer known for her strategic mindset and poise on the course."
          bioLink="https://norah-castillo.netlify.app"
        />
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Exo 2', sans-serif" mt={6}>
        Table Tennis
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add table tennis cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Righteous', sans-serif" mt={6}>
        Hockey
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        <Card
          frontImg="charlie-1.png"
          name="Charlie Harvey"
          bio="Charlie Harvey is a skilled hockey player known for his sharp instincts and leadership on the ice. With exceptional vision and agility, he maneuvers through opponents effortlessly, making him a natural playmaker."
          bioLink="https://charlie-harvey.netlify.app"
        />
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Snowburst One', system-ui" mt={6}>
        Skiing
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add skiing cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Racing Sans One', sans-serif" mt={6}>
        Track
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add track cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Montserrat', sans-serif" mt={6}>
        Biking
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add biking cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'PT Sans', sans-serif" mt={6}>
        Weightlifting
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add weightlifting cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Lobster', sans-serif" mt={6}>
        Swimming
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add swimming cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Play', sans-serif" mt={6}>
        Soccer
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        {/* Add soccer cards here */}
      </SimpleGrid>
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Dancing Script', cursive" mt={6}>
        Dance
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyItems="center" alignItems="center">
        <Card
          frontImg="ava-1.png"
          name="Ava Castillo"
          bio="Ava Castillo is a passionate dancer known for her captivating performances and natural charisma. With grace and precision, she brings each routine to life, showcasing her ability to express emotion through movement."
          bioLink="https://ava-castillo.netlify.app"
        />
      </SimpleGrid>
      {/* Repeat similar sections for other sports */}
    </VStack>
  );
}

export default Elite;
