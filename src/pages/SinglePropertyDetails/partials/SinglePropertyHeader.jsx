import React from "react";
import propertyBanner from "../../../images/property details page/property-banner.png";

const SinglePropertyHeader = () => {
  return (
    <section className="h-[75vh]">
      <img
        src={propertyBanner}
        alt="Single Property Banner"
        className="h-full w-screen"
      />
    </section>
  );
};

export default SinglePropertyHeader;
