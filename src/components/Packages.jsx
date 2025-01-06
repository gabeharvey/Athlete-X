import { Box, Text, Button, VStack, Stack } from '@chakra-ui/react';

function Packages() {
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
        Standalone Packages
      </Text>
      <Stack
        spacing={10}
        direction={{ base: 'column', md: 'row' }} 
        align="center"
      >
        {/* Spotlight Package */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={8}
          w="300px"
          h="375px" 
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transition="transform 0.3s, box-shadow 0.3s"
          display="flex" 
          flexDirection="column" 
          justifyContent="center" 
          alignItems="center" 
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            Spotlight Package $299.00
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            This package includes player bio, 2 recruit films, 2 digital sports cards, and recruiter contact form.
          </Text>
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
            Purchase
          </Button>
        </Box>
        {/* Feature Package */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={8}
          w="300px"
          h="375px"
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            Feature Package $399.00
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            This package includes player bio, 4 recruit films, 4 digital sports cards, and recruiter contact form. In addition, package includes extra collab session.
          </Text>
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
            Purchase
          </Button>
        </Box>
        {/* Premium Package */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={8}
          w="300px"
          h="375px"
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            Premium Package $499.00
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            This package includes player bio, 6 recruit films, 6 digital sports cards, recruiter contact form, and a personalized app walkthrough session.
          </Text>
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
            Purchase
          </Button>
        </Box>
      </Stack>
    </VStack>
  );
}

export default Packages;
