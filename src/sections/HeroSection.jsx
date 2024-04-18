import React from 'react';
import heroImage from "../assets/th.png";

const HeroSection = () => {
  return (
    <div

      className="px-4 lg:px-0"
    >

      <div className="hero-section max-w-7xl  px-4 sm:px-12 mx-auto flex flex-col md:flex-row  lg:gap-0 items-center justify-center">
        {/*Text Section */}
        <div className="lg:w-1/2 lg:mr-8 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left">Hello, I'm Umar Aslam</h1>
          <p className="text-lg lg:text-xl mb-8 text-center lg:text-left">FrontEnd Engineer</p>
          <a download className="bg-blue-500 hover:bg-blue-600  font-bold py-3 px-6 rounded inline-block shadow-lg transition duration-300 ease-in-out transform hover:scale-105">Download CV</a>
        </div>

        {/* Image Section */}
        <div className=" h-[39%]  sm:h-[45%] sm:max-w-[400px]  2xl:max-w-[700px] 2xl:h-[40%] mt-8 lg:mt-0 rounded-[50%]  bg-white border-blue-200 overflow-hidden border-4  flex justify-center">
          <img src={heroImage} alt="Hero" className='object-fit object-cover w-full h-full' />
        </div>



      </div>
    </div >
  );
}

export default HeroSection;