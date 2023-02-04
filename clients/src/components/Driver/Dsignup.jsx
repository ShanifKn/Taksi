import React, { useState } from "react";

const Dsignup = () => {
  const [preview, setPreview] = useState(null);

  const handleImg = (event) => {
    const image = event.target.files[0];
    const previewUrl = URL.createObjectURL(image);
    setPreview(previewUrl);
  };

  return (
    <section className="w-full h-full p-6  bg-gray-800 text-gray-50">
      <form
        novalidate=""
        action=""
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
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="col-span-full">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
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
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>

            <div className="col-span-full">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea
                  className="textarea textarea-accent"
                  placeholder="Bio"></textarea>
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
                    multiple
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
          <div className="md:mx-96 md:mt-5 mx-20">
            <button
              className="btn btn-active px-20 md:px-auto place-items-center "
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
