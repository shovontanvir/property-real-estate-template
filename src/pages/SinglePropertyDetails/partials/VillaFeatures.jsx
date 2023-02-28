import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import FeatureItem from "./FeatureItem";
import HeadingText from "./HeadingText";
import price from "../../../images/property details page/icon-cash-outline.png";
import type from "../../../images/property details page/icon-building-red.png";
import location from "../../../images/property details page/icon-location.png";
import bedrooms from "../../../images/property details page/icon-bedroom.png";

const VillaFeatures = (props) => {
  return (
    <section className="mb-8">
      <Skeleton>
        <HeadingText innerText="Fairway Villas" />
        <div className="flex flex-wrap w-full">
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pr-6">
            <FeatureItem
              featureImage={price}
              featureText="Starting Price"
              featureDetails="Aed 3m"
            />
          </div>
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pl-6">
            <FeatureItem
              featureImage={type}
              featureText="Type"
              featureDetails="Villas"
            />
          </div>
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pr-6">
            <FeatureItem
              featureImage={location}
              featureText="Location"
              featureDetails="Emaar South"
            />
          </div>
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pl-6">
            <FeatureItem
              featureImage={bedrooms}
              featureText="Bedrooms"
              featureDetails="3, 4"
            />
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default VillaFeatures;
