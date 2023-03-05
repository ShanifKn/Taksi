import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setInactive, setLocation } from "../../Store/Slice/DriverLogin";

const DriverLocationMobile = () => {
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
    dispatch(
      setLocation({
        location: suggestion,
        active: true,
      })
    );
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
      <div className="md:hidden my-4 ml-2">
        <div className="flex gap-4 items-center mb-3">
          <input type="checkbox" checked={active} className={`toggle toggle-lg  ${!active ? "" : "bg-green-500"}`} onChange={selectOffline} />
          {active && <h1 className="text-green-500 mr-4">Active</h1>}
        </div>
        <div className="form-control mt-1 ">
          <div className="input-group">
            <input
              type="text"
              placeholder="Select Location"
              value={active ? location : ""}
              className="input input-bordered w-56 text-white"
              onChange={handleInput}
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-400 w-60 max-h-48 overflow-y-scroll mt-12  rounded shadow-md">
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
      </div>
    </>
  );
};

export default DriverLocationMobile;
