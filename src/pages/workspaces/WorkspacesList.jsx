import React, {useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";

// icons
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { LuClock2 } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
import { LuCalendarClock } from "react-icons/lu";
import { RiEdit2Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

const WorkspacesList = () => {
    // states
    // local states
    // workspace profile
    const [workspaceProfileInput,setWorkspaceProfileInput] = useState(null)
    // workspace title
    const [workspaceTitle,setWorkspaceTitle] = useState("")
    // workspace description
    const [workspaceDescription,setWorkspaceDescription] = useState("")
    // const is focus
    const [isInputFocus,setInputFocus] = useState("")
    // is user list
    const [isUserListOn,setIsUserListOn] = useState(false)
    // is new workspace on
    const [isNewWorkspaceOn,setIsNewWorkSpaceOn] = useState(false)

    // reference
    // workspace description reference
    const workspaceDescriptionReference = useRef(null)

    // effects
    // workspace description textarea height
    useEffect(() => {
      if (workspaceDescriptionReference.current) {
        workspaceDescriptionReference.current.style.height = "18px";
        workspaceDescriptionReference.current.style.height = `${workspaceDescriptionReference.current.scrollHeight}px`;
      }
    }, [workspaceDescription]);


    // handlers
    // workspace profile input change handler
    const workspaceProfileInputChangeHandler = e => {
        setWorkspaceProfileInput(e.target.files[0])
        e.target.value = ""
    }

  return (
    <div className="relative">
      {/* header */}
      <header className="flex items-center justify-between px-3 py-1.5 rounded-sm bg-neutral-100 ">
        {/* left */}
        <div className="flex items-center gap-x-2">
          {/* <h3 className="font-bold text-neutral-400 text-lg">Workspaces</h3> */}
          <div className="flex items-center gap-x-1 bg-white px-1.5 py-1 rounded-md border border-neutral-200">
            <CiSearch className="text-xl" />
            <input
              className="focus:ring-0 focus:outline-none w-full min-w-52 border-none bg-transparent "
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        {/* right */}
        <button
          onClick={() => {
            setIsNewWorkSpaceOn(true);
          }}
          className="flex items-center gap-x-1 text-sm text-sky-400 transition-colors ease-in-out duration-150 hover:text-sky-600"
        >
          <AiOutlinePlus />
          <span>new workspaces</span>
        </button>
      </header>
      {/* workspaces list */}
      <div
        className="h-[85vh] bg-neutral-100 overflow-y-auto mt-2 p-3 grid grid-cols-3 gap-5"
        id="workspaces-list-container"
      >
        {[...Array(120)].map((item, index) => {
          return (
            <div key={index} className=" bg-white p-3 rounded-sm shadow-md">
              {/* header */}
              <header className="flex items-center justify-between">
                {/* left */}
                <div className="flex items-center gap-x-3">
                  {/* project manager */}
                  <div className="flex items-center gap-x-1">
                    <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover object-center"
                        src="https://images.alphacoders.com/752/752287.jpg"
                        alt=""
                      />
                    </div>
                    <p className="text-sm text-neutral-500">By Haddis</p>
                  </div>
                  {/* status */}
                  <p className="text-xs py-1 rounded-full px-3.5 text-green-700 bg-green-100">
                    active
                  </p>
                </div>
                {/* right */}
                <NavLink to={`/dashboard/workspace-detail/${index}`}>
                  <TfiMoreAlt className="text-neutral-400 transition-colors ease-in-out duration-150 hover:text-sky-600" />
                </NavLink>
              </header>
              {/* workspace */}
              <h3 className="my-3 font-bold text-neutral-500">
                Skylight Technologies
              </h3>
              <div className="flex items-center gap-x-3">
                {/* starting date */}
                <p className="flex items-center gap-x-1 text-xs text-sky-500">
                  <LuCalendarClock className="text-lg" />
                  <span>started 5 days ago</span>
                </p>
                {/* starting date */}
                <p className="flex items-center gap-x-1 text-xs text-neutral-500">
                  <LuClock2 className="text-lg" />
                  <span>3 weeks left</span>
                </p>
              </div>
              {/* footer */}
              <footer className="mt-3.5 flex items-center justify-between">
                {/* left */}
                <div className="flex items-center">
                  {/* teams */}
                  <div className="w-[20px] z-0 relative aspect-square rounded-full overflow-hidden bg-white">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-[20px] z-10 left-[-0.5rem] relative aspect-square rounded-full overflow-hidden bg-red-400">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://media.istockphoto.com/id/1082483460/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=MmNFcZf6z2WLY7jMBAmtLxo6YNItudiRuzn-z7V3tZk="
                      alt=""
                    />
                  </div>
                  <div className="w-[20px] z-20 left-[-0.75rem] relative aspect-square rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center text-xs font-bold">
                    <span>3+</span>
                  </div>
                  <span className="ml-[-.25rem] text-sm text-neutral-500">
                    teams
                  </span>
                </div>
                {/* right */}
                <button className="flex items-center gap-x-1.5 text-neutral-500 transition-colors ease-in-out duration-150 hover:text-sky-700">
                  <CiEdit className="text-lg" />
                  <span className="text-sm">edit</span>
                </button>
              </footer>
            </div>
          );
        })}
      </div>

      {/* new workspace */}
      {isNewWorkspaceOn && (
        <div className="fixed left-0 top-0 z-40 w-full h-full bg-black bg-opacity-35">
          {/* content */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[32rem] top-24 bg-white p-10 shadow-lg rounded-md">
            {/* close button */}
            <button
              onClick={() => {
                setIsNewWorkSpaceOn(false);
              }}
              className="absolute right-2 top-2 transition-colors text-red-400 ease-in-out duration-150 hover:text-red-500"
            >
              <AiOutlineClose />
            </button>
            {/* file and title */}
            <div className="flex gap-x-3">
              {/* file */}
              <div className="mt-3">
                <input
                  type="file"
                  name="workspace-profile"
                  id="workspace-profile"
                  accept="image/*"
                  hidden
                  onChange={workspaceProfileInputChangeHandler}
                />
                <label htmlFor="workspace-profile">
                  {workspaceProfileInput ? (
                    <div className="w-[50px] aspect-square rounded-full overflow-hidden cursor-pointer">
                      <img
                        className="w-full h-full object-center object-cover"
                        src={URL.createObjectURL(workspaceProfileInput)}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="w-[50px] bg-sky-500 transition-colors ease-in-out duration-150 hover:bg-sky-400 cursor-pointer text-white aspect-square rounded-full overflow-hidden flex items-center justify-center">
                      <FaCamera />
                    </div>
                  )}
                </label>
              </div>
              {/* title & description */}
              <div className="flex-1">
                {/* title */}
                <div
                  className={`
              w-full bg-white border ${
                isInputFocus === "workspace-title" || workspaceTitle
                  ? "border-sky-500"
                  : "border-neutral-300"
              } p-1 rounded-sm mb-3
                `}
                >
                  <input
                    onFocus={() => {
                      setInputFocus("workspace-title");
                    }}
                    onBlur={() => {
                      setInputFocus("");
                    }}
                    type="text"
                    placeholder="workspace"
                    className="w-full focus:ring-0 focus:outline-none"
                    value={workspaceTitle}
                    onChange={(e) => {
                      setWorkspaceTitle(e.target.value);
                    }}
                  />
                </div>
                {/* description */}
                <div
                  className={`
              w-full bg-white border ${
                isInputFocus === "workspace-description" || workspaceDescription
                  ? "border-sky-500"
                  : "border-neutral-300"
              } p-1 pb-0 rounded-sm mb-3
                `}
                >
                  <textarea
                    ref={workspaceDescriptionReference}
                    className="w-full max-h-[150px] focus:outline-none focus:ring-0 border-none h-[18px] p-0 resize-none"
                    name=""
                    onFocus={() => {
                      setInputFocus("workspace-description");
                    }}
                    onBlur={() => {
                      setInputFocus("");
                    }}
                    value={workspaceDescription}
                    onChange={(e) => {
                      setWorkspaceDescription(e.target.value);
                    }}
                    id="workspace-description-textarea"
                    placeholder="description"
                  ></textarea>
                </div>
              </div>
            </div>
            {isUserListOn ? (
              <div>
                <div className="mt-1 overflow-hidden rounded-sm p-1 ml-14">
                  {/* header */}
                  <header className="flex items-center gap-x-5 bg-sky-500 px-1.5 py-1 rounded-t-sm overflow-hidden">
                    {/* left */}
                    <div className="flex-1">
                      <div className="flex items-center gap-x-1 w-full bg-neutral-100 rounded-sm p-1">
                        <CiSearch className="text-xl" />
                        <input
                          className="focus:ring-0 text-sm focus:outline-none w-full border-none bg-transparent"
                          type="text"
                          placeholder="search"
                        />
                      </div>
                    </div>
                    {/* right */}
                    <button
                      className="w-[24px] aspect-square rounded-full overflow-hidden bg-sky-400 flex items-center justify-center text-white transition-colors ease-in-out duration-150 hover:bg-sky-600"
                      onClick={() => {
                        setIsUserListOn(false);
                      }}
                    >
                      <IoIosArrowUp />
                    </button>
                  </header>
                  {/* list */}
                  <div
                    className="border border-sky-500 max-h-[32vh] overflow-y-auto rounded-b-sm overflow-hidden p-1 pr-3"
                    id="workspace-users-list-container"
                  >
                    {[...Array(15)].map((item, index) => {
                      return (
                        <div
                          className={`flex items-center gap-x-3 justify-between mb-1.5 p-1 rounded-md overflow-hidden cursor-pointer  transition-colors ease-in-out duration-150  ${
                            index === 1
                              ? "bg-sky-100"
                              : "bg-neutral-100 hover:bg-neutral-200"
                          }`}
                        >
                          {/* left */}
                          <div className="flex items-center gap-x-1">
                            {/* image */}
                            <div className="w-[28px] aspect-square rounded-full overflow-hidden">
                              <img
                                className="w-full h-full object-center object-cover"
                                src="https://img.freepik.com/free-photo/close-up-portrait-frowning-angry-bearded-man_171337-4829.jpg?semt=ais_hybrid"
                                alt=""
                              />
                            </div>
                            {/* username */}
                            <div className="text-sm text-sky-600">
                              <p>username</p>
                            </div>
                          </div>
                          {/* right */}
                          <div>
                            <IoCheckmarkCircle
                              className={`text-sky-500 transition-transform ease-in-out duration-150 ${
                                index === 1 ? "scale-100" : "scale-0"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-end">
                <button
                  onClick={() => {
                    setIsUserListOn(true);
                  }}
                >
                  <div className="flex items-center gap-x-1 text-sm text-sky-400 transition-colors ease-in-out duration-150 hover:text-sky-500">
                    <MdOutlinePersonAddAlt className="text-lg" />
                    <span>add teams</span>
                  </div>
                </button>
              </div>
            )}
            {/* create button */}
            <div className="flex items-center justify-evenly gap-x-7 mt-3">
              <button className="bg-sky-500 px-3 py-0.5 rounded-sm text-white transition-colors ease-in-out duration-150 hover:bg-sky-600">
                create workspace
              </button>
              <button
                onClick={() => {
                  setIsNewWorkSpaceOn(false);
                }}
                className="px-3 py-0.5 rounded-sm bg-red-400 text-white transition-colors ease-in-out duration-150 hover:bg-red-500"
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkspacesList;
