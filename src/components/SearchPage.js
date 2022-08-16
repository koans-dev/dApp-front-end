import React, { useState } from "react";
import TableCreateStream from "./TableCreateStream";
import { loadCurrentData } from "../utils/interact";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [sIndexParam, setIndexParam] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleIndexParam = (event) => setIndexParam(event.target.value);
  const handleStartDate = (event) => setStartDate(event.target.value);
  const handleEndDate = (event) => setEndDate(event.target.value);

  const getDataFor = (event) => {
    event.preventDefault();
    const message = loadCurrentData(sIndexParam, startDate, endDate).then(
      (value) => setData(value)
    );
  };

  return (
    <div>
      {" "}
      {/* Input Area */}
      <div>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <div className="grid  grid-cols-1 grid-rows-1">
              <input
                type="search"
                onChange={handleIndexParam}
                id="default-search"
                className=" p-4 pl-10 text-sm text-gray-900  border border-gray-300 focus:ring-green-500 focus:border-green-100 dark:placeholder-green-400 dark:text-green dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search by streamId..."
                required
                value={sIndexParam}
              />
            </div>
            <button
              type="button"
              onClick={getDataFor}
              className="text-white absolute right-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* date picker */}
      <div className="flex items-center">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            name="start"
            type="date"
            onChange={handleStartDate}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span className="mx-4 text-gray-500">to</span>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            name="end"
            type="date"
            onChange={handleEndDate}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
          />
        </div>
      </div>
      {/* Table */}
      <TableCreateStream data={data} />
    </div>
  );
};

export default SearchPage;
