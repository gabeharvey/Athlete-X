import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import MainLayout from './components/MainLayout'; 
import LogIn from './components/LogIn.jsx'; 
import SignUp from './components/SignUp.jsx';  
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Contact from './components/Contact.jsx';
import Basketball from './components/Basketball.jsx';
import Football from './components/Football.jsx';
import Volleyball from './components/Volleyball.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'transparent',
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <MainLayout /> }, 
      { path: 'login', element: <LogIn /> }, 
      { path: 'signup', element: <SignUp /> }, 
      { path: 'privacypolicy', element: <PrivacyPolicy /> }, 
      { path: 'contact', element: <Contact /> }, 
      { path: 'basketball', element: <Basketball /> },
      { path: 'football', element: <Football /> },
      { path: 'volleyball', element: <Volleyball /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
