import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-300 body-font bg-green-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="mx-auto h-18   w-auto"
              src="https://img.icons8.com/pastel-glyph/64/000000/blockchain-transactions--v4.png"
              alt="Workflow"
            />
            <span className="ml-3 text-2xl text-gray-100">Stream Page</span>
            <br></br>
            <span>&nbsp;|&nbsp;CreateStream</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;