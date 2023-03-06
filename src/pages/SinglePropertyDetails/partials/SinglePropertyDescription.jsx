import React from "react";
import Button from "../../../components/Button";
import Skeleton from "../../../components/Skeleton/Skeleton";
import iconBuilding from "../../../images/property details page/icon-building.png";
import iconLocationBlack from "../../../images/property details page/icon-location-black.png";
import iconDownload from "../../../images/global/icon-download-outline-black.png";
import RegisterForm from "./RegisterForm";

const SinglePropertyDescription = (props) => {
  const propertyDetails = props.property;
  console.log(propertyDetails);
  const propertyDescription =
    propertyDetails.propertyDescription.split("\r\n\r\n");

  return (
    <section>
      <Skeleton className="flex-col md:flex-row">
        <div className="xl:basis-2/3 xl:pr-16 text-justify lg:text-left">
          <h1 className="font-robotoCondensed font-medium text-brand text-[2.5rem]">
            {propertyDetails.propertyName}
          </h1>
          <p className="font-montserrat text-[#535353] text-sm leading-4 flex my-2">
            <img src={iconBuilding} alt="building" className="mr-1" />
            {propertyDetails.developerType.name}
          </p>
          <p className="font-montserrat text-[#535353] text-sm leading-4 flex my-2">
            <img src={iconLocationBlack} alt="Location" className="mr-1" />{" "}
            {propertyDetails.propertyArea.areaName}
          </p>
          {propertyDescription.map((paragraph, index) => (
            <p
              className="font-montserrat text-[#242424] leading-7 py-2"
              key={`paragraph-${index}`}
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap mt-8">
            <div className="w-full xl:pr-4 pt-3 xl:basis-1/2">
              <Button btnText="Download Brochure" btnIcon={iconDownload} />
            </div>
            <div className="w-full xl:pl-4 pt-3 xl:basis-1/2">
              <Button btnText="Download Floor Plan" btnIcon={iconDownload} />
            </div>
            <div className="w-full xl:pr-4 pt-3 xl:basis-1/2">
              <Button btnText="view gallery" btnIcon={iconDownload} />
            </div>
            <div className="w-full xl:pl-4 pt-3 xl:basis-1/2">
              <Button btnText="location" btnIcon={iconDownload} />
            </div>
          </div>
        </div>
        <RegisterForm propertyName={propertyDetails.propertyName} />
      </Skeleton>
    </section>
  );
};

export default SinglePropertyDescription;
