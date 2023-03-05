import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingText from "./HeadingText";
import iconAeroplane from "../../../images/property details page/icon-airport.png";
import NearbyItem from "./NearbyItem";

const Nearby = (props) => {
  const nearby = props.nearby;
  return (
    <section>
      <Skeleton className="justify-center text-center">
        <HeadingText innerText="Nearby" />

        <p className="font-montserrat text-[#242424] leading-7 py-2">
          {nearby.locDescription}
        </p>
        <div className="flex flex-wrap w-full justify-between items-center mt-10">
          <NearbyItem image={iconAeroplane} title="Al Maktoum Airport" />
          <NearbyItem image={iconAeroplane} title="Al Maktoum Airport" />
          <NearbyItem image={iconAeroplane} title="Al Maktoum Airport" />
          <NearbyItem image={iconAeroplane} title="Al Maktoum Airport" />
        </div>
      </Skeleton>
    </section>
  );
};

export default Nearby;
