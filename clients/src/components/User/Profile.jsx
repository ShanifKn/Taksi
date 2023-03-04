import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const Profile = () => {
  return (
    <>
      <div class=" font-sans mt-36 w-8/12 flex justify-start items-start text-black">
        <div class=" w-full ">
          <label htmlFor="profile-picture">
            <div class="relative">
              <img className="w-32 mx-auto rounded-full  brightness-50 -mt-20" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="" />
              <div class="absolute inset-0 flex items-end justify-center text-white mb-2">
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
          </label>
          <input type="file" id="profile-picture" name="profile-picture" className="hidden" />
          <div>
            <div class="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
            <div class="text-center mt-4 font-light text-sm">Shanif@gmail.com</div>
            <div class="text-center mt-1 font-normal text-lg">+91 7356215644</div>

            <hr class="mt-8" />
            <div class="flex p-4">
              <div class="w-1/2 text-center">
                <span class="font-bold">1.8 k</span> Pending
              </div>
              <div class="w-0 border border-gray-300"></div>
              <div class="w-1/2 text-center">
                <span class="font-bold">2.0 k</span> Confirm
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
