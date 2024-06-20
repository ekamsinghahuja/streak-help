import React, { useContext, useEffect, useState } from 'react'
import logo1 from '../assets/logo1.png';
import { StoreContext } from '../context/Context';


const Login = ({setSL}) => {

    const [curr, setCurrState] = useState('Sign Up');
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    useEffect(() => {

        setTimeout(() => {
            setVisible(true);
        }, 100);
    }, []);
    
  return (
    
    <div className='w-full flex justify-center items-center flex-col gap-5'>
        <h1 className={`head_text fade-in-text ${visible ? 'visible' : ''}`}>
        Make-Short: Summary Generator <br className='max-md:hidden' />
        <span className='purple_pink_gradient'>Open AI </span>
      </h1>
      
        <h2 className='desc'>
            Simplify your reading with Summize, an open-source article summarizer
            that transforms lengthy articles into clear and concise summaries
        </h2>
        <img src={logo1} alt='sumz_logo' className='w-28 object-contain' />
        <div>
            <h2 className='head_text'>{curr}<br className='max-md:hidden'/></h2>
            <h2 className='desc'>
                enter your details
            </h2>
        </div>
    <section className='mt-5 w-full max-w-xl'>
    <div className='flex flex-col w-full gap-2'>

      <form action="">
        {curr === "Sign Up"?<>
            <h2>username:</h2>
            <input
                type='url'
                placeholder='username'
                required
                className='url_input peer' 
            />
        </>:<></>}
        
        <h2>email:</h2>
        <input
            type='url'
            placeholder='email'
            required
            className='url_input peer' 
          />
        <h2>password:</h2>
        <input
            type='url'
            placeholder='password'
            required
            className='url_input peer' 
          />
        <div className='flex flex-col'>
        <button
          type='button'
          onClick={() => setSL(true)}
          className='black_btn mt-2'
        >{curr}</button>
        <button
          type='button'
          onClick={() => setSL(false)}
          className='black_btn mt-2'
        >back</button>
        </div>
        {curr === "Sign Up"
            ? <p>Already have an account? <span onClick={() => {setCurrState('Log In')}} className="purple_pink_gradient">Login here</span></p>
            : <p>Create a new account? <span onClick={() => setCurrState('Sign Up')} className="purple_pink_gradient">Click here</span></p>}
        

        </form>
    </div>
    </section>

      
      
    </div>
  )
}

export default Login
