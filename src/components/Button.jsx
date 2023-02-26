import React from "react";

const Button = (props) => {
  return (
    <button className="border border-black rounded text-lg font-roboto px-10 py-3 uppercase">
      {props.btnText}
    </button>
  );
};

export default Button;
