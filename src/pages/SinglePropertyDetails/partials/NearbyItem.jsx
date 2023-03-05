import React from "react";

const NearbyItem = (props) => {
  return (
    <div className="basis-1/4 flex flex-col justify-center">
      <div className="border rounded-full border-[#D28825] mx-auto mb-5 w-1/2 aspect-square flex justify-center items-center">
        <img src={props.image} alt="airport" />
      </div>
      <h1 className="text-[1.375rem] font-semibold font-montserrat text-brand">
        {props.title}
      </h1>
    </div>
  );
};

export default NearbyItem;
