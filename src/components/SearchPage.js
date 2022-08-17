import React, { useState } from "react";
import TableCreateStream from "./TableCreateStream";
import { loadCurrentData } from "../utils/interact";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [sIndexParam, setIndexParam] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchBy = (event) => setSearchBy(event.target.value);
  const handleIndexParam = (event) => setIndexParam(event.target.value);
  const handleStartDate = (event) => setStartDate(event.target.value);
  const handleEndDate = (event) => setEndDate(event.target.value);

  const getDataFor = (event) => {
    event.preventDefault();
    if (startDate === "" || endDate === "") {
      setErrorMessage("Please select start and end date");
    } else {
      loadCurrentData(searchBy, sIndexParam, startDate, endDate).then((value) =>
        setData(value)
      );
      setErrorMessage("");
    }
  };

  return (
    <div>
      {/* Input Area */}
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}
      <form>
        <div className="flex">
          <select
            id="small"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200 focus:ring-0 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            defaultValue={"DEFAULT"}
            onChange={handleSearchBy}
          >
            <option value="DEFAULT" disabled>
              Search By{" "}
            </option>
            <option value={"streamId"}>Stream Id</option>
            <option value={"sender"}>Sender</option>
            <option value={"recipient"}>Recipient</option>
          </select>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 focus:outline-0 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-500 focus:border-green-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-green-500"
              placeholder="Search Stream Id,Sender,Recipient..."
              required=""
              onChange={handleIndexParam}
              value={sIndexParam}
            />

            <button
              type="button"
              onClick={getDataFor}
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-green-500 rounded-r-lg border  border-green-700 hover:bg-green-100 focus:ring-0 focus:outline-none focus:ring-green-100 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
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
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

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
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
            required
          />
        </div>
      </div>
      {/* Table */}
      <TableCreateStream data={data} />
    </div>
  );
};

export default SearchPage;
