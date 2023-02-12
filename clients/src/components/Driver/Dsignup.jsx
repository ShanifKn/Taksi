import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DriverSignup } from "../../api/services/DriverRequest";

const Dsignup = () => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    state: "",
    zip: "",
    DLRNO: "",
    vehicleNo: "",
    vehicleModel: "",
    price: "",
    picturePath: "",
  });

  const handleImg = (event) => {
    const image = event.target.files[0];
    const previewUrl = URL.createObjectURL(image);
    setPreview(previewUrl);
    setFormData({ ...formData, picturePath: image });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.password === "" ||
      formData.city === "" ||
      formData.state === "" ||
      formData.zip === "" ||
      formData.vehicleNo === "" ||
      formData.vehicleModel === "" ||
      formData.price === "" ||
      formData.picturePath === ""
    ) {
      setError("All fields are required.");
      return false;
    }

    if (
      !/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      setError("Invalid email address.");
      return false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Invalid phone number. Phone number must be 10 digits long.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 8 characters long.");
      return false;
    }

    const form = new FormData();
    form.append("image", formData.picturePath);
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("phone", formData.phone);
    form.append("city", formData.city);
    form.append("state", formData.state);
    form.append("zip", formData.zip);
    form.append("DLRNO", formData.DLRNO);
    form.append("vehicleNo", formData.vehicleNo);
    form.append("vehicleModel", formData.vehicleModel);
    form.append("Rate", formData.price);

    const response = await DriverSignup(form);
    if (response === 11000) {
      setError("User already exist !");
    } else if (response === true) {
      navigate("/driver/approve");
    } else {
      navigate("/driver/error");
    }
  };

  return (
    <section className="w-full h-full p-6  bg-gray-800 text-gray-50">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="container flex flex-col mx-auto space-y-12 md:mt-16 md:w-3/5">
        {error ? (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        ) : (
          ""
        )}

        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-extrabold text-lg text-red-700">
              Personal Inormation
            </p>
            <p className="text-xs text-white tracking-wide font-sans ">
              The driver must pass a background check to ensure they have a
              clean driving record and criminal history
            </p>
            <p className="text-xs  tracking-wide font-sans">
              The driver must provide proof of insurance for the vehicle they
              will be using for the ride-sharing service
            </p>
            <p className="text-xs  tracking-wide font-sans">
              Once the driver has completed all the above steps, the vehicle
              will be activated and they can begin accepting rides
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs "
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Type here"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"> State / Province</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"> ZIP / Postal</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-extrabold text-lg text-red-700 ">
              License & Registration Details
            </p>
            <p className="text-xs  tif (response === 200)racking-wide font-sans">
              Submit an application with their personal information, driving
              history, and vehicle information
            </p>
            <p className="text-xs  tracking-wide font-sans">
              The vehicle must pass a vehicle inspection to ensure it meets the
              company's safety standards
            </p>
            <p className="text-xs tracking-wide font-sans">
              The vehicle and driver must continue to meet the company's
              standards, and the driver must regularly update their information
              to maintain their eligibility to drive for the service.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"> Driving Licence</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="DLRNO"
                  value={formData.DLRNO}
                  onChange={handleInputChange}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"> vehicle number</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="vehicleNo"
                  value={formData.vehicleNo}
                  onChange={handleInputChange}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"> vehicle model</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="form-control w-full  max-w-xs">
              <label className="label">
                <span className="label-text">Charge Per Km</span>
              </label>
              <input
                type="number"
                placeholder="₹"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Photo
              </label>
              <div className="flex  items-center space-x-2">
                <div className="form-control w-full max-w-xs">
                  <input
                    type="file"
                    name="image"
                    onChange={handleImg}
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </div>
                {preview && (
                  <img src={preview} alt="" width="100px" height="100px" />
                )}
              </div>
            </div>
          </div>
          <div className="md:mx-96 md:mt-5 ">
            <button
              className="btn btn-active px-20 md:px-auto  place-items-center "
              type="submit">
              Button
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Dsignup;
