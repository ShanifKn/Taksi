import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationName } from "../../api/getLocationCoordinates";
import { getlocation, getTripDetails, onRide, stopRiding } from "../../api/services/DriverRequest";
import RailwayAlertIcon from "@mui/icons-material/RailwayAlert";
import { setLocation, setActive, setInactive, setLocationData, setStartDrive } from "../../Store/Slice/DriverLogin";
import { useNavigate } from "react-router-dom";

const DriverLoacation = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { location, active, token, driving } = useSelector((state) => state.driverLogin);
  const [otp, setOtp] = useState();
  const [customer, setCustomer] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchLoactionData = async () => {
    const response = await getlocation(token);
    console.log(response.data);
    if (response.status === 306) return dispatch(setStartDrive({ driving: false }));
    if (response.status === 302) return dispatch(setStartDrive({ driving: true }));
    if (response.status === 200) {
      const lng = response.data.location[0];
      const lat = response.data.location[1];
      await getLocationName(lng, lat).then((locationName) => {
        dispatch(setLocation({ location: locationName, active: true, driving: false }));
      });
    }
  };

  useEffect(() => {
    fetchLoactionData();
    // eslint-disable-next-line
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
    if (!status) {
      dispatch(setInactive());
      dispatch(setLocationData());
      return;
    }
    return dispatch(setActive());
  };

  // * send otp and get details *//
  const submitCode = async () => {
    const response = await getTripDetails(token, otp);
    if (response.status === 200) return setCustomer(response.data.ride);
    if (response.status === 203) return setError("No User found");
    if (response.status === 500) return navigate("/driver/error");
  };

  const appectRide = async () => {
    dispatch(setInactive());
    dispatch(setLocationData());
    dispatch(setStartDrive({ driving: true }));
    await onRide(token);
  };

  const stopRide = async () => {
    dispatch(setStartDrive({ driving: false }));
    await stopRiding(token);
  };

  return (
    <>
      <div className="md:flex items-center hidden">
        {!driving ? (
          <label htmlFor="my-modal-6" className="btn btn-sm md:btn-md mx-10 bg-green-600 text-black hover:text-white">
            Start ride
          </label>
        ) : (
          <button className="btn btn-sm md:btn-md mx-10 bg-red-600 text-black hover:text-white" onClick={stopRide}>
            Stop
          </button>
        )}

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
                    {suggestion.place_name}
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

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle text-white">
        <div className="modal-box">
          {error && (
            <div className="alert alert-error shadow-lg my-5">
              <div>
                <RailwayAlertIcon className="stroke-current flex-shrink-0 h-6 w-6" />
                <span>{error}</span>
              </div>
            </div>
          )}
          {!customer && (
            <>
              <h3 className="font-bold text-lg">Enter the verification code </h3>
              <div className="flex justify-center items-center w-full ">
                <div className="form-control md:mt-10 w-56 ">
                  <input
                    type="text"
                    placeholder="otp"
                    value={otp}
                    maxLength="7"
                    minLength="7"
                    className="input input-bordered "
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <button className="btn btn-outline btn-error w-24 my-2 mx-16" onClick={submitCode}>
                    Start
                  </button>
                </div>
              </div>
            </>
          )}

          {customer && (
            <>
              <h3 className="font-bold text-lg text-center ">Customer details </h3>

              <div className="card w-full bg-base-100 shadow-xl  mt-5">
                <div className="card-body">
                  <h2 className="card-title">Name: {customer.user[0].name}</h2>
                  <p>Contact : {customer.user[0].phone}</p>
                  <p>Pick-up : {customer.location.pickup}</p>
                  <p>Drop-up : {customer.location.dropoff}</p>
                  <p>Payment : {customer.payment.amount}</p>
                  <p>
                    Status :
                    {customer.payment.status ? (
                      <span className="text-green-500 ml-2 font-bold">Paid</span>
                    ) : (
                      <span className="text-red-500 ml-2 font-bold">Unpaid</span>
                    )}
                  </p>
                  <div className="card-actions justify-end">
                    <label htmlFor="my-modal-6" className="btn bg-red-500 text-black">
                      Decline
                    </label>
                    <label htmlFor="my-modal-6" className="btn btn-primary" onClick={appectRide}>
                      Accept
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverLoacation;
