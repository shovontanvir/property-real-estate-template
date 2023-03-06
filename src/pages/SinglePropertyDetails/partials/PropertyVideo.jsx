import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingText from "./HeadingText";
import ReactPlayer from "react-player/youtube";

const PropertyVideo = (props) => {
  return (
    <section>
      <Skeleton>
        <HeadingText innerText="Video" />
        <div className="w-full flex justify-center aspect-video">
          <ReactPlayer url={props.url} width="100%" height="100%" />
        </div>
      </Skeleton>
    </section>
  );
};

export default PropertyVideo;
