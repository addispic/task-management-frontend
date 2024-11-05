import React, {useState} from "react";
import { NavLink } from "react-router-dom";

// icons
import { GoTasklist } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { BiSolidMessageAlt } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";

const Header = () => {

  // states
  // local states
  // user info toggler
  const [userInfoToggler, setUserInfoToggler] = useState(false)

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
      <div>
        {!true ? (
          <div className="flex items-center gap-x-1.5">
            {/* message */}
            <NavLink className={"text-sky-600"}>
              <BiSolidMessageAlt />
            </NavLink>
            {/* notifications */}
            <NavLink className={"text-sky-600 text-lg"}>
              <IoMdNotifications />
            </NavLink>
            {/* user */}
            <div className="relative">
              <div className="flex items-center gap-x-1 text-sm cursor-pointer mx-3" onClick={()=>{
                setUserInfoToggler(!userInfoToggler)
              }}>
                <span className="text-neutral-500">Haddis</span>
                <div className="w-[28px] aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://images.alphacoders.com/752/752287.jpg"
                    alt=""
                  />
                </div>
                <FaAngleDown className={`text-sky-600 transition-transform ease-in-out duration-150 ${userInfoToggler ? "-rotate-180" : "rotate-0"}`} />
              </div>
              {/* user info */}
              <div className={`absolute right-0 top-[5vh] overflow-hidden transition-all ease-in-out duration-150 ${userInfoToggler ? "h-[80vh]" : "h-0"}`}>
                <div className="m-3 relative bg-white border border-neutral-300 rounded-md p-3">
                  {/* triangle */}
                  <div className="w-[14px] rotate-45 aspect-square border border-neutral-300 absolute top-0 right-7 mt-[-7px] bg-white border-r-transparent border-b-transparent"/>
                  {/* image */}
                  <div className="w-[120px] aspect-square rounded-md overflow-hidden relative">
                    <button className="absolute w-[20px] aspect-square rounded-full overflow-hidden flex items-center justify-center right-0 top-0 bg-white text-red-400 transition-colors ease-in-out duration-150 hover:text-red-600">
                      <RiDeleteBin6Line />
                    </button>
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://images.alphacoders.com/752/752287.jpg"
                      alt=""
                    />
                  </div>
                  {/* navigator */}
                  <div className="flex items-center justify-between my-1.5">
                    {/* prev */}
                    <button>
                      <BsFillArrowRightSquareFill className="text-sky-600 text-lg transition-colors ease-in-out duration-150 hover:text-sky-500 rotate-180" />
                    </button>
                    {/* pick file */}
                    <input
                      type="file"
                      accept="image/*"
                      id="profile-picker-input"
                      hidden
                    />
                    <label htmlFor="profile-picker-input">
                      <FaCamera className="text-sky-600 text-lg transition-colors ease-in-out duration-150 hover:text-sky-500 cursor-pointer"/>
                    </label>
                    {/* next */}
                    <button>
                      <BsFillArrowRightSquareFill className="text-sky-600 text-lg transition-colors ease-in-out duration-150 hover:text-sky-500 " />
                    </button>
                  </div>
                  {/* username */}
                  <div className="flex items-center justify-center my-1.5 text-sm text-neutral-600">
                    <span>Haddis</span>
                  </div>
                  {/* logout */}
                  <div className="mt-3 flex">
                    <button className="flex-1 bg-sky-600 text-white text-sm py-1 rounded-sm transition-colors ease-in-out duration-150 hover:bg-sky-500">Logout</button>
                  </div>
                </div>
              </div>
            </div>

            {/* logout button */}
            <button className="text-sm px-3 py-0.5 rounded-sm bg-sky-600 text-white transition-colors ease-in-out duration-150 hover:bg-sky-500">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-x-3">
            {/* login | register */}
            <NavLink className={'text-sm text-white bg-sky-600 transition-colors ease-in-out duration-150 hover:bg-sky-500 px-3 py-0.5 rounded-sm'}>Login</NavLink>
            <NavLink className={'text-sm text-white bg-sky-600 transition-colors ease-in-out duration-150 hover:bg-sky-500 px-3 py-0.5 rounded-sm'}>Register</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
