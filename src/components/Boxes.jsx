import React from "react";

const Boxes = (props) => {
  console.log(props.name);
  return (
    <div className=" w-full h-1/2 lg:w-[45%]  m-2  text-center border border-gray-400 border-b-4 hover:border-b-2 rounded-lg">
      <a className="pb-2 text-gray-600 hover:font-bold" href={props.link}>
        <h2 className="text-xl py-2 text-gray-600 sm:m-1 m-3 font-bold">
          {props.name}
        </h2>
        Go
      </a>
    </div>
  );
};

export default Boxes;
