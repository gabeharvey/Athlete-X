import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Baseball() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/baseball.png')" 
      bgSize="contain" 
      bgPosition="center" 
      bgRepeat="no-repeat" 
      h="100vh" 
      mb="200px"
      mt="200px"
    >
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        borderRadius="12px"
        p={8}
        w="350px"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Building a Strong Baseball Profile
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-crafted baseball recruiting profile is essential for attracting the attention of college coaches. Display your batting average, pitching stats, and other achievements to showcase your skills.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Providing details on your strengths, such as speed, fielding ability, and versatility, can help coaches evaluate your potential and synergy for their team.
        </Text>
      </Box>
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        borderRadius="12px"
        p={8}
        w="350px"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          The Importance of Highlight Reels
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Highlight reels are key to showcasing your skills and attracting recruiters. They allow you to display your hitting, pitching, and fielding abilities in an engaging way.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A professionally edited highlight reel can effectively present your best moments and give recruiters a glimpse of your playing style and potential.
        </Text>
        <Link to="/contact">
        <Button
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
          Design Baseball Profile
        </Button>
      </Link>
      </Box>
    </VStack>
  );
}

export default Baseball;
