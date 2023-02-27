import React from "react";

const Skeleton = (props) => {
  return (
    <div
      className={`px-5 sm:px-16 md:px-36 lg:px-56 xl:px-72 2xl:px-96 flex flex-wrap ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Skeleton;
