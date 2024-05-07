import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white rounded-xl shadow-md p-2 flex justify-between items-center">
        <div className="flex items-center text-green-600">
          <AiOutlineQuestionCircle className="text-lg m-1" />
          <span className="text-lg font-bold">Help Desk</span>
        </div>
      </nav>

      {/* Tabs */}
      <div
        role="tablist"
        className="tabs tabs-bordered w-full p-4 mt-6 bg-white rounded-lg shadow-md"
      >
        {/* New Help Tab */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="New Help"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          {/* Modules and Menu */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
              <h3 className="text-start font-semibold mb-2">Module</h3>
              <select className="w-full border rounded-lg p-2">
                <option value="">Select Module</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
              <h3 className="text-start font-semibold mb-2">Menu</h3>
              <select className="w-full border rounded-lg p-2">
                <option value="">Select Menu</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
              <h3 className="text-start font-semibold mb-2">Sub-Menu</h3>
              <select className="w-full border rounded-lg p-2">
                <option value="">Select Sub Menu</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
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
          <div className="flex items-center mb-6 mt-8">
            <div className="w-full md:w-1/2 lg:w-1/4 mr-2 border rounded-lg p-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Is Report
              </label>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mr-2 border rounded-lg p-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Is Process
              </label>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 border rounded-lg p-2">
              <h3 className="text-start font-semibold mb-2">Priority</h3>
              <select className="w-full p-2">
                <option value="">Normal</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="mb-2">
            <h3 className="text-start font-semibold mb-2">Description</h3>
            <textarea className="w-full border rounded-lg p-2" rows="6"></textarea>
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
          className="tab"
          aria-label="History"
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
