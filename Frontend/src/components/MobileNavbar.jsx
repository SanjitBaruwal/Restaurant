import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import ResuableReservationModel from "./ResuableReservationModel";

const MobileNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openSections, setOpenSections] = useState({
    home: false,
    pages: false,
    components: false,
    utilities: false,
    plugins: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key, value]) => [
          key,
          key === section ? !value : false,
        ])
      ),
    }));
  };

  return (
    <div className=" w-full  flex flex-col items-start gap-5 pb-4 ">
      <nav className="w-full ">
        <ul className=" w-full flex flex-col items-start  gap-5 text-[#CCCCCC]  z-[21]">
          <NavItem
            title="Home"
            isOpen={openSections.home}
            onClick={() => toggleSection("home")}
          >
            <DropdownMenu isOpen={openSections.home}>
              <NavLink to="/header-static">Header Static</NavLink>
              <NavLink to="/header-slider">Header Slider</NavLink>
              <NavLink to="/youtube-background">Youtube Background</NavLink>
              <NavLink to="/self-hosted-video">Self Hosted Video</NavLink>
              <NavLink to="/rtl">RTL</NavLink>
            </DropdownMenu>
          </NavItem>
          <NavItem
            title="Pages"
            isOpen={openSections.pages}
            onClick={() => toggleSection("pages")}
          >
            <DropdownMenu isOpen={openSections.pages}>
              <NavLink to="/pages/menu">Menu</NavLink>
              <NavLink to="/pages/gallery">Gallery</NavLink>
              <NavLink to="/pages/about">About</NavLink>
              <NavLink to="/pages/contact">Contact</NavLink>
            </DropdownMenu>
          </NavItem>
          <NavItem title="Menu" />
          <NavItem
            title="Components"
            isOpen={openSections.components}
            onClick={() => toggleSection("components")}
          >
            <DropdownMenu isOpen={openSections.components}>
              <div className="  max-h-[400px]  overflow-y-scroll  grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-4">
                <NavLinkComponent to="/components/alert">
                  Alerts
                </NavLinkComponent>
                <NavLinkComponent to="/components/background">
                  Background
                </NavLinkComponent>
                <NavLinkComponent to="/components/badges">
                  Badges
                </NavLinkComponent>
                <NavLinkComponent to="/components/breadcrumb">
                  Breadcrumb
                </NavLinkComponent>
                <NavLinkComponent to="/components/buttons">
                  Buttons
                </NavLinkComponent>
                <NavLinkComponent to="/components/cards">
                  Cards
                </NavLinkComponent>
                <NavLinkComponent to="/components/carousel">
                  Carousel
                </NavLinkComponent>
                <NavLinkComponent to="/components/mediaobject">
                  Media object
                </NavLinkComponent>
                <NavLinkComponent to="components//navs">Navs</NavLinkComponent>
                <NavLinkComponent to="/components/navbar">
                  Navbar
                </NavLinkComponent>
                <NavLinkComponent to="/components/pageheader">
                  Page headers
                </NavLinkComponent>
                <NavLinkComponent to="/components/pagination">
                  Pagination
                </NavLinkComponent>
                <NavLinkComponent to="/components/popovers">
                  Popovers
                </NavLinkComponent>
                <NavLinkComponent to="/components/progress">
                  Progress
                </NavLinkComponent>
                <NavLinkComponent to="/components/collapse">
                  Collapse
                </NavLinkComponent>
                <NavLinkComponent to="/components/dropdown">
                  Dropdowns
                </NavLinkComponent>
                <NavLinkComponent to="/components/fancyscroll">
                  Fancyscroll
                </NavLinkComponent>
                <NavLinkComponent to="/components/forms">
                  Forms
                </NavLinkComponent>
                <NavLinkComponent to="/components/hoverbox">
                  Hoverbox
                </NavLinkComponent>
                <NavLinkComponent to="/components/listgroup">
                  List group
                </NavLinkComponent>
                <NavLinkComponent to="/components/modals">
                  Modals
                </NavLinkComponent>
                <NavLinkComponent to="/components/scrollspy">
                  Scrollspy
                </NavLinkComponent>
                <NavLinkComponent to="/components/spinners">
                  Spinners
                </NavLinkComponent>
                <NavLinkComponent to="/components/tables">
                  Tables
                </NavLinkComponent>
                <NavLinkComponent to="/components/tabs">Tabs</NavLinkComponent>
                <NavLinkComponent to="/components/tooltips">
                  Tooltips
                </NavLinkComponent>
                <NavLinkComponent to="/components/toasts">
                  Toasts
                </NavLinkComponent>
              </div>
            </DropdownMenu>
          </NavItem>
          <NavItem
            title="Utilities"
            isOpen={openSections.utilities}
            onClick={() => toggleSection("utilities")}
          >
            <DropdownMenu isOpen={openSections.utilities}>
              <div className="max-h-[400px]  overflow-y-scroll">
                <NavLink to="/utilities/borders">Borders</NavLink>
                <NavLink to="/utilities/clearfix">Clearfix</NavLink>
                <NavLink to="/utilities/closeIcon">Close icon</NavLink>
                <NavLink to="/utilities/colors">Colors</NavLink>
                <NavLink to="/utilities/display">Display</NavLink>
                <NavLink to="/utilities/embed">Embed</NavLink>
                <NavLink to="/utilities/flex">Flex</NavLink>
                <NavLink to="/utilities/figures">Figures</NavLink>
                <NavLink to="/utilities/grid">Grid</NavLink>
                <NavLink to="/utilities/sizing">Sizing</NavLink>
                <NavLink to="/utilities/stretchedlink">Stretched link</NavLink>
                <NavLink to="/utilities/spacing">Spacing</NavLink>
                <NavLink to="/utilities/typography">Typography</NavLink>
                <NavLink to="/utilities/verticalalign">Vertical align</NavLink>
                <NavLink to="/utilities/visibility">Visibility</NavLink>
              </div>
            </DropdownMenu>
          </NavItem>
          <NavItem
            title="Plugins"
            isOpen={openSections.plugins}
            onClick={() => toggleSection("plugins")}
          >
            <DropdownMenu isOpen={openSections.plugins}>
              <NavLink to="/plugins/fancytab">Fancytab</NavLink>
              <NavLink to="/plugins/flexslider">Flexslider</NavLink>
              <NavLink to="/plugins/owlcarousel">Owl Carousel</NavLink>
              <NavLink to="/plugins/fancybox">Fancybox</NavLink>
            </DropdownMenu>
          </NavItem>
        </ul>
      </nav>
      <div className="border-2 border-[#ffc554] w-1/3  flex justify-center items-center rounded-[.375rem] text-[#ffc554]  hover:text-[#4D5969] hover:bg-[#ffc554] cursor-pointer transition duration-300 ease-linear z-20">
        <button
          className="outline-none px-[1rem] py-[0.3125rem] font-bold"
          onClick={handleShow}
        >
          RESERVATION
        </button>

        <ResuableReservationModel show={show} onHide={handleClose} />
      </div>
    </div>
  );
};

const NavItem = ({ title, isOpen, onClick, children }) => (
  <li className="w-full" onClick={onClick}>
    <div className="w-full  flex justify-start items-center gap-1 cursor-pointer">
      {title}
      <span>{title !== "Menu" && <BiSolidDownArrow size={"12px"} />}</span>
    </div>
    {isOpen && (
      <div className=" mt-2 w-full bg-black text-[#5e6e82] rounded-[5px] shadow-lg">
        {children}
      </div>
    )}
  </li>
);

const DropdownMenu = ({ isOpen, children }) =>
  isOpen && (
    <div className=" mt-2 w-full bg-black text-[#5e6e82] rounded-[5px] shadow-lg">
      {children}
    </div>
  );

const NavLink = ({ to, href, children }) => (
  <Link
    to={to}
    href={href}
    className="block px-4 py-2 hover:text-white border-b border-[#111111]"
  >
    {children}
  </Link>
);
const NavLinkComponent = ({ to, href, children }) => (
  <Link to={to} href={href} className="block px-4 py-2 hover:text-white ">
    {children}
  </Link>
);

export default MobileNavbar;
