import { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  // State to manage open dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Refs for dropdowns
  const dropdownRefs = {
    home: useRef(null),
    pages: useRef(null),
    components: useRef(null),
    utilities: useRef(null),
    plugins: useRef(null),
  };

  // Handle hover enter
  const handleDropdownEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  // Handle hover leave
  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  // Handle clicks outside the dropdowns
  const handleClickOutside = (event) => {
    Object.values(dropdownRefs).forEach((ref) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    });
  };
  const handleOutSideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutSideClick);
    } else {
      document.removeEventListener("mousedown", handleOutSideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="overflow-x-hidden">
      <nav className="bg-black  text-[#CCCCCC]  fixed top-0 left-0 right-0  px-10  lg:px-[5%] xl:px-[12.5%] py-1 fade-in z-[9999]">
        <div className="  flex flex-nowrap justify-between items-center gap-10   py-[8px] md:px-[5px] sm:px-[0]">
          <div className="  h-9 w-[137px]">
            <img src="/logo.png" alt="logo" className="h-full w-full" />
          </div>
          <div className="flex ">
            <ul className="hidden lg:flex items-center justify-between space-x-5 xl:space-x-10  text-[#CCCCCC] ">
              <li
                className="relative"
                ref={dropdownRefs.home}
                onMouseEnter={() => handleDropdownEnter("home")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  Home
                  <span>
                    <BiSolidDownArrow size={"12px"} />
                  </span>
                </div>
                {openDropdown === "home" && (
                  <div className="absolute left-0 mt-0 w-[200px] bg-black text-[#5e6e82] rounded-[5px] shadow-lg z-10 py-3 pt-6">
                    <ul>
                      <li>
                        <Link
                          to="#header-static"
                          className="flex px-4 py-2 hover:text-white border-b border-[#111111]"
                        >
                          Header Static
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/header-slider"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Header Slider
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/youtube-background"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Youtube Background
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/self-hosted-video"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Self Hosted Video
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rtl"
                          className="block px-4 py-2  hover:text-white "
                        >
                          RTL
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="relative"
                ref={dropdownRefs.pages}
                onMouseEnter={() => handleDropdownEnter("pages")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  Pages
                  <span>
                    <BiSolidDownArrow size={"12px"} />
                  </span>
                </div>
                {openDropdown === "pages" && (
                  <div className="absolute left-0 mt-0 w-[150px] bg-black text-[#5e6e82] rounded-[5px] shadow-lg z-10 py-3 pt-6">
                    <ul>
                      <li>
                        <Link
                          to="/menu"
                          className="flex px-4 py-2 hover:text-white border-b border-[#111111]"
                        >
                          Menu
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallery"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  <a href="#menu">Menu</a>
                </div>
              </li>
              <li
                className="relative"
                ref={dropdownRefs.components}
                onMouseEnter={() => handleDropdownEnter("components")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  <span>Components</span>

                  <BiSolidDownArrow size={"12px"} />
                </div>
                {openDropdown === "components" && (
                  <div className="absolute left-0 mt-0 max-w-[900px] bg-black text-[#5e6e82] rounded-[5px] shadow-lg z-10 px-3 py-3 pt-6 flex justify-center items-start gap-3">
                    <div className="min-w-fit flex flex-col">
                      <ul>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Alerts
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Background
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Badges
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Breadcrumb
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Buttons
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Cards
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Carousel
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col min-w-fit">
                      <ul>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Collapse
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Dropdowns
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Fancyscroll
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Forms
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Hoverbox
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          List group
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Modals
                        </li>
                      </ul>
                    </div>

                    <div className=" min-w-fit flex flex-col">
                      <ul>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Media object
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Navs
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Navbar
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Page headers
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Pagination
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Popovers
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Progress
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col min-w-fit">
                      <ul>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Scrollspy
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Spinners
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Tables
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Tabs
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Tooltips
                        </li>
                        <li
                          href="#"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Toasts
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li
                className="relative"
                ref={dropdownRefs.utilities}
                onMouseEnter={() => handleDropdownEnter("utilities")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  Utilities
                  <span>
                    <BiSolidDownArrow size={"12px"} />
                  </span>
                </div>
                {openDropdown === "utilities" && (
                  <div className="absolute left-0 mt-0 w-[200px] bg-black text-[#5e6e82] rounded-[5px] shadow-lg z-10 py-3 pt-6">
                    <ul>
                      <li>
                        <Link
                          to="/menu"
                          className="flex px-4 py-2 hover:text-white border-b border-[#111111]"
                        >
                          Borders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallery"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Clearfix
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Close icon
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Colors
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Display
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Embed
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Flex
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Figures
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Sizing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          stretched link
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Spacing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Typography
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Vertical align
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Visibility
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="relative"
                ref={dropdownRefs.plugins}
                onMouseEnter={() => handleDropdownEnter("plugins")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  Plugins
                  <span>
                    <BiSolidDownArrow size={"12px"} />
                  </span>
                </div>
                {openDropdown === "plugins" && (
                  <div className="absolute left-0 mt-0 w-[150px] bg-black text-[#5e6e82] rounded-[5px] shadow-lg z-10 py-3 pt-6">
                    <ul>
                      <li>
                        <Link
                          to="/fancytab"
                          className="flex px-4 py-2 hover:text-white border-b border-[#111111]"
                        >
                          Fancytab
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/flexslider"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Flexslider
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/owl-carousel"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Owl Carousel
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/fancybox"
                          className="block px-4 py-2  hover:text-white"
                        >
                          Fancybox
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="border-2 border-[#ffc554] min-w-[20%] hidden lg:flex justify-center items-center rounded-[.375rem] text-[#ffc554] hover:text-[#4D5969] hover:bg-[#ffc554] cursor-pointer transition duration-300 ease-linear z-20">
            <button className="outline-none px-[1rem] py-[0.3125rem] font-bold">
              <span className="hidden xl:inline">MAKE A</span> RESERVATION
            </button>
          </div>
          <div className="flex lg:hidden mobile-div">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-[#cccccc] border border-[#111111] focus:border-[#CCCCCC] px-3 py-1 rounded-md  "
            >
              <div
                style={{
                  transition: "transform .3s ease-in-out",
                  transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {isMenuOpen ? (
                  <IoClose size={24} />
                ) : (
                  <RxHamburgerMenu size={24} />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div
        ref={sidebarRef}
        className={`  lg:hidden z-[33] fixed top-[56px] left-0 right-0  bg-black  text-[#CCCCCC] flex justify-between items-center px-10  lg:px-[5%] xl:px-[12.5%] py-1   transition-transform duration-[300ms] linear ${
          isMenuOpen
            ? "transform translate-y-0"
            : "transform translate-y-[-1000px]"
        }`}
      >
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
