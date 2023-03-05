import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setActive, setInactive, setLocationData } from "../../Store/Slice/DriverLogin";

const DriverLoacation = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { location, active } = useSelector((state) => state.driverLogin);
  const dispatch = useDispatch();

  //* location suggestion *//
  let bbox = [72.55, 8.15, 78.55, 13.05];
  const handleInput = async (event) => {
    const query = event.target.value;
    if (!query) {
      setSuggestions([]);
      return;
    }
    const url = `${process.env.REACT_APP_MAPBOX_GEOCODING}/${encodeURIComponent(query)}.json?access_token=${
      process.env.REACT_APP_MAPBOX_TOKEN
    }&country=IN&region=KA,TN,KL&bbox=${bbox.join(",")}`;
    const response = await fetch(url);
    const data = await response.json();
    setSuggestions(data.features.map((f) => f.place_name));
  };

  //* location selecter *//
  const selectLocation = (suggestion) => {
    dispatch(setLocation({ location: suggestion, active: true }));
    dispatch(setLocationData());
    setSuggestions([]);
  };

  //* online *//
  const selectOffline = (event) => {
    const status = event.target.checked;
    if (!status) return dispatch(setInactive());
    return dispatch(setActive());
  };

  return (
    <>
      <div className="md:flex items-center hidden">
        <div className="form-control mr-4">
          <div className="input-group">
            <input
              type="text"
              value={active ? location : ""}
              placeholder="Select Location"
              className="input input-bordered text-white"
              onChange={handleInput}
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-400 w-96 max-h-48 overflow-y-scroll mt-12  rounded shadow-md">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => selectLocation(suggestion)}
                    className="cursor-pointer hover:bg-gray-200 p-2 border-b border-gray-400 text-black">
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {active && <h1 className="text-green-500 mr-4">Active</h1>}
        <div className="flex items-center md:mr-16">
          <div>
            <input type="checkbox" checked={active} className={`toggle toggle-lg  ${!active ? "" : "bg-green-500"}`} onChange={selectOffline} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverLoacation;
