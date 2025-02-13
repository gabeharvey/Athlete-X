import { Box, Text, VStack, Stack } from '@chakra-ui/react'; // Add button if needed

function Subscription() {
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
        Subscription Plans
      </Text>
      <Stack
        spacing={10}
        direction={{ base: 'column', md: 'row' }}
        align="center"
      >
        {/* Monthly Plan */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={8}
          w="300px"
          h="450px"
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
            Monthly Subscription $39.00
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            Get your star athlete positioned next to top athletes in your sport. Get ongoing feedback and guidance from athletes who have played at the pinnacle of their sport and include info in app for recruiters to see. We will collab once a month to update app features, if needed. We want your star athlete to succeed!
          </Text>
          {/* <Button
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
            Subscribe
          </Button> */}
        </Box>
        {/* Yearly Plan */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={8}
          w="300px"
          h="450px"
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
            Yearly Subscription $399.00
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            Save big with our yearly plan! Includes all monthly features plus exclusive yearly events and priority access to top recruiting resources.
          </Text>
          {/* <Button
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
            Subscribe
          </Button> */}
        </Box>
      </Stack>
    </VStack>
  );
}

export default Subscription;
