import { Box, Text, VStack, Stack, Button } from '@chakra-ui/react'; 
import { Link } from 'react-router-dom';

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
        Ready to Join Athlete X Elite Family?
      </Text>
      <Stack
        spacing={10}
        direction={{ base: 'column', md: 'row' }} 
        align="center"
      >
        {/* Spotlight Package */}
        {/* <Box
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
            Junior Package $299.00
          </Text>
            <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
              Athlete X Elite engineers will code your athlete website from scratch. This package can later be upgraded to Showcase Package for additional cost. Many athlete journeys start here. Phototography and Videography will be provided to us.
            </Text> */}
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
            Purchase
          </Button> */}
        {/* </Box> */}
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
            1/1 Website $499.00
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            Athlete X Elite engineers will code your star athlete custom website from scratch using the latest technologies. This custom website will be unique and tailored to best showcase the athlete as a player and student.
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
              Apply to Join
            </Button>
          </Link>
        </Box>
      </Stack>
    </VStack>
  );
}

export default Packages;
