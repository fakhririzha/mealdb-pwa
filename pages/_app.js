import '../styles/globals.css';
import Navbar from './components/UI/Navbar/Navbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
