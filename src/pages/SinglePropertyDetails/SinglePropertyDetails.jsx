import React from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../Services/apiFunctions";
import Amenities from "./partials/Amenities";
import Downloads from "./partials/Downloads";
import Highlights from "./partials/Highlights";
import Nearby from "./partials/Nearby";
import PaymentPlan from "./partials/PaymentPlan";
import PropertyVideo from "./partials/PropertyVideo";
import SinglePropertyDescription from "./partials/SinglePropertyDescription";
import SinglePropertyHeader from "./partials/SinglePropertyHeader";
import VillaFeatures from "./partials/VillaFeatures";

const SinglePropertyDetails = (props) => {
  const getSinglePropertyDetails = () => {
    return getApiData(props.url);
  };

  const { isLoading, data, isError, error } = useQuery(
    ["single-property-details", props.url],
    getSinglePropertyDetails
  );

  if (isLoading) {
    return "Loading data, please wait";
  }

  if (isError) {
    return error.message;
  }

  const singleProperty = data.data.property;

  return (
    <>
      <SinglePropertyHeader header={singleProperty.images[0].path} />
      <div className="my-12"></div>
      <SinglePropertyDescription property={singleProperty} />
      <VillaFeatures />
      <Highlights highlights={singleProperty.highlights} />
      <PaymentPlan />
      <PropertyVideo />
      <Amenities amenities={singleProperty.amenities} />
      <Nearby nearby={singleProperty.location} />
      <Downloads />
    </>
  );
};

export default SinglePropertyDetails;
