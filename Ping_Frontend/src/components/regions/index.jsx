import React from "react";

import './index.css'
export const Regions = ({ currentRegion, setCurrentRegion }) => {
  const regions = ["Massachusetts", "California", "arizona"];

  return (
    <div className="region-contaniner">
      {regions.map((region, index) => (
        <button
          key={`region_button_${index}`}
          className={`button region-button-style ${region === currentRegion ? "is-dark" : ""}`}
          onClick={() => setCurrentRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};
