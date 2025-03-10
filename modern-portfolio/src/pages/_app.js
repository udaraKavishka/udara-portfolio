import "../app/globals.css";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


export
  const App = ({ Component, pageProps }) => {
    return (
      <>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  };

export default App;