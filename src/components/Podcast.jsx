import { Box, Text, Image, VStack, Stack } from '@chakra-ui/react';

function Podcast() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')" 
      bgSize="contain" 
      bgPosition="center" 
      bgRepeat="no-repeat"
      minHeight="100vh" 
      py={{ base: '80px', md: '120px', lg: '150px' }}
      position="relative"
      w="50%" 
      mx="auto"
    >
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="center">
        <span className="tilt-prism-3">Athlete X Elite</span> Podcast 
      </Text>
      <Box
            position="absolute"
            top="250px"
            left="50%" 
            transform="translateX(-50%) rotate(-5deg)"
            bg="rgba(255, 0, 0, 0.8)"
            color="white"
            fontSize="md"
            fontWeight="bold"
            px={2}
            py={2}
            borderRadius="8px"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.5)"
            zIndex="2"
            minWidth="150px"
            fontFamily="'Tilt Prism', cursive"
            textAlign="center"
          >
            Coming Soon
          </Box>
      <Stack
        spacing={10}
        direction={{ base: 'column', md: 'row' }}
        align="center"
      >
        {/* First Podcast Box */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={6}
          w="300px"
          h="450px"
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive" mb={4}>
            Episode 1: The Journey Begins
          </Text>
          <Image 
            src="/podcast-logo-2.jpg" 
            alt="Podcast Episode 1"
            borderRadius="12px"
            boxSize="250px"
            objectFit="cover"
            mb={4}
            alignSelf="center"
          />
          <Text color="#FFFDD0" fontFamily="'Changa', cursive">
            Join us as we discuss the beginnings of Athlete X Elite and how technology is shaping the future of sports.
          </Text>
        </Box>

        {/* Second Podcast Box */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={6}
          w="300px"
          h="450px"
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive" mb={4}>
            Episode 2: Meet the Stars of Tomorrow, Today!
          </Text>
          <Image 
            src="/softball-player.jpg" 
            alt="Podcast Episode 2"
            borderRadius="12px"
            boxSize="250px"
            objectFit="cover"
            mb={4}
            alignSelf="center"
          />
          <Text color="#FFFDD0" fontFamily="'Changa', cursive">
            Sit down one on one to listen to the story of a local star athlete and their journey.
          </Text>
        </Box>
      </Stack>
    </VStack>
  );
}

export default Podcast;
