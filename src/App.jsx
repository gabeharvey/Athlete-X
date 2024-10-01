import { ChakraProvider, extendTheme } from '@chakra-ui/react'; 
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';
import Home from '../src/components/Home.jsx';
import About from '../src/components/About.jsx';
import Packages from '../src/components/Packages.jsx';

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
        <Home />
        <About />
        <Packages />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
