import { Box, Text, Button, Input, Textarea, FormControl, FormLabel, VStack } from '@chakra-ui/react';

const Contact = () => {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={[5, 10]}  // Adjust padding for small (mobile) and larger screens
      bgImage="url('/basketball.png')" 
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="100vh"
      mb="200px"
    >
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        borderRadius="12px"
        p={[5, 8]}  // Adjust padding for mobile and larger screens
        w={["90%", "90%", "400px"]}  // Use 90% for small screens, maintaining it for medium sizes
        maxW="400px" // Set a max width to avoid overflow on larger screens
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Text fontSize={["xl", "2xl"]} fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Contact Us
        </Text>

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
            Name
          </FormLabel>
          <Input
            fontFamily="'Changa', cursive"
            type="text"
            placeholder="Enter your name"
            bg="transparent"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
            borderRadius="8px"
            p={4}
          />
        </FormControl>

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
            Email
          </FormLabel>
          <Input
            fontFamily="'Changa', cursive"
            type="email"
            placeholder="Enter your email"
            bg="transparent"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
            borderRadius="8px"
            p={4}
          />
        </FormControl>

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
            Message
          </FormLabel>
          <Textarea
            fontFamily="'Changa', cursive"
            placeholder="Enter your message"
            bg="transparent"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
            borderRadius="8px"
            p={4}
          />
        </FormControl>

        <Button
          mt={8}
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
          Send Message
        </Button>
      </Box>
    </VStack>
  );
};

export default Contact;