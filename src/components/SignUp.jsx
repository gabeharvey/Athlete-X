import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';

function SignUp() {
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
      h="100vh"
    >
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        borderRadius="12px"
        p={8}
        w="300px"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Sign Up
        </Text>

        <Input
          mt={6}
          placeholder="Full Name"
          color="white"
          borderColor="#FFA500"
          _hover={{ borderColor: '#FFA500' }}
          _focus={{ borderColor: '#FFA500' }}
          bg="transparent"
          borderRadius="8px"
          p={4}
        />

        <Input
          mt={6}
          placeholder="Email"
          type="email"
          color="white"
          borderColor="#FFA500"
          _hover={{ borderColor: '#FFA500' }}
          _focus={{ borderColor: '#FFA500' }}
          bg="transparent"
          borderRadius="8px"
          p={4}
        />

        <Input
          mt={6}
          placeholder="Password"
          type="password"
          color="white"
          borderColor="#FFA500"
          _hover={{ borderColor: '#FFA500' }}
          _focus={{ borderColor: '#FFA500' }}
          bg="transparent"
          borderRadius="8px"
          p={4}
        />

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
          Create Account
        </Button>
      </Box>
    </VStack>
  );
}

export default SignUp;
