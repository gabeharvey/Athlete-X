import { Box, Text, Image, VStack, Stack } from '@chakra-ui/react';

function Progression() {
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
    Athlete Progression
  </Text>

  {/* Coming Soon Banner */}
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
        position="relative"
      >
        {/* First Progression Box */}
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
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive" mb={4}>
            Starting Point
          </Text>
          <Image 
            src="/gym-girl.png" 
            alt="Athlete Starting Point"
            borderRadius="12px"
            boxSize="250px"
            objectFit="cover"
            mb={4}
          />
          <Text color="#FFFDD0" fontFamily="'Changa', cursive">
            We begin by capturing the athlete’s foundational skills, focusing on areas for development that top college evaluators desire.
          </Text>
        </Box>

        {/* Second Progression Box */}
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
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive" mb={4}>
            Progress Achieved
          </Text>
          <Image 
            src="/football-player-1.png" 
            alt="Athlete Progress Achieved"
            borderRadius="12px"
            boxSize="250px"
            objectFit="cover"
            mb={4}
          />
          <Text color="#FFFDD0" fontFamily="'Changa', cursive">
            After dedicated effort, we showcase athlete improvement, ready for recruiters and scouts.
          </Text>
        </Box>
      </Stack>
    </VStack>
  );
}

export default Progression;
