import { Box, Text, Image, VStack, Stack } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa'; // React icon
import { SiChakraui } from 'react-icons/si'; // Chakra UI icon

function Technology() {
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
    minHeight="100vh" // Ensures the component takes full height but no overflow
    py={{ base: '80px', md: '120px', lg: '150px' }} // Adds vertical padding for spacing on different screen sizes
    >
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="center">
        Technology Behind Elite Athlete Applications
      </Text>

      <Stack
        spacing={10}
        direction={{ base: 'column', md: 'row' }} 
        align="center"
      >
        {/* First Technology Box with Icons Vertically Centered */} 
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
            Tools We Use
          </Text>
          <Stack direction="row" spacing={8} justify="center" mb={4}>
            <FaReact color="#61DBFB" size="80px" /> {/* React Icon */}
            <SiChakraui color="#319795" size="80px" /> {/* Chakra UI Icon */}
          </Stack>
          <Text color="#FFFDD0" fontFamily="'Changa', cursive">
            Every application is built using modern technologies like React and Chakra UI to ensure flexibility and top-notch user experience. We believe every athlete is unique and every application should be unique as well.
          </Text>
        </Box>

        {/* Second Technology Box (No Image) */}
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
            <span className="tilt-prism">Athlete X Elite</span> is a World Where Code Meets Sports
          </Text>
          <Text color="#FFFDD0" fontFamily="'Changa', cursive">
            React and Chakra UI allow us to build fully responsive applications, perfect for elite athletes. Recruiters can view them on any device size. Each app is coded from scratch to ensure top performance and scalability.
          </Text>
        </Box>

        {/* Third Technology Box with Image and Brief Sentence */}
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
            Our Collaborative Approach
          </Text>
          <Text color="#FFFDD0" fontFamily="'Changa', cursive" mb={4}>
            Athlete X Elite engineers work closely to design custom applications for each athlete, ensuring a unique experience tailored to achieve their goals.
          </Text>
          <Image 
            src="/comp-engineers.png" 
            alt="Engineer Collaboration"
            borderRadius="12px"
            boxSize="250px"
            objectFit="cover"
          />
        </Box>
      </Stack>
    </VStack>
  );
}

export default Technology;
