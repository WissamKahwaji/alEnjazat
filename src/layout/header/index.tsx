import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: `/about-us` },
    { title: "Properties", path: `/properties` },
    { title: "Contact Us", path: `/contacts` },
  ];

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <header className="fixed left-0 top-0 z-[1001] w-full bg-hoverColor border-b border-border shadow-sm">
      <nav className="flex flex-row md:items-center justify-around md:px-32 px-5 w-full py-2">
        <div className="flex items-center justify-between w-full lg:w-auto md:w-auto lg:justify-start gap-x-8 md:space-x-0 md:justify-center">
          <div className="text-2xl md:text-4xl font-bold text-primary">
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="h-auto w-16 sm:h-auto sm:w-24 md:h-auto md:w-24 lg:h-auto lg:w-20 object-cover"
              />
              {/* <p className="h-auto w-16 sm:h-auto sm:w-24 md:h-auto md:w-24 lg:h-auto lg:w-20 object-cover">
                Logo
              </p> */}
            </Link>
          </div>
        </div>
        <div className="hidden text-white font-semibold md:flex md:flex-row md:space-x-10 justify-between items-center  font-header capitalize">
          {navItems.map((item, index) => (
            <Link
              className={`hover:text-subTitle ${
                item.path === currentPath ? "text-gray-50" : "text-primary"
              }`}
              key={index}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleDrawer}
          className="md:hidden  text-secondary hover:text-white transition duration-300 text-2xl focus:outline-none"
        >
          <AiOutlineMenu />
        </button>
        {showDrawer && (
          <div className="md:hidden fixed inset-0 bg-transparent bg-opacity-90 flex flex-row w-full backdrop-filter backdrop-blur-sm">
            <div className=" bg-hoverColor bg-opacity-80 z-[1002] transition  duration-300 transform translate-x-0 w-[75%]">
              <div className="flex flex-col items-start mx-2 space-y-4 py-8">
                <img
                  src={logo}
                  alt=""
                  className="h-auto w-16 sm:h-auto sm:w-24 md:h-auto md:w-24 lg:h-auto lg:w-20 object-cover mb-4"
                />
                {/* <p className="h-auto w-16 sm:h-auto sm:w-24 md:h-auto md:w-24 lg:h-auto lg:w-20 object-cover mb-4">
                  Logo
                </p> */}
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="text-white hover:text-hoverColor transition duration-300 text-lg border-b-2 w-full border-b-secondary/20"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="h-[60px] w-[15%] bg-transparent flex justify-center items-center mx-3 mt-3">
              <button
                onClick={toggleDrawer}
                className="text-gray-50 text-lg focus:outline-none"
              >
                <AiOutlineCloseSquare className="text-6xl " />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;