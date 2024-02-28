import React from "react";

const Header = () => {
  return (
    <>
      <header className="p-2 mb-3 border-bottom bg-success text-white">
        <div className="container text-w">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none"
            >
              <span className="fs-4 text-white">Blog App</span>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-5">
              <li>
                <a href="/" className="nav-link px-2 link-light">
                  Overview
                </a>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Inventory
                </a>
              </li>
            </ul>

            <div className=" text-end">
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
