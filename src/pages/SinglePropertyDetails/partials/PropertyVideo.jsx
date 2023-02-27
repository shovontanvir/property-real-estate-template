import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingText from "./HeadingText";
import { Player, BigPlayButton } from "video-react";

import "../../../../node_modules/video-react/dist/video-react.css";

const PropertyVideo = () => {
  return (
    <section>
      <Skeleton>
        <HeadingText innerText="Video" />
        <Player
          playsInline
          poster="images/property-gallery-1.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      </Skeleton>
    </section>
  );
};

export default PropertyVideo;
