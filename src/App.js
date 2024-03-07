import AboutIndex from "./Components/About/AboutIndex/AboutIndex";
import Footer from "./Components/Footer/Footer";
import Media from "./Components/Media/Media";
import NavBar from "./Components/NavBar/NavBar";
import ShowIndex from "./Components/Shows/ShowIndex/ShowIndex";
import Top from "./Components/Top/Top";

function App() {
  return (
    <>
      <NavBar/>
      <Top/>
      <ShowIndex/>
      <Media/>
      <AboutIndex/>
      <Footer/>
    </>
  );
}

export default App;
