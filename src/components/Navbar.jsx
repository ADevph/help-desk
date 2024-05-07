import {React, useState} from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("New Help");

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white rounded-xl shadow-md p-2 flex justify-between items-center">
        <div className="flex items-center text-green-600">
          <AiOutlineQuestionCircle className="text-lg m-1" />
          <span className="text-lg font-semibold">Help Desk</span>
        </div>
      </nav>

      <div
        role="tablist"
        className="tabs tabs-bordered w-full p-4 mt-6 bg-white rounded-lg shadow-md"
      >
        {/* New Help Tab */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className={`tab ${activeTab === "New Help" ? "bg-green-700 text-white rounded-lg" : ""}`}
          aria-label="New Help"
          defaultChecked
          onClick={() => setActiveTab("New Help")}
        />

        <div role="tabpanel" className="tab-content p-2 mt-2 ">
          {/* Modules, Menu, Sub-Menu, Upload Document */}
          <div className="flex flex-wrap gap-4 mb-4">
            {/* Module */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0">
              <h3 className="text-start font-semibold mb-2">Module</h3>
              <select className="w-full border rounded-lg p-2">
                <option value="">Select Module</option>
              </select>
            </div>
            {/* Menu */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0">
              <h3 className="text-start font-semibold mb-2">Menu</h3>
              <select className="w-full border rounded-lg p-2">
                <option value="">Select Menu</option>
              </select>
            </div>
            {/* Sub-Menu */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 sm:mb-0">
              <h3 className="text-start font-semibold mb-2">Sub-Menu</h3>
              <select className="w-full border rounded-lg p-2">
                <option value="">Select Sub Menu</option>
              </select>
            </div>
            {/* Upload Document */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
              <h3 className="text-start font-semibold mb-2">Upload Document</h3>
              <div className="flex justify-between border rounded-lg p-2">
                <label className="cursor-pointer">
                  Choose File
                  <input type="file" className="hidden" />
                </label>
                <span>No file chosen</span>
              </div>
            </div>
          </div>

          {/* Checkboxes and Priority */}
          <div className="flex items-center mb-6 mt-8 gap-2">
  {/* Is Report Checkbox */}
  <div className="w-full md:w-1/2 lg:w-1/5 mr-2 border rounded-lg p-2 flex items-start">
    <label className="block">
      <input type="checkbox" className="mr-2" />
      Is Report
    </label>
  </div>
  {/* Is Process Checkbox */}
  <div className="w-full md:w-1/2 lg:w-1/5 mr-2 border rounded-lg p-2 flex items-start">
    <label className="block">
      <input type="checkbox" className="mr-2" />
      Is Process
    </label>
  </div>
  {/* Priority Dropdown */}
  <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:mb-0">
    <h3 className="text-start font-semibold -mt-6">Priority</h3>
    <select className="w-full border rounded-lg p-2">
      <option value="">Normal</option>
      {/* <option value="low">Low</option> */}
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
</div>


          {/* Description */}
          <div className="mb-2">
            <h3 className="text-start font-semibold mb-2">Description</h3>
            <textarea
              className="w-full border rounded-lg p-2"
              rows="6"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="bg-green-800 text-white rounded-lg py-2 px-4 float-right">
            Submit
          </button>
        </div>

        {/* History Tab */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className={`tab ${activeTab === "History" ? "bg-green-700 text-white rounded-lg" : ""}`}
          aria-label="History"
          onClick={() => setActiveTab("History")}
        />
        <div role="tabpanel" className="tab-content p-10">
          <h2 className="text-lg font-bold mb-4">History</h2>
          <p>History tab content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
