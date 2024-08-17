import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import ReservationForm from "./ReservationForm";
import ResuableReservationModel from "./ResuableReservationModel";

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   if (isMenuOpen) {
  //     document.addEventListener("mousedown", handleOutSideClick);
  //   } else {
  //     document.removeEventListener("mousedown", handleOutSideClick);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("mousedown", handleOutSideClick);
  //   };
  // }, [isMenuOpen]);

  return (
    <div className="overflow-x-hidden">
      <nav className="bg-black  text-[#CCCCCC]  fixed top-0 left-0 right-0  px-10  lg:px-[5%] xl:px-[12.5%] py-1 fade-in z-[999]">
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
                          to="/header-static"
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
                      <li className="flex px-4 py-2 hover:text-white border-b border-[#111111]">
                        <a href="/pages/menu">Menu</a>
                      </li>
                      <li className="block px-4 py-2  hover:text-white border-b border-[#111111]">
                        <a href="/pages/gallery">Gallery</a>
                      </li>
                      <li className="block px-4 py-2  hover:text-white border-b border-[#111111]">
                        <a href="/pages/about">About</a>
                      </li>
                      <li className="block px-4 py-2  hover:text-white">
                        <a href="/pages/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  <a href="/#menu">Menu</a>
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
                        <li className="block px-4 py-2 cursor-pointer  hover:text-white">
                          <a href="/components/alert">Alerts</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/background">Background</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/badges">Badges</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/breadcrumb">Breadcrumb</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/buttons">Buttons</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/cards" className="capitalize">
                            cards
                          </a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/carousel" className="capitalize">
                            carousel
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col min-w-fit">
                      <ul>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/collapse" className="capitalize">
                            collapse
                          </a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/dropdown" className="capitalize">
                            dropdown
                          </a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a
                            href="/components/fancyscroll"
                            className="capitalize"
                          >
                            fancyscroll
                          </a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/forms" className="capitalize">
                            forms
                          </a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/hoverbox" className="capitalize">
                            hoverbox
                          </a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a
                            href="/components/listgroup"
                            className="capitalize"
                          >
                            List Group
                          </a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/modals" className="capitalize">
                            modals
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className=" min-w-fit flex flex-col">
                      <ul>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/mediaobject">Media object</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/navs">navs</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/navbar">navbar</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/pageheader">page header</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/pagination">pagination</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/popovers">popovers</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/progress">progress</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col min-w-fit">
                      <ul>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/scrollspy">scrollspy</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/spinners">spinners</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/tables">tables</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/tabs">tabs</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/tooltips">tooltips</a>
                        </li>
                        <li className="block px-4 py-2  hover:text-white">
                          <a href="/components/toasts">toasts</a>
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
                          to="/utilities/borders"
                          className="flex px-4 py-2 hover:text-white border-b border-[#111111]"
                        >
                          Borders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/clearfix"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Clearfix
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/closeicon"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Close icon
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/colors"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Colors
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/display"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Display
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/embed"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Embed
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/flex"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Flex
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/figures"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Figures
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/grid"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/sizing"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Sizing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/stretchedlink"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          stretched link
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/spacing"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Spacing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/typography"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Typography
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/verticalalign"
                          className="block px-4 py-2  hover:text-white  border-b border-[#111111]"
                        >
                          Vertical align
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/utilities/visibility"
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
                          to="/plugins/fancytab"
                          className="flex px-4 py-2 hover:text-white border-b border-[#111111]"
                        >
                          Fancytab
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/plugins/flexslider"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Flexslider
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/plugins/owlcarousel"
                          className="block px-4 py-2  hover:text-white border-b border-[#111111]"
                        >
                          Owl Carousel
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/plugins/fancybox"
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
            <button
              className="outline-none px-[1rem] py-[0.3125rem] font-bold"
              onClick={handleShow}
            >
              <span className="hidden xl:inline">MAKE A</span> RESERVATION
            </button>
            <ResuableReservationModel show={show} onHide={handleClose} />
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
