import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationName } from "../../api/getLocationCoordinates";
import { getlocation } from "../../api/services/DriverRequest";
import { setActive, setInactive, setLocation, setLocationData } from "../../Store/Slice/DriverLogin";

const DriverLocationMobile = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { location, active, token } = useSelector((state) => state.driverLogin);
  const dispatch = useDispatch();

  const fetchLoactionData = async () => {
    const response = await getlocation(token);
    if (response.status === 306) return;
    if (response.status === 200) {
      const lng = response.data.location[0];
      const lat = response.data.location[1];
      await getLocationName(lng, lat).then((locationName) => {
        dispatch(setLocation({ location: locationName, active: true }));
      });
    }
  };

  useEffect(() => {
    fetchLoactionData();
  }, []);

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
    setSuggestions(data.features);
  };

  //* location selecter *//
  const selectLocation = (suggestion) => {
    dispatch(setLocation({ location: suggestion.place_name, coordinates: suggestion.center, active: true }));
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
                    {suggestion.place_name}
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
