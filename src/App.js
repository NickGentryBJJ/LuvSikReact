import AboutIndex from "./Components/About/AboutIndex/AboutIndex";
import Footer from "./Components/Footer/Footer";
import Media from "./Components/Media/Media";
import NavBar from "./Components/NavBar/NavBar";
import Shows from "./Components/Shows/Shows";
import Top from "./Components/Top/Top";

function App() {
  return (
    <>
      <NavBar/>
      <Top/>
      <Shows/>
      <Media/>
      <AboutIndex/>
      <Footer/>
    </>
  );
}

export default App;
