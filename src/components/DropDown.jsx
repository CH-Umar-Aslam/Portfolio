import React from "react";

const DropDown = () => {
  const childMenue = [
    {
      name: "HR Services",
      about: "Let Brings Your idea to live With Our Service",
      link: "/services",
    },
    {
      name: "IT Services",
      about: "Let Brings Your idea to live With Our Service",
      link: "/services",
    },
    {
      name: "Design",
      about: "Let Brings Your idea to live With Our Service",
      link: "/services",
    },
    {
      name: "Marketing",
      about: "Let Brings Your idea to live With Our Service",
      link: "/services",
    },
  ];
  return (
    <div>
      <div className="absolute w-full p-4 hidden bg-white text-gray-800 border border-gray-300 space-y-2 submenu group-hover:block z-50 md:w-[380px]">
        {childMenue.map((item) => {
          <div>
            <div className="flex hover:bg-gray-100 hover:border-blue-500 border-b">
              <img src="src\media\photos\Recgenz logo png 2-07.png" alt="s1" />
            </div>
            <div className="flex flex-col mx-2">
              <a href="#">{item.name}</a>
              <p>{item.about}</p>
            </div>
          </div>;
        })}
      </div>
      {/* <ul
        className="absolute w-full p-4 hidden bg-white text-gray-800 border border-gray-300 space-y-2 submenu group-hover:block z-50 md:w-[380px]"
        id="submenu"
      >
        <li className="flex hover:bg-gray-100 hover:border-blue-500 border-b">
          <img src="src\img\navbar\s1.png" alt="Service 1" className="mr-4" />

          <div className="flex flex-col mx-2">
            <a href="hrb.html" className="block pr-4 py-2 text-lg">
              HR Services
            </a>
            <p className="text-sm overflow-auto pr-4 cursor-pointer">
              Let Brings Your idea to live With Our Service
            </p>
          </div>
          <i className="fa-solid fa-chevron-down fa-rotate-270 ml-4 cursor-pointer"></i>
        </li>

        <li className="inline-flex hover:bg-gray-100 hover:border-blue-500 border-b">
          <img src="src\img\navbar\s2.png" alt="Service 2" className="mr-4" />

          <div className="flex flex-col mx-2">
            <a href="hrb.html" className="block pr-4 py-2 text-lg">
              IT Services
            </a>
            <p className="text-sm text-red-800 overflow-auto pr-4 cursor-pointer">
              Let Brings Your idea to live With Our Service
            </p>
          </div>

          <i className="fa-solid fa-chevron-down fa-rotate-270 ml-4 cursor-pointer"></i>
        </li>
        <li className="inline-flex hover:bg-gray-100 hover:border-blue-500 border-b">
          <img src="src\img\navbar\s3.png" alt="Service 3" className="mr-4" />
          <div className="flex flex-col mx-2">
            <a href="hrb.html" className="block pr-4 py-2 text-lg">
              Design
            </a>
            <p className="text-sm overflow-auto pr-4 cursor-pointer">
              Let Brings Your idea to live With Our Service
            </p>
          </div>
          <i className="fa-solid fa-chevron-down fa-rotate-270 ml-4 cursor-pointer"></i>
        </li>
        <li className="inline-flex hover:bg-gray-100 hover:border-blue-500 border-b">
          <img src="src\img\navbar\s4.png" alt="Service 4" className="mr-4" />
          <div className="flex flex-col mx-2">
            <a href="hrb.html" className="block pr-4 py-2 text-lg">
              Marketing
            </a>
            <p className="text-sm overflow-auto pr-4 cursor-pointer">
              Let Brings Your idea to live With Our Service
            </p>
          </div>
          <i className="fa-solid fa-chevron-down fa-rotate-270 ml-4 cursor-pointer"></i>
        </li>
      </ul> */}
    </div>
  );
};

export default DropDown;
