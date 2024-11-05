import React from "react";
import { NavLink } from "react-router-dom";

// icons
import { GoTasklist } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { BiSolidMessageAlt } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-1.5">
      {/* left */}
      <div className="flex items-center">
        <GoTasklist className="text-2xl text-sky-600" />
        <p className="text-lg font-normal text-neutral-700">
          TM<span className="text-sky-600 font-black">S</span>
        </p>
      </div>
      {/* right */}
      <div>{true ? <div className="flex items-center gap-x-1.5">
        {/* message */}
        <NavLink className={'text-sky-600'}>
          <BiSolidMessageAlt/>
        </NavLink>
        {/* notifications */}
        <NavLink className={'text-sky-600 text-lg'}>
          <IoMdNotifications />
        </NavLink>
        {/* user */}
        <div className="relative">
          <div className="flex items-center gap-x-1 text-sm cursor-pointer mx-3">
            <span className="text-neutral-500">Haddis</span>
            <div className="w-[28px] aspect-square rounded-full overflow-hidden">
              <img className="w-full h-full object-center object-cover" src="https://images.alphacoders.com/752/752287.jpg" alt="" />
            </div>
            <FaAngleDown className={`text-sky-600`}/>
          </div>
          {/* user info */}
          <div className="absolute right-0 top-[5vh]">
            <div className="m-3 relative bg-white border border-neutral-200 p-3">
              {/* image */}
              <div className="w-[120px] aspect-square rounded-md overflow-hidden relative">
                <button className="absolute w-[20px] aspect-square rounded-full overflow-hidden flex items-center justify-center right-0 top-0 bg-white text-red-400 transition-colors ease-in-out duration-150 hover:text-red-600">
                  <RiDeleteBin6Line />
                </button>
                <img className="w-full h-full object-center object-cover" src="https://images.alphacoders.com/752/752287.jpg" alt="" />
              </div>
              {/* navigator */}
              <div className="flex items-center justify-between my-1.5">
                {/* prev */}
                <button>
                  <BsFillArrowRightSquareFill className="text-sky-600 text-lg transition-colors ease-in-out duration-150 hover:text-sky-500 rotate-180"/>
                </button>
                {/* pick file */}
                <input type="file" accept="image/*" id="profile-picker-input" hidden/>
                <label htmlFor="profile-picker-input">profile</label>
                {/* next */}
                <button>
                  <BsFillArrowRightSquareFill className="text-sky-600 text-lg transition-colors ease-in-out duration-150 hover:text-sky-500 "/>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* logout button */}
        <button className="text-sm px-3 py-0.5 rounded-sm bg-sky-600 text-white transition-colors ease-in-out duration-150 hover:bg-sky-500">Logout</button>

      </div> : <div>login or signup</div>}</div>
    </div>
  );
};

export default Header;
