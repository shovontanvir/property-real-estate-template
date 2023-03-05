import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingText from "./HeadingText";
import returnDownForward from "../../../images/property details page/icon-return-down-forward.png";

const Amenities = (props) => {
  const amenities = props.amenities;

  const features = amenities.features.split("#");
  const features1 = [];
  const features2 = [];

  features.map((item, index) =>
    index + 1 <= features.length / 2
      ? features1.push(item)
      : features2.push(item)
  );

  return (
    <section>
      <Skeleton className="justify-center text-center">
        <HeadingText innerText="Amenities" />
        <p className="font-montserrat text-[#242424] leading-7 py-2">
          {amenities.description}
        </p>
        <div className="flex flex-wrap w-full justify-around">
          <ul className="text-left">
            {features1.map((item, index) => (
              <li
                className="flex items-center leading-8"
                key={`features1-${index}`}
              >
                <img
                  src={returnDownForward}
                  alt="return-down-forward"
                  className="mr-5 w-[20px] h-[11.43px]"
                />
                <span className="font-montserrat text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="text-left">
            {features2.map((item, index) => (
              <li
                className="flex items-center leading-8"
                key={`features2-${index}`}
              >
                <img
                  src={returnDownForward}
                  alt="return-down-forward"
                  className="mr-5 w-[20px] h-[11.43px]"
                />
                <span className="font-montserrat text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Skeleton>
    </section>
  );
};

export default Amenities;
