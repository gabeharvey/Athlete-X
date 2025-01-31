import { ChakraProvider, extendTheme } from '@chakra-ui/react'; 
import { Outlet } from 'react-router-dom'; 
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';
import './App.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black', 
        color: '#FFFDD0', 
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}> 
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
