import React from "react";

const Skeleton = (props) => {
  return (
    <div className={`px-96 flex flex-wrap ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Skeleton;
