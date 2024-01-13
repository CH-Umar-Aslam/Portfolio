import React from "react";

const HeroSection = () => {
  return (
    <>
      <header>
        <section className="bg-white mb-5 flex py-auto flex-col py-auto justify-around lg:mb-0 h-auto">
          <div className="flex flex-col-reverse justify-between px-10 mt-10 items-center w-full md:flex-row ">
            <div className="py-8 md:px-10  lg:px-0 md:h-full  lg:w-2/4">
              <p className="text-3xl md:px-0 text-left font-serif text-gray-900 md:text-3xl lg:text-5xl xl:text-5xl font-bold mb-8 lg:pr-0">
                Transforming Visions Into Achievements, Unleash Your Potential
                With Our Expertise
              </p>
              <div className="mb-4 flex flex-col md:flex-row lg:justify-left">
                <button
                  id="button1"
                  className="border-blue-700 bg-gray-50 border-2 px-6 text-lg font-semibold py-2 rounded text-blue-900 md:px-10 md:px-auto md:py-2 md:mr-0  mb-2 md:mb-0"
                >
                  Our Services
                </button>
                <button
                  id="button2"
                  className="bg-blue-700 hover:bg-blue-900 border-2 rounded-md text-lg px-6 py-2 ml-0 text-white md:px-10 md:px-auto md:py-2 md:ml-4"
                >
                  Book a Call
                </button>
              </div>
            </div>

            <div className="relative flex justify-center  items-center  h-70 ">
              <img
                src="src\media\photos\2.png"
                alt="Image 1"
                className="trans md:w-[53.5rem] md:h-full lg:w-auto lg:h-96 object-cover "
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default HeroSection;
