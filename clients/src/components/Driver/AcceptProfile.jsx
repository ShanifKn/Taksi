import React from "react";

const AcceptProfile = ({ name, email, phone, image }) => {
  console.log(image);
  return (
    <>
      <div className="md:card md:card-side bg-base-100 shadow-xl md:mt-0 mt-5 md:mr-36 hidden ">
        <figure>
          {image ? (
            <img src={image} alt="Movie" className="md:w-40 md:h-52 w-full h-32 object-contain md:object-cover" />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              alt="Movie"
              className="md:w-40 md:h-52 w-full h-32 object-contain md:object-cover"
            />
          )}
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-normal md:block flex-col  ">{name}</h2>
          <h2 className="card-title font-normal md:block flex-col">{phone}</h2>
          <h2 className="card-title font-normal md:block flex-col">{email}</h2>
        </div>
      </div>
    </>
  );
};

export default AcceptProfile;
