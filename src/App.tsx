import React, { useState } from 'react';
import AboutIndex from "./Components/About/AboutIndex/AboutIndex";
import Footer from "./Components/Footer/Footer";
import Media from "./Components/Media/Media";
import NavBar from "./Components/NavBar/NavBar";
import ShowIndex from "./Components/Shows/ShowIndex/ShowIndex";
import Splash from "./Components/Splash/Splash";
import SideMenu from './Components/NavBar/SideMenu/SideMenu';

function App(): JSX.Element {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <NavBar isClicked={isClicked} setIsClicked={setIsClicked}/>
      <SideMenu isClicked={isClicked} setIsClicked={setIsClicked}/>
      <Splash/>
      <ShowIndex/>
      <Media/>
      <AboutIndex/>
      <Footer/>
    </>
  );
}

export default App;
