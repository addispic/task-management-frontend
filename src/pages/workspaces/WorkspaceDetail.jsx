import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// icons
import { RxExit } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { SiMicrosoftteams } from "react-icons/si";
import { GoTasklist } from "react-icons/go";
import { PiUserPlusLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineUpdate } from "react-icons/md";

const WorkspaceDetail = () => {
  // hooks
  // params
  const { workspace_id } = useParams();
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
  return (
    <div>
      {/* top */}
      <div className="p-5 bg-neutral-100 rounded-md  overflow-hidden flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-x-5">
          {dashboardMainLinks.links.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setDashboardMainLinks((props) => {
                    return {
                      ...props,
                      selected: item.text,
                    };
                  });
                }}
                className={`flex items-center gap-x-1 text-sky-600 relative after:absolute after:left-0 after:bottom-0 after:bg-sky-600  after:h-[2px] after:transition-all after:ease-in-out after:duration-200 hover:after:w-full ${
                  dashboardMainLinks.selected === item.text
                    ? "after:w-full"
                    : "after:w-0"
                }`}
              >
                <item.icon className="text-lg" />
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>

        {/* workspaces */}
        <h3 className="text-neutral-400 font-medium flex-1  px-16">
          Skylight Technologies
        </h3>

        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-3">
            {dashboardMainLinks.selected === "Tasks" ? (
              <button className="flex items-center gap-x-1.5 text-sky-500 text-sm transition-colors ease-in-out duration-150 hover:text-sky-600">
                <AiOutlinePlus />
                <span>add new task</span>
              </button>
            ) : dashboardMainLinks.selected === "Teams" ? (
              <button className="flex items-center gap-x-1.5 text-sky-500 text-sm transition-colors ease-in-out duration-150 hover:text-sky-600">
                <PiUserPlusLight className="text-lg" />
                <span>add member</span>
              </button>
            ) : null}
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
      <div className="p-5 bg-neutral-100 rounded-md h-[81vh] overflow-y-auto mt-5">
        {dashboardMainLinks.selected === "Tasks" ? (
          <div>
            {[...Array(2)].map((item, index) => {
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
                      <span className="text-sm">
                        last update 1 minutes ago
                      </span>
                    </div>
                  </footer>
                </div>
              );
            })}
          </div>
        ) : dashboardMainLinks.selected === "Teams" ? (
          <div>Teams</div>
        ) : null}
      </div>
    </div>
  );
};

export default WorkspaceDetail;
