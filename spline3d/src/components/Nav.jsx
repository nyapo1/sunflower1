import Spline from "./Spline";
import { GoArrowRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useEffect, useRef,useState  } from 'react';
import gsap from 'gsap';

// ... other imports and code ...








const Nav = () => {
  const [selectedItem, setSelectedItem] = useState('Home'); // Default selected item is 'Home'
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item); // Update the selected item when clicked
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'How to use', 'About', 'Advantages'];


  useEffect(()=>{
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration:2}
    });

      tl.to('.flower-1',{
        y:-50,
        opacity:1
      })
      .to('.flower-2',{
        y:-50,
        opacity:1
      }, '-=1')
    const tl2 = gsap.timeline({
      defaults: { ease: "power3.out", duration:2}
    });

      tl2.to('.flower-3',{
        y:-50,
        opacity:1
      })
      .to('.flower-4',{
        y:-50,
        opacity:1
      }, '-=1')

      const ct=gsap.timeline({defaults:{ease:'power1.inOut',duration:2}})

      ct.to('.card',{
        y:0,
      })
      .to('.card-title',{
        opacity:1
      },
    '-=1.8')
      .to('.card-position',{
        opacity:1
      },
    '-=1.8')
      .to('.card-description',{
        opacity:1
      },
    '-=1.8')
     
  })

  return (
    <div className='relative  sm:h-[200vh] w-[100vw] md:h-[120vh] p-0 m-0 bg-gradient-to-tr from-gray-300 via-purple-300 to-purple-500'>
      {/* Background 3D container */}
      <div className='absolute inset-0 z-0 flex justify-center items-center'>
        <Spline />
      </div>

      {/* Content overlay */}
      <div className='relative z-10 w-full h-full'>
        {/* Navigation */}
        <nav className='p-4 flex flex-col md:flex-row justify-around items-center w-full'>
          {/* Logo and Mobile Menu Button */}
          <div className='w-full md:w-auto flex justify-between items-center px-4'>
            <div className='text-2xl md:text-3xl text-purple-500 font-bold sm:ml-6'>
              GreenFarm
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className='md:hidden text-purple-900'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>

          {/* Navigation Links - Mobile Dropdown / Desktop Horizontal */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-75 md:w-auto mt-4 md:mt-0`}>
            <ul className='flex flex-col md:flex-row gap-4 md:gap-9 bg-gray-100 rounded-2xl p-3 w-full md:w-auto'>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer hover:text-gray-600 font-semibold rounded-tl-xl rounded-br-xl px-4 py-2 text-purple-900 text-center ${
                    selectedItem === item ? 'bg-gray-400' : 'bg-gray-300'
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Request Button */}
          <button className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex bg-white text-purple-900 font-bold px-6 py-2 rounded-full items-center gap-2 hover:text-gray-900 transition-colors cursor-pointer mt-4 md:mt-0`}>
            Request
            <GoArrowRight className='text-2xl'/>
          </button>
        </nav>

        <div className='container mx-auto px-4 mt-10'>
          {/* Main content */}

          <div className='md:flex justify-between'>
            <div className='mt-10'>
              <h2 className='text-4xl font-bold text-purple-800 flower-1 translate-y-6 opacity-0'>Flower Power Frames </h2>
              <h2 className='text-2xl font-bold mt-2 text-purple-800  flower-2 translate-y-6 opacity-0'>Sunflower Photography that Pops</h2>
            </div>

            <div className='mt-10'>
              <h2 className='text-4xl font-bold   flower-3 text-purple-800 translate-y-6 opacity-0'>Organic Sunflower Fields</h2>
              <h2 className='text-2xl font-bold  mt-3  flower-4 text-purple-800 translate-y-6 opacity-0'>Are readily available</h2>
            </div>
          
          </div>

          <div>
          <div className='container mx-auto px-4 mt-20'>
            {/* Grid Container */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
              {/* About Card */}
              <div className='bg-white/5 p-8 card -translate-y-6 border-t-2 border-r-2 rounded-tr-4xl  border-white'>
                <h2 className='text-2xl font-bold mb-2  text-purple-500 opacity-0 card-title'>About</h2>
                <span className='text-purple-400 text-sm mb-4 block card-position opacity-0'>.01</span>
                <p className='text-purple-900 card-description opacity-0'>
                  GreenFarm is a digital form of sustainable agriculture, regulated 
                  and monitored through smart technology.
                </p>
              </div>

              {/* Storing Card */}
              <div className='bg-white/10 -translate-y-6 p-8 card border-t-2 border-r-2 rounded-tr-4xl border-white'>
                <h2 className='text-2xl font-bold mb-2 text-purple-500 opacity-0 card-title'>Storing</h2>
                <span className='text-purple-400 text-sm mb-4 block card-position opacity-0'>.02</span>
                <p className='text-purple-900 card-description opacity-0'>
                  Data can be stored in digital format and accessed 
                  using mobile phones or other electronic devices.
                </p>
              </div>

              {/* Functions Card */}
              <div className='bg-white/10  p-8 card -translate-y-6 border-t-2 border-r-2 rounded-tr-4xl border-white'>
                <h2 className='text-2xl font-bold mb-2 text-purple-500 opacity-0 card-title'>Functions</h2>
                <span className='text-purple-400 text-sm mb-4 block card-position opacity-0'>.03</span>
                <p className='text-purple-900 card-description opacity-0'>
                  Functions like traditional farming but in digital form, enabling 
                  smart monitoring, automation, and resource management.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;