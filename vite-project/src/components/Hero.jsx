import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/Context'; // Ensure the path is correct
import logo1 from '../assets/logo1.png';
import TypingEffect from '../animation/TypingEffect';
import { TypeAnimation } from 'react-type-animation';
 // Assuming you are using react-router-dom

const Hero = ({ setSL }) => {
  const texts = [
    "   </> Simplify your reading with Make-Short......</>",
    "   </> an open-source Artificial intelligence.......</>",
    "   </> enter a url.......</>",
  ];
  const { token, setToken } = useContext(StoreContext);
  const [visible, setVisible] = useState(false);
  useEffect(() => {

    setTimeout(() => {
        setVisible(true);
    }, 100);
  }, []);
  

  

  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo1} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() => setSL(true)}
          className='black_btn'
        >
          Sign In / Sign Up
        </button>
        
        {token && (
          <button
            type='button'
            onClick={logOut}
            className='black_btn ml-4'
          >
            Log Out
          </button>
        )}
      </nav>

      <h1 className={`head_text fade-in-text ${visible ? 'visible' : ''}`}>
        Make-Short: Summary Generator <br className='max-md:hidden' />
        <span className='purple_pink_gradient'>Open AI </span>
      </h1>
      
      <TypingEffect texts={texts} speed={50}/>
    </header>
  );
};

export default Hero;
