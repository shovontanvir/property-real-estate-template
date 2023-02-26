import React from "react";
import Button from "../../../components/Button";
import Skeleton from "../../../components/Skeleton/Skeleton";
import iconBuilding from "../../../images/property details page/icon-building.png";
import iconLocationBlack from "../../../images/property details page/icon-location-black.png";

const SinglePropertyDescription = () => {
  return (
    <section className="py-12">
      <Skeleton>
        <div className="basis-2/3 pr-16">
          <h1 className="font-robotoCondensed font-medium text-brand text-[2.5rem]">
            Fairway Villas
          </h1>
          <img src={iconBuilding} alt="building" />
          <p className="font-montserrat text-[#535353] text-sm leading-4">
            Emaar Properties
          </p>
          <p className="font-montserrat text-[#535353] text-sm leading-4 flex">
            <img src={iconLocationBlack} alt="Location" className="mr-1" />{" "}
            Emaar South
          </p>
          <p className="font-montserrat text-[#242424] leading-7 py-2">
            Every day at Fairway Villas, you will wake up to pristine fairways,
            gorgeous greens, and infinite natural beauty as you appreciate the
            golf resort lifestyle. Fairway Villas is an amazing collection of
            large 3 to 4 Bedroom villas at the center of a modern,
            family-friendly community nestled in nature yet accessible to an
            innovative variety of world-class services.
          </p>
          <p className="font-montserrat text-[#242424] leading-7 py-2">
            It is perfectly placed in Emaar South, right near to Expo City
            Dubai, the future vision of the Expo 2020 Dubai site. It gives easy
            access to Al Maktoum International Airport as well as several of
            Dubai’s most well-known attractions and commercial districts.
          </p>
          <div className="flex flex-wrap my-10">
            <div className="basis-1/2">
              <Button btnText="Download Brochure" />
            </div>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default SinglePropertyDescription;
