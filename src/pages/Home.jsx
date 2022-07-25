import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineGithub} from 'react-icons/ai'
import {FaLongArrowAltRight, FaDiscord} from 'react-icons/fa'
import {Link} from 'react-scroll'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Firebase from '../assets/firebase.png'
import Bootstrap from '../assets/bootstrap.png'
import JavaScript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import ReactJS from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Contact from '../assets/contact.svg'
import CardBG from '../assets/cardbg.png'
import emailjs from 'emailjs-com'
import CardBG2 from '../assets/cardbg2.png'
import CardBG3 from '../assets/cardbg3.png'
import CardBG4 from '../assets/cardbg4.png'
import CardBG5 from '../assets/cardbg5.png'
import CardBG6 from '../assets/cardbg6.png'

const Home = () => {

  
  const [from_name, setFromName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const content = {
    from_name,
    email,
    message
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_9rh6rw8', 'template_cpmtz8i', content, 'AE0dMzcl0OVPYOq0C')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error)
    })
    e.target.reset()
  }



  return (
    <div className='w-full h-screen'>

        {/* NAVBAR SECTION */}
        <div className='fixed w-full h-20'>
          <div className={`header flex justify-between items-center pt-12 duration-500 z-50`}>
          <div className='mx-12 md:mx-32 font-bold text-white logo text-2xl md:text-4xl z-50'>
                PWIDE.HU
            </div>

            <ul className={`cursor-pointer mx-32 hidden lg:flex items-center space-x-8 font-medium text-xl md:text-2xl navbar text-white z-50`}>
                <Link to='home' smooth={true} duration={500}>Home</Link>
                <Link to='skills' smooth={true} duration={500}>Skills</Link>
                <Link to='work' smooth={true} duration={500}>Work</Link>
                <Link to='contact' smooth={true} duration={500}><button className='rounded-full px-8 bg-transparent h-12 text-white text-lg font-bold border-2 hover:bg-white hover:text-black duration-300'>Connect</button></Link>
            </ul>
           
            <AiOutlineMenu className='block lg:hidden text-white mx-12 rounded-lg' size={40}/>
          </div>

        </div>

        {/* HERO SECTION */}
        <div className='w-full md:h-screen bg-[#121212] flex flex-col justify-center  hero' name='home'>
            <div className='mx-12 md:mx-32 max-w-[960px] flex hero-text text-white'>
              <div className=''>
                <h1 className='text-5xl md:text-8xl font-bold'>Hi! I'm PWIDE</h1>
                
                <h1 className='font-bold text-4xl md:text-6xl my-2'>Web Developer</h1>
                <p className='font-bold text-xl md:text-2xl text-gray-300 my-2'>I'm a freelance full stack web developer. I build web applications and create websites for customers based on their designs.</p>

                <Link to='contact' smooth={true} duration={500}><button className='mt-8 text-2xl text-white flex items-center px-8  relative work-button  h-20 md:h-16 '>Connect <FaLongArrowAltRight className='ml-3' /></button></Link>

                <div className='w-28 flex cursor-pointer justify-between items-center icons my-16 md:my-32'>
                  <AiOutlineGithub className='text-white  hover:scale-125 duration-300' size={40}/>
                  <FaDiscord className='text-white  hover:scale-125 duration-300' size={40}/>
                </div>
              </div>

              

            </div>
        </div>


        {/* ABOUT SECTION */}
        {/* <div className='w-full h-[80vh] flex flex-col justify-center items-center bg-[#121212] text-white' name='about'>
          <div className='max-w-[1200px] mx-auto'>
              <h1 className='text-4xl md:text-6xl font-medium md:mx-32 text-center md:text-left'>About</h1>
              <div className='w-28 md:w-44 h-2 bg-orange-400 mt-2 md:mx-[126px] mx-auto' />
              
                <div className='grid md:grid-cols-2 grid-cols-1 gap-12 mx-auto mt-12 justify-center'>
                  <div className='flex flex-col text-center justify-center items-center'>
                      <img src={About} className='mx-auto lg:w-[602px] lg:h-[400px] md:w-[521px] '></img>
                  </div>
                  <div className='flex flex-col text-center md:text-left'>
                    <div className='mb-8'>
                      <h1 className='text-3xl md:text-4xl text-gray-300'>Hello,</h1>
                      <h2 className='text-3xl md:text-4xl'>I'm PWIDE</h2>
                      <p className='text-2xl md:text-3xl text-gray-300'>Freelance Web Developer</p>
                    </div>
                    
                    <div className='max-w-[300px] sm:max-w-[480px]  md:max-w-[960px] mx-auto'> 
                      <h1 className='text-2xl md:text-3xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime quibusdam excepturi neque architecto rerum consequuntur dolore, aliquam accusamus pariatur harum voluptates quaerat repellat! Repellendus ipsam eius maiores soluta. Ipsa?</h1>
                    </div>
                   
                  </div>
            </div>
          </div>

        </div> */}
        
          {/* EXPERIENCE SECTION */}
          <div className='w-full xl:h-[80vh] flex flex-col items-center bg-[#121212] text-white' name='skills'>
            <div className='max-w-[540px] lg:max-w-[960px] rounded-2xl skills'>
                <h1 className='text-4xl md:text-7xl font-bold text-center my-12 mt-32'>Skills</h1>
                <div className='max-w-[260px] sm:max-w-[420px] md:max-w-[980px] mx-auto'>
                  <p className='text-gray-300/40 text-xl md:text-3xl text-center my-8'>I tried relative many programming language, frameworks and I'm good at these, which showed below. I love learn and try new technologies in web developing, so I'm constantly educating myself.</p>
                </div>
                {/* <div className='grid 2xl:grid-cols-2 grid-cols-1 gap-8'>
                  <div className='max-w-[1210px] bg-[#141414] hover:bg-[#141414]/50 shadow-lg rounded-2xl skills-div'>
                      <h1 className='text-2xl md:text-4xl font-medium text-center mt-8'>Frontend Development</h1>
                      <div className='max-w-[760px] grid grid-cols-1 sm:grid-cols-2 my-8 mx-auto'>
                        <div className='flex mx-auto sm:mx-28 items-center space-x-2 my-6'>
                          <img className='w-8 h-8' src={HTML}></img>
                          <p className='text-2xl md:text-3xl'>HTML</p>
                          
                        </div>
                        <div className='flex mx-auto sm:mx-24 items-center space-x-3 my-6'>
                          <img className='w-8 h-8' src={ReactJS}></img>
                          <p className='text-2xl md:text-3xl'>React</p>
                          
                        </div>  
                        <div className='flex mx-auto sm:mx-28 items-center space-x-3 my-6'>
                          <img className='w-8 h-8' src={CSS}></img>
                          <p className='text-2xl md:text-3xl'>CSS</p>
                          
                        </div>         
                        <div className='flex mx-auto sm:mx-24 items-center space-x-3 my-6'>
                        <img className='w-8 h-8' src={Tailwind}></img>
                          <p className='text-2xl md:text-3xl'>Tailwind</p>
                          
                        </div>   
                        <div className='flex mx-auto sm:mx-28 items-center space-x-3 my-6'>
                        <img className='w-8 h-8' src={JavaScript}></img>
                          <p className='text-2xl md:text-3xl'>JavaScript</p>
                          
                        </div>
                        <div className='flex mx-auto sm:mx-24 items-center space-x-3 my-6'>
                        <img className='w-10 h-8' src={Bootstrap}></img>
                          <p className='text-2xl md:text-3xl'>Bootstrap</p>
                          
                        </div>           
                      </div>
                  </div>
                  <div className='max-w-[1210px]  bg-[#141414] hover:bg-[#141414]/50 shadow-lg rounded-2xl skills-div'>
                      <h1 className='text-2xl md:text-4xl font-medium text-center mt-8'>Backend Development</h1>
                      <div className='max-w-[760px] grid grid-cols-1 sm:grid-cols-2 my-8 mx-auto'>
                        <div className='flex mx-auto sm:mx-28 items-center space-x-2 my-6'>
                          <img className='w-8 h-8' src={Node}></img>
                          <p className='text-2xl md:text-3xl'>Node JS</p>
                          
                        </div>
                        <div className='flex mx-auto sm:mx-26 items-center space-x-3 my-6'>
                          <img className='w-8 h-8' src={Mongo}></img>
                          <p className='text-2xl md:text-3xl'>MongoDB</p>
                          
                        </div>  
                        <div className='flex mx-auto sm:mx-28  items-center space-x-3 my-6'>
                          <img className='w-8 h-8' src={Firebase}></img>
                          <p className='text-2xl md:text-3xl'>Firebase</p>
                          
                        </div>         
                        
                      </div>
                  </div>
                  
                </div> */}
                {/* <div className='max-w-[1120px] grid lg:grid-cols-4 grid-cols-2 gap-4 mx-auto my-16'>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={HTML} className='w-28 md:w-48'></img>
                  </div>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={CSS} className='w-28 md:w-48'></img>
                  </div>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={JavaScript} className='w-28 md:w-48'></img>
                  </div>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={ReactJS} className='w-28 md:w-48'></img>
                  </div>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={Node} className='w-28 md:w-48'></img>
                  </div>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={GitHub} className='w-28 md:w-48'></img>
                  </div>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={Mongo} className='w-28 md:w-48'></img>
                  </div>
                  <div className='w-48 h-48 md:w-64 md:h-64 bg-[#161616] rounded-lg shadow-lg flex items-center justify-center'>
                    <img src={Firebase} className='w-28 md:w-48'></img>
                  </div> */}
                  <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 py-8'>
                    <div className=' mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={HTML} className='w-48' alt='HTML'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>HTML</p>
                    </div>
                    <div className='mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={CSS} className='w-48' alt='CSS'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>CSS</p>
                    </div>
                    <div className='mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={JavaScript} className='w-48' alt='JavaScript'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>JavaScript</p>
                    </div>
                    <div className='mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={ReactJS} className='w-48' alt='HTML'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>ReactJS</p>
                    </div>
                    <div className='mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={Tailwind} className='w-48' alt='Tailwind'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>Tailwind</p>
                    </div>
                    <div className='mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={Bootstrap} className='w-48' alt='CSS'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>Bootstrap</p>
                    </div>
                    <div className='mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={Node} className='w-48' alt='JavaScript'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>Node</p>
                    </div>
                    <div className='mx-auto px-8 pt-8 bg-[#141414] rounded-lg shadow-2xl hover:scale-125 duration-500'>
                        <img src={Mongo} className='w-48' alt='HTML'></img>
                        <p className='text-xl md:text-2xl font-bold text-center my-4'>MongoDB</p>
                    </div>
                  </div>
                </div>
            </div>
            
            
              {/* WORK SECTION */}
              <div className='w-full xl:h-screen bg-[#121212] text-white work' name='work'>
                <h1 className='text-4xl md:text-7xl font-bold text-center pt-56'>Projects</h1>
                <div className='max-w-[260px] sm:max-w-[420px] md:max-w-[980px] mx-auto'>
                  <p className='text-gray-300/40 text-xl md:text-3xl text-center my-8'>I like challenges and solving them. In my freetime I often work on projects which are challanges for me to educate myself. </p>
                </div>
                {/* <div className='grid lg:grid-cols-4 grid-cols-2'>
                    <div className='w-[360px]'></div>
                </div> */}
                <div className='max-w-[1400px] mx-auto'>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-36 mx-auto'>
                  <div className='group mx-auto w-full card-container rounded-lg duration-500 h-[300px] hover:scale-110' style={{backgroundImage: `url(${CardBG})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <p className='text-xl md:text-3xl text-center my-8 font-bold'>Lorem ipsum dolor sit amet.</p>
                      <div className='flex justify-center items-center space-x-4 py-12'>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Code</button>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Demo</button>
                      </div>
                    </div>
                  </div>
                  <div className='group mx-auto w-full card-container rounded-lg duration-500 h-[300px] hover:scale-110' style={{backgroundImage: `url(${CardBG2})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <p className='text-xl md:text-3xl text-center my-8 font-bold'>Lorem ipsum dolor sit amet.</p>
                      <div className='flex justify-center items-center space-x-4 py-12'>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Code</button>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Demo</button>
                      </div>
                    </div>
                  </div>
                  <div className='group mx-auto w-full card-container rounded-lg duration-500 h-[300px] hover:scale-110' style={{backgroundImage: `url(${CardBG3})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <p className='text-xl md:text-3xl text-center my-8 font-bold'>Lorem ipsum dolor sit amet.</p>
                      <div className='flex justify-center items-center space-x-4 py-12'>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Code</button>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Demo</button>
                      </div>
                    </div>
                  </div>
                  <div className='group mx-auto w-full card-container rounded-lg duration-500 h-[300px] hover:scale-110' style={{backgroundImage: `url(${CardBG4})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <p className='text-xl md:text-3xl text-center my-8 font-bold'>Lorem ipsum dolor sit amet.</p>
                      <div className='flex justify-center items-center space-x-4 py-12'>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Code</button>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Demo</button>
                      </div>
                    </div>
                  </div>
                  <div className='group mx-auto w-full card-container rounded-lg duration-500 h-[300px] hover:scale-110' style={{backgroundImage: `url(${CardBG5})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <p className='text-xl md:text-3xl text-center my-8 font-bold'>Lorem ipsum dolor sit amet.</p>
                      <div className='flex justify-center items-center space-x-4 py-12'>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Code</button>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Demo</button>
                      </div>
                    </div>
                  </div>
                  <div className='group mx-auto w-full card-container rounded-lg duration-500 h-[300px] hover:scale-110' style={{backgroundImage: `url(${CardBG6})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <p className='text-xl md:text-3xl text-center my-8 font-bold'>Lorem ipsum dolor sit amet.</p>
                      <div className='flex justify-center items-center space-x-4 py-12'>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Code</button>
                        <button className='px-12 py-4 border-2 rounded-lg font-bold text-xl md:text-2xl hover:bg-white shadow-md shadow-white/50 hover:text-black duration-300'>Demo</button>
                      </div>
                    </div>
                  </div>
                </div>
               
                    {/* <div className=' mx-auto bg-[#141414] sm:w-[360px] w-[300px] sm:h-[380px] h-[350px] rounded-lg shadow-lg hover:scale-110 duration-500'>
                        <img src={asd} className=' rounded-tl-lg rounded-tr-lg'></img>
                        <p className='text-xl md:text-2xl font-medium p-4'>Lorem ipsum dolor sit amet.</p>
                        <div className='flex my-16 sm:mx-5 justify-between'>
                          <button className='border-2 py-4 px-12  left-4 shadow-md shadow-white/30 hover:bg-white text-md md:text-xl font-bold hover:text-black duration-300 rounded-lg'>Code</button>
                          <button className='border-2 py-4 px-12  left-4 shadow-md shadow-white/30 hover:bg-white text-md md:text-xl font-bold hover:text-black duration-300 rounded-lg'>Demo</button>
            
                      </div>
                        
                    </div> */}
    
                        
         
                </div>
              </div>


              <div className='w-full h-screen contact' name='contact'>
                  <div className='max-w-[960px] mx-auto py-64'>
                        <h1 className='text-4xl md:text-5xl text-white font-bold'>Get In Touch</h1>
                        <form onSubmit={sendEmail}>
                          <div className='contact-inputs flex flex-col'>
                            <input className='h-16 rounded-2xl pl-8 mt-12 text-md md:text-xl outline-none' placeholder='Name' onChange={(e) => setFromName(e.target.value)}></input>
                            <input className='h-16 rounded-2xl pl-8 mt-4 text-md md:text-xl outline-none' placeholder='Email Adress' onChange={(e) => setEmail(e.target.value)}></input>
                            <textarea className='mt-4 rounded-2xl text-md md:text-xl pl-8 py-4 outline-none'placeholder='Message' onChange={(e) => setMessage(e.target.value)} rows={10}></textarea>
                            
                          </div>
                          <button className='bg-white hover:scale-110 duration-500 rounded-lg text-2xl md:text-3xl font-bold py-4 px-12 mt-8'>Send</button>
                        </form>
                    </div>
                </div>

          </div>

    
  )
}

export default Home