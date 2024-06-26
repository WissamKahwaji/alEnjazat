import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed left-0 top-0 z-[1001] w-full bg-background border-b border-border shadow-sm md:transition-transform md:duration-300 md:ease-in-out ${
        visible ? "md:translate-y-0" : "md:-translate-y-full"
      }`}
    >
      <nav className="md:h-[90px] flex flex-row md:items-center justify-around md:px-32 px-5 w-full py-2">
        <div className=" flex items-center justify-between w-full lg:w-auto md:w-auto lg:justify-start gap-x-8 md:space-x-0 md:justify-center">
          <div className="md:absolute md:-bottom-1/2 text-2xl md:text-4xl font-bold text-hoverColor">
            <Link to="/">
              <img
                src={logo}
                alt=""
                className={`h-auto w-16 sm:h-auto sm:w-24 md:h-auto md:w-32 lg:h-auto lg:w-32 object-cover md:transition-transform md:ease-in-out md:duration-300 ${
                  visible ? "md:translate-y-0" : "md:-translate-y-full"
                }`}
              />
              {/* <p className="h-auto w-16 sm:h-auto sm:w-24 md:h-auto md:w-24 lg:h-auto lg:w-20 object-cover">
                Logo
              </p> */}
            </Link>
          </div>
        </div>
        <div className="hidden text-hoverColor font-semibold md:flex md:flex-row md:space-x-10 justify-between items-center  font-header capitalize">
          {navItems.map((item, index) => (
            <Link
              className={`hover:text-hoverColor ${
                item.path === currentPath ? "text-black" : "text-gray-600"
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
            <div className=" bg-background bg-opacity-80 z-[1002] transition  duration-300 transform translate-x-0 w-[75%]">
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
                    className={`${
                      item.path === currentPath ? "text-black" : "text-gray-600"
                    } hover:text-hoverColor font-header transition duration-300 text-lg border-b-2 w-full border-b-secondary/20`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="h-[60px] w-[15%] bg-transparent flex justify-center items-center mx-3 mt-3">
              <button
                onClick={toggleDrawer}
                className="text-subTitle text-lg focus:outline-none"
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
