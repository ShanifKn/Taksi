import React, { useEffect, useState } from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useSelector } from "react-redux";
import { fetchUserDetails, updateUserProfile } from "../../api/services/UserRequest";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const token = useSelector((state) => state.userLogin.token);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    pending: "",
    confirmed: "",
  });

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await fetchUserDetails(token);
    if (response.status === 200) {
      setUser({
        image: response.data.user.profile,
        name: response.data.user.name,
        email: response.data.user.email,
        phone: response.data.user.phone,
        pending: response.data.pending,
        confirmed: response.data.conform,
      });
    }
    if (response.status === 500) return navigate("/error");
  };

  const uploadImage = async (event) => {
    const image = event.target.files[0];
    const response = await updateUserProfile(image, token);
    if (response.status === 200) return setUser({ image: response.data.userProfile });
    if (response.status === 500) return navigate("/error");
  };

  console.log(user);

  return (
    <>
      <div class=" font-sans mt-36 w-8/12 flex justify-start items-start text-black">
        <div class=" w-full ">
          <label htmlFor="profile-picture">
            <div class="relative">
              {user.image ? (
                <img className="w-32 h-32 mx-auto rounded-full  brightness-50 -mt-20" src={user.image} alt="" />
              ) : (
                <img className="w-32 mx-auto rounded-full  brightness-50 -mt-20" src="https://dummyimage.com/80x80" alt="" />
              )}
              <div class="absolute inset-0 flex items-end justify-center text-white mb-2">
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
          </label>
          <input type="file" id="profile-picture" name="profile-picture" className="hidden" onChange={uploadImage} />
          <div>
            <div class="text-center mt-2 text-3xl font-medium">{user.name}</div>
            <div class="text-center mt-4 font-light text-sm">{user.email}</div>
            <div class="text-center mt-1 font-normal text-lg">+91{user.phone}</div>

            <hr class="mt-8" />
            <div class="flex p-4">
              <div class="w-1/2 text-center">
                <span class="font-bold">{user.pending}</span> Pending
              </div>
              <div class="w-0 border border-gray-300"></div>
              <div class="w-1/2 text-center">
                <span class="font-bold">{user.confirmed}</span> Confirm
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
