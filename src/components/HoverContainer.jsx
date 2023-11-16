import React from "react";

const HoverContainer = ({ x, y }) => {
  return (
    <div
      className="hover_container"
      style={{ transform: `translate(${x - 10}px, ${-y + 280}px)` }}
    >
      <p className="eventName">Chess Tournament</p>
      <p className="locationName">Nazarbayev University</p>
      <p className="timeEvent">16.11.2023 at 10:30 AM</p>
    </div>
  );
};

export default HoverContainer;
