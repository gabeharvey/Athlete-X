// MainLayout.jsx
import Home from './Home';
import Warning from './Warning';
import About from './About';
import Celeb from './Celeb';
// import Showcase from './Showcase';
import Subscription from './Subscription';
import Progression from './Progression';
import Packages from './Packages';
import Technology from './Technology';
import Bubble from './Bubble';
// import Mission from './Mission';

const MainLayout = () => {
  return (
    <>
      <Home />
      <Warning />
      <Bubble />
      <About />
      <Celeb />
      {/* <Mission /> */}
      {/* <Showcase /> */}
      <Technology />
      <Progression />
      <Subscription />
      <Packages />
    </>
  );
};

export default MainLayout;
