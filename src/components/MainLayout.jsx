// MainLayout.jsx
import Home from './Home';
import Warning from './Warning';
import About from './About';
import Celeb from './Celeb';
import Showcase from './Showcase';
import Subscription from './Subscription';
import Progression from './Progression';
import Packages from './Packages';
import Technology from './Technology';
import Mission from './Mission';

const MainLayout = () => {
  return (
    <>
      <Home />
      <Warning />
      <About />
      <Celeb />
      <Mission />
      <Showcase />
      <Progression />
      <Technology />
      <Subscription />
      <Packages />
    </>
  );
};

export default MainLayout;
