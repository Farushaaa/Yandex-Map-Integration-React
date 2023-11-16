import React, { useEffect } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import HoverContainer from "./HoverContainer";

const YandexMp = () => {
  const [inHover, setHover] = useState(false);

  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  let rahimcenter = [51.090329901302425, 71.39938940808027];
  let faracenter = [51.09341156348086, 71.40070323679193];

  console.log(mouseCoordinates.x, mouseCoordinates.y);
  return (
    <YMaps>
      <Map
        className="yandexmap"
        defaultState={{
          center: rahimcenter,
          zoom: 9,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          defaultGeometry={rahimcenter}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <Placemark
          defaultGeometry={faracenter}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </Map>
      {inHover && (
        <HoverContainer x={mouseCoordinates.x} y={mouseCoordinates.y} />
      )}
    </YMaps>
  );
};

export default YandexMp;
