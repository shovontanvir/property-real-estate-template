import React from "react";
import Highlights from "./partials/Highlights";
import PaymentPlan from "./partials/PaymentPlan";
import PropertyVideo from "./partials/PropertyVideo";
import SinglePropertyDescription from "./partials/SinglePropertyDescription";
import SinglePropertyHeader from "./partials/SinglePropertyHeader";
import VillaFeatures from "./partials/VillaFeatures";

const SinglePropertyDetails = () => {
  return (
    <>
      <SinglePropertyHeader />
      <div className="my-12"></div>
      <SinglePropertyDescription />
      <VillaFeatures />
      <Highlights />
      <PaymentPlan />
      <PropertyVideo />
    </>
  );
};

export default SinglePropertyDetails;
