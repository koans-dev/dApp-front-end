import React from "react";

const TableCreateStream = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        <table className="table-auto w-full text-sm text-left text-gray-300 dark:text-gray-400">
          <thead className="text-xs text-gray-700  bg-gray-100 dark:bg-gray-600 dark:text-gray-300">
            <tr>
              <th scope="col" className="py-3 px-6">
                Stream Id
              </th>
              <th scope="col" className="py-3 px-6">
                Sender
              </th>
              <th scope="col" className="py-3 px-6">
                Recipient
              </th>

              <th scope="col" className="py-3 px-6">
                Deposit
              </th>
              <th scope="col" className="py-3 px-6">
                Token Address
              </th>
            </tr>
            {data.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-700 dark:border-gray-700"
              >
                <td className="py-2 px-5 dark:text-white">
                  {item.returnValues.streamId}
                </td>
                <td className="py-2 px-5 dark:text-white">
                  {item.returnValues.sender.toLowerCase()}
                </td>

                <td className="py-2 px-5 dark:text-white">
                  {item.returnValues.recipient.toLowerCase()}
                </td>

                <td className="py-2 px-5 dark:text-white">
                  {item.returnValues.deposit}
                </td>
                <td className="py-2 px-5 dark:text-white">
                  {item.returnValues.tokenAddress}
                </td>
              </tr>
            ))}
          </thead>
        </table>
      ) : (
        
        <div className="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
          <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">No Record Found!</span> Change a few things up and try submitting again.
          </div>
        </div>

      )}
    </div>
  );
};

export default TableCreateStream;
