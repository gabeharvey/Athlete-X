/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Image, VStack, Stack } from '@chakra-ui/react';

function Celeb() {
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
    >
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="center">
        <span className="tilt-prism-3">Athlete X Elite</span> is endorsed by and partnered with professional and collegiate stars!
      </Text>

      <Stack
        spacing={10}
        align="center"
        justifyContent="center" 
        direction={{ base: 'column', md: 'row' }} 
        w="full"
      >
        {/* Celebrity Image */}
        <Image
          src="/wane-2.png"
          alt="Celebrity Endorsement"
          borderRadius="10px"
          boxSize="250px"
          objectFit="cover"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        />

        {/* Quote and Name */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={6}
          w={{ base: "100%", md: "500px" }}
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Text fontSize="xl" fontStyle="italic" color="#FFFDD0" mb={4} fontFamily="'Changa', cursive">
            "Athlete X Elite truly understands how to highlight an athlete's journey. Their attention to specific skills and ability to showcase them gives college recruiters the information they need very quickly. This holds true for sports across the spectrum for young aspiring athletes."
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            - Wane McGarity, holder of several school records for University of Texas football and Dallas Cowboys star!
          </Text>
        </Box>
        <Image
          src="/madison-pic-5.JPEG"
          alt="Celebrity Endorsement"
          borderRadius="10px"
          boxSize="250px"
          objectFit="cover"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        />
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={6}
          w={{ base: "100%", md: "500px" }}
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Text fontSize="xl" fontStyle="italic" color="#FFFDD0" mb={4} fontFamily="'Changa', cursive">
            "There are many aspects to consider in the recruiting process. Athlete X Elite displays athletic skills but also highlights other aspects that make an athlete stand out. Athlete X Elite will treat you like family."
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            - Madison Nunn, Our Lady of the Lake University, 2023 NFCA Softball First Team All-American!
          </Text>
        </Box>
      </Stack>
    </VStack>
  );
}

export default Celeb;
