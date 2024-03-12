import React from 'react';
import AboutIndex from "./Components/About/AboutIndex/AboutIndex";
import Footer from "./Components/Footer/Footer";
import Media from "./Components/Media/Media";
import NavBar from "./Components/NavBar/NavBar";
import ShowIndex from "./Components/Shows/ShowIndex/ShowIndex";
import Splash from "./Components/Splash/Splash";

function App(): JSX.Element {
  return (
    <>
      <NavBar/>
      <Splash/>
      <ShowIndex/>
      <Media/>
      <AboutIndex/>
      <Footer/>
    </>
  );
}

export default App;
