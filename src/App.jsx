import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from "./components/Landing";
import Marque from "./components/Marque";
import CustomNavbar from "./components/CustomNavbar";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";




const App = () => {


  return (
   <>
   <div className='w-full min-h-screen bg-zinc-900 overflow-hidden'>



   <CustomNavbar  />
   <Landing />
   <Marque />
   <About />
   <Eyes />
   <Feature />
   <Cards />
   <Footer />

   </div>
   
   </>
   
  );

}

export default App;