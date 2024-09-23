import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';
import Home from '../src/components/Home.jsx';
import About from '../src/components/About.jsx';
import Packages from '../src/components/Packages.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;