import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// icons
import { RxExit } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { SiMicrosoftteams } from "react-icons/si";
import { GoTasklist } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const WorkspaceDetail = () => {
  // hooks
  // params
  const { workspace_id } = useParams();
  // is uae list on
  const [isUserListOn, setIsUserListOn] = useState(false);
  // is user selected
  const [isUserSelected, setIsUserSelected] = useState(false);
  // task title
  const [taskTitle, setTaskTitle] = useState("");
  // task description
  const [taskDescription, setTaskDescription] = useState("");
  // is focus
  const [isFocus, setIsFocus] = useState("");
  // dates
  // start date
  const [selectStartedDate, setSelectStartedDate] = useState(null);
  // is started date on
  const [isStartedDateOn, setIsStartedDateOn] = useState(false);
  // end date
  const [selectEndDate, setSelectEndDate] = useState(null);
  // is end date on
  const [isEndDateOn, setIsEndDateOn] = useState(false);
  // priority
  const [taskPriority, setTaskPriority] = useState(-1);
  // is new task
  const [isNewTaskOn,setIsNewTaskOn] = useState(false)
  // filter option
  const [filterOption,setFilterOption] = useState({
    options: [
      {
        text: "All Tasks",
      },
      {
        text: "On Progress",
      },
      {
        text: "Pending Tasks",
      },
      {
        text: "Closed Tasks"
      }
    ],
    selected: "All Tasks",
    isOn: false
  })
  // navigate
  const navigate = useNavigate();

  // dashboard links
  const [dashboardMainLinks, setDashboardMainLinks] = useState({
    links: [
      {
        text: "Tasks",
        icon: GoTasklist,
      },
      {
        text: "Teams",
        icon: SiMicrosoftteams,
      },
    ],
    selected: "Tasks",
  });

  const handleButtonClick = () => {
    setShowPicker(true);
  };

  return (
    <div>
      {/* top */}
      <div className="p-5 bg-neutral-100 rounded-md  flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-x-1.5">
          {/* search */}
          <div className="border border-neutral-200 rounded-md bg-white p-1 flex items-center gap-x-1">
            <CiSearch className="text-lg"/>
            <input className="focus:ring-0 text-sm focus:outline-none border-none w-full bg-transparent" type="text" placeholder="search" />
          </div>
          {/* filter */}
          <div className="flex items-center gap-x-3">
            <div className="text-sm text-neutral-400">
              <span>Filter By: </span>
            </div>
            {/* option */}
            <div className="relative">
              <div className="flex items-center gap-x-1 border border-neutral-200 rounded-sm cursor-pointer px-1 py-0.5 text-sm w-[115px] bg-white" onClick={()=>{
                setFilterOption(item => {
                  return {
                    ...item,
                    isOn: !item.isOn
                  }
                })
              }}>
                <div className="flex-1 items-center gap-x-1">{filterOption.selected}</div>
                <MdKeyboardArrowDown className={`transition-transform ease-in-out duration-150 ${filterOption.isOn ? "-rotate-180" : "rotate-0"}`}/>
              </div>
              {/* option list */}
              {
                filterOption.isOn && 
              <div className="absolute left-0 top-0 w-full bg-white mt-[1.75rem] shadow-lg p-1.5">
                {
                  filterOption.options.map((item,index)=>{
                    return (
                      <div onClick={()=>{
                        setFilterOption(prev => {
                          return {
                            ...prev,
                            selected: item.text,
                            isOn: false
                          }
                        })
                      }} key={item.text} className="cursor-pointer transition-colors ease-in-out duration-150 hover:bg-neutral-100 px-1.5 py-0.5 text-sm">
                        <span>{item.text}</span>
                      </div>
                    )
                  })
                }
              </div>
              }
            </div>
          </div>
          
        </div>

        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <h3 className="text-neutral-500 ">Workspace</h3>
              <button onClick={()=>{
                setIsNewTaskOn(true)
              }} className="flex items-center gap-x-1.5 text-sky-500 text-sm transition-colors ease-in-out duration-150 hover:text-sky-600">
                <AiOutlinePlus />
                <span>add new task</span>
              </button>
          </div>

          {/* right */}
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <RxExit className=" text-neutral-500 transition-colors ease-in-out duration-150 hover:text-sky-600" />
          </button>
        </div>

      </div>
      {/* content */}
      <div className="p-5 bg-neutral-100 rounded-md h-[81vh] overflow-y-auto mt-5" id="workspace-tasks-list-container">
          <div>
            {[...Array(21)].map((item, index) => {
              return (
                <div className="border border-neutral-200 rounded-md p-3 mb-5 bg-white shadow-md">
                  {/* header */}
                  <header className="flex items-center justify-between">
                    {/* left */}
                    <div className="flex items-center gap-x-3">
                      <div className="w-[32px] aspect-square rounded-full overflow-hidden">
                        <img
                          className="w-full object-center h-full object-cover"
                          src="https://images.alphacoders.com/752/752287.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-500">
                          Finishing Makuta Logo
                        </p>
                        <p className="mt-[-3px] text-sm">Haddis Fenta</p>
                      </div>
                    </div>
                    {/* right */}
                    <div className="self-start flex items-center gap-x-3">
                      {/* status */}
                      <div className="px-3 text-sm text-green-600 rounded-full bg-green-100">
                        <span>active</span>
                      </div>
                      {/* edit btn */}
                      <button className="flex items-center gap-x-1 text-neutral-500 transition-colors ease-in-out duration-150 hover:text-sky-600">
                        <CiEdit className="text-lg" />
                        <span>edit</span>
                      </button>
                      {/* delete btn */}
                      <button className="flex items-center gap-x-1 text-neutral-500 transition-colors ease-in-out duration-150 hover:text-red-600">
                        <AiOutlineDelete className="text-lg" />
                        <span>delete</span>
                      </button>
                    </div>
                  </header>
                  {/* tasks */}
                  <div className="ml-11 mt-1">
                    <h3 className="font-medium">Tasks</h3>
                    <div>
                      {[...Array(3)].map((item, index) => {
                        return (
                          <div className="flex items-center gap-x-3 mb-1 cursor-pointer">
                            {/* box */}
                            <div className="w-[18px] aspect-square border border-neutral-300 rounded-sm flex items-center justify-center">
                              <IoCheckmarkSharp className="text-sm scale-50" />
                            </div>
                            {/* text */}
                            <div className="text-sm">
                              <p>Finishing Makuta Law Firm</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* footer */}
                  <footer className="mt-3 flex items-center gap-x-3">
                    {/* start */}
                    <div className="flex items-center gap-x-1 text-neutral-500">
                      <IoIosTimer />
                      <span className="text-sm">
                        task started 3 minutes ago
                      </span>
                    </div>
                    {/* recent update */}
                    <div className="flex items-center gap-x-1 text-neutral-500">
                      <MdOutlineUpdate />
                      <span className="text-sm">last update 1 minutes ago</span>
                    </div>
                  </footer>
                </div>
              );
            })}
          </div>
        
      </div>

      {/* new task */}
      {
        isNewTaskOn && 
      <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-35">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 p-5 w-[35%] rounded-md overflow-hidden bg-white shadow-xl">
          {/* new task */}
          <header className="flex items-center justify-between">
            <h3 className="text-neutral-400 font-bold">New Task</h3>
            {isUserSelected ? (
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  setIsUserSelected(false);
                }}
              >
                {/* username & image */}
                <p className="text-sm text-sky-500">Username</p>
                <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsUserListOn(true);
                }}
              >
                <div className="flex items-center gap-x-1 text-sm text-sky-400 transition-colors ease-in-out duration-150 hover:text-sky-500">
                  <MdOutlinePersonAddAlt className="text-lg" />
                  <span>select user</span>
                </div>
              </button>
            )}
          </header>
          {/* user list */}
          {isUserListOn && !isUserSelected && (
            <div>
              <div className="mt-1 overflow-hidden rounded-sm p-1">
                {/* header */}
                <header className="flex items-center gap-x-5 bg-sky-500 px-1.5 py-1 rounded-t-sm overflow-hidden">
                  {/* left */}
                  <div className=" w-[75%]">
                    <div className="flex items-center gap-x-1 w-full bg-neutral-100 rounded-sm p-1">
                      <CiSearch className="text-xl" />
                      <input
                        className="focus:ring-0 text-sm focus:outline-none w-full border-none bg-transparent"
                        type="text"
                        placeholder="search"
                      />
                    </div>
                  </div>
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
                        onClick={() => {
                          setIsUserSelected(true);
                        }}
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
          )}

          {/* content */}
          {isUserSelected && (
            <div className="mt-3">
              <div>
                {/* task title */}
                <div
                  className={`border p-1 rounded-sm mb-4 ${
                    isFocus === "task-title" || taskTitle
                      ? "border-sky-500"
                      : "border-neutral-300"
                  }`}
                >
                  <input
                    onFocus={() => {
                      setIsFocus("task-title");
                    }}
                    onBlur={() => {
                      setIsFocus("");
                    }}
                    value={taskTitle}
                    onChange={(e) => {
                      setTaskTitle(e.target.value);
                    }}
                    className="w-full focus:ring-0 focus:outline-none border-none bg-transparent"
                    type="text"
                    placeholder="task title"
                  />
                </div>
                {/* test description */}
                <div
                  className={`border p-1 ${
                    isFocus === "task-description" || taskDescription
                      ? "border-sky-500"
                      : "border-neutral-200"
                  }`}
                >
                  <textarea
                    onFocus={() => {
                      setIsFocus("task-description");
                    }}
                    onBlur={() => {
                      setIsFocus("");
                    }}
                    value={taskDescription}
                    onChange={(e) => {
                      setTaskDescription(e.target.value);
                    }}
                    name=""
                    placeholder="task description"
                    id="task-description-textarea"
                    className="w-full focus:ring-0 focus:outline-none bg-transparent resize-none h-[18px]"
                  ></textarea>
                </div>
                {/* start & end date */}
                <div className="flex items-start justify-between my-3">
                  <div className="">
                    <div className="flex items-center gap-x-5">
                      <div
                        className="w-max px-1.5 py-0.5 bg-sky-500 rounded-sm text-white text-sm transition-colors ease-in-out duration-150 hover:bg-sky-400 cursor-pointer"
                        onClick={() => {
                          setIsStartedDateOn(true);
                        }}
                      >
                        <span>Start Date</span>
                      </div>
                      {selectStartedDate && (
                        <div className="text-sm text-sky-600">
                          <span>
                            {selectStartedDate.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    {isStartedDateOn && (
                      <div className="mt-3">
                        <DatePicker
                          selected={selectStartedDate}
                          onChange={(date) => {
                            setSelectStartedDate(date);
                            setIsStartedDateOn(false);
                          }}
                          onClickOutside={() => isStartedDateOn(false)}
                          inline
                        />
                      </div>
                    )}
                  </div>
                  {/* end date */}
                  <div className="">
                    <div className="flex items-center gap-x-5">
                      <div
                        className="w-max px-1.5 py-0.5 bg-sky-500 rounded-sm text-white text-sm transition-colors ease-in-out duration-150 hover:bg-sky-400 cursor-pointer"
                        onClick={() => {
                          setIsEndDateOn(true);
                        }}
                      >
                        <span>End date</span>
                      </div>
                      {selectEndDate && (
                        <div className="text-sm text-sky-600">
                          <span>
                            {selectEndDate.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    {isEndDateOn && (
                      <div className="mt-3">
                        <DatePicker
                          selected={selectEndDate}
                          onChange={(date) => {
                            setSelectEndDate(date);
                            setIsEndDateOn(false);
                          }}
                          onClickOutside={() => setIsEndDateOn(false)}
                          inline
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* priority */}
                <div className="flex gap-x-7">
                  <div className="text-sm text-sky-600">
                    <span>Priority</span>
                  </div>
                  <div className="flex items-center gap-x-5 flex-wrap">
                    {[...Array(3)].map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-1 cursor-pointer"
                          onClick={() => {
                            setTaskPriority(
                              taskPriority === index ? -1 : index
                            );
                          }}
                        >
                          <div
                            className={`w-[18px] ${
                              taskPriority === index
                                ? "border-sky-500 bg-sky-500 text-white"
                                : "border-neutral-300"
                            } text-sm flex items-center justify-center aspect-square rounded-sm border `}
                          >
                            <IoCheckmarkSharp
                              className={`transition-transform ease-in-out duration-150 ${
                                taskPriority === index ? "scale-100" : "scale-0"
                              }`}
                            />
                          </div>
                          <span className="text-sm">Critical</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* buttons */}
                <div className="mt-5 flex items-center gap-x-3">
                  <button className="px-3 py-1 text-sm bg-sky-500 text-white rounded-sm transition-colors ease-in-out duration-150 hover:bg-sky-400">
                    create task
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-sm transition-colors ease-in-out duration-150 hover:bg-red-400" onClick={()=>{
                    setIsNewTaskOn(false)
                  }}>
                    cancel task
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      }
    </div>
  );
};

export default WorkspaceDetail;
