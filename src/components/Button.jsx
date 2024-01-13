import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        type="button"
        className="text-white  md:flex justify-center items-center bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
      >
        {props.content}
      </button>
    </>
  );
};

export default Button;
