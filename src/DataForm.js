// PropertyList.js

// PropertyList.js

// PropertyList.js

import React from "react";

const PropertyList = ({ filters, onCheckboxChange }) => {
  return (
    <div>
      <div className="chk">
        <div className="ch1 ml-4">
          <input
            className="chk2"
            type="checkbox"
            aria-label="Checkbox for following text input"
            onChange={() => onCheckboxChange("isFurnished")}
            checked={filters.isFurnished}
          />
          <label className="ml-2">Furnished</label>
        </div>
        {/* Add more checkboxes as needed */}
      </div>
    </div>
  );
};

export default PropertyList;


