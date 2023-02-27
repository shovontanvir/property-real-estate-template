import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingText from "./HeadingText";
import tick from "../../../images/property details page/icon-tick.png";

const Highlights = () => {
  return (
    <section className="mb-5">
      <Skeleton>
        <HeadingText innerText="Highlights" />
        <div className="w-full flex justify-center">
          <ul>
            <li className="flex items-center leading-8">
              <img
                src={tick}
                alt="tick"
                className="mr-5 w-[20px] h-[11.43px]"
              />
              <span className="font-montserrat text-lg">
                3 to 4 Bedroom villas
              </span>
            </li>
            <li className="flex items-center leading-8">
              <img
                src={tick}
                alt="tick"
                className="mr-5 w-[20px] h-[11.43px]"
              />
              <span className="font-montserrat text-lg">
                Starting from 3M to 4M AED
              </span>
            </li>
            <li className="flex items-center leading-8">
              <img
                src={tick}
                alt="tick"
                className="mr-5 w-[20px] h-[11.43px]"
              />
              <span className="font-montserrat text-lg">
                80/20 Payment Plan
              </span>
            </li>
            <li className="flex items-center leading-8">
              <img
                src={tick}
                alt="tick"
                className="mr-5 w-[20px] h-[11.43px]"
              />
              <span className="font-montserrat text-lg">
                18-hole championship golf course
              </span>
            </li>
          </ul>
        </div>
      </Skeleton>
    </section>
  );
};

export default Highlights;
