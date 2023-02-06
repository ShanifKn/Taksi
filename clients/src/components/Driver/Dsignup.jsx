import React, { useState } from "react";

const Dsignup = () => {
  const [preview, setPreview] = useState(null);
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
    picturePath: "",
  });

  const handleImg = (event) => {
    const image = event.target.files[0];
    const previewUrl = URL.createObjectURL(image);
    setPreview(previewUrl);
    setFormData({ ...formData, picturePath: event.target.files[0] });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full h-full p-6  bg-gray-800 text-gray-50">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto space-y-12 md:mt-16 md:w-3/5">
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
            <p className="text-xs  tracking-wide font-sans">
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
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Photo
              </label>
              <div className="flex  items-center space-x-2">
                <div className="form-control w-full max-w-xs">
                  <input
                    type="file"
                    name="picturePath"
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
          <div className="md:mx-96 md:mt-5 mx-14">
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
