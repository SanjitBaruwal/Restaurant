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
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
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
                <NavLinkComponent to="/alerts">Alerts</NavLinkComponent>
                <NavLinkComponent to="/background">Background</NavLinkComponent>
                <NavLinkComponent to="/badges">Badges</NavLinkComponent>
                <NavLinkComponent to="/breadcrumb">Breadcrumb</NavLinkComponent>
                <NavLinkComponent to="/buttons">Buttons</NavLinkComponent>
                <NavLinkComponent to="/cards">Cards</NavLinkComponent>
                <NavLinkComponent to="/carousel">Carousel</NavLinkComponent>
                <NavLinkComponent to="/media-object">
                  Media object
                </NavLinkComponent>
                <NavLinkComponent to="/navs">Navs</NavLinkComponent>
                <NavLinkComponent to="/navbar">Navbar</NavLinkComponent>
                <NavLinkComponent to="/page-header">
                  Page headers
                </NavLinkComponent>
                <NavLinkComponent to="/pagination">Pagination</NavLinkComponent>
                <NavLinkComponent to="/popovers">Popovers</NavLinkComponent>
                <NavLinkComponent to="/progress">Progress</NavLinkComponent>
                <NavLinkComponent to="/collapse">Collapse</NavLinkComponent>
                <NavLinkComponent to="/dropdowns">Dropdowns</NavLinkComponent>
                <NavLinkComponent to="/fancyscroll">
                  Fancyscroll
                </NavLinkComponent>
                <NavLinkComponent to="/forms">Forms</NavLinkComponent>
                <NavLinkComponent to="/hoverbox">Hoverbox</NavLinkComponent>
                <NavLinkComponent to="/list-group">List group</NavLinkComponent>
                <NavLinkComponent to="/modals">Modals</NavLinkComponent>
                <NavLinkComponent to="/scrollspy">Scrollspy</NavLinkComponent>
                <NavLinkComponent to="/spinners">Spinners</NavLinkComponent>
                <NavLinkComponent to="/tables">Tables</NavLinkComponent>
                <NavLinkComponent to="/tabs">Tabs</NavLinkComponent>
                <NavLinkComponent to="/tooltips">Tooltips</NavLinkComponent>
                <NavLinkComponent to="/toasts">Toasts</NavLinkComponent>
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
                <NavLink to="/borders">Borders</NavLink>
                <NavLink to="/clearfix">Clearfix</NavLink>
                <NavLink to="/close icon">Close icon</NavLink>
                <NavLink to="/colors">Colors</NavLink>
                <NavLink to="/display">Display</NavLink>
                <NavLink to="/embed">Embed</NavLink>
                <NavLink to="/flex">Flex</NavLink>
                <NavLink to="/figures">Figures</NavLink>
                <NavLink to="/grid">Grid</NavLink>
                <NavLink to="/sizing">Sizing</NavLink>
                <NavLink to="stretched-link">Stretched link</NavLink>
                <NavLink to="spacing">Spacing</NavLink>
                <NavLink to="/typography">Typography</NavLink>
                <NavLink to="/vertical-align">Vertical align</NavLink>
                <NavLink to="/visibility">Visibility</NavLink>
              </div>
            </DropdownMenu>
          </NavItem>
          <NavItem
            title="Plugins"
            isOpen={openSections.plugins}
            onClick={() => toggleSection("plugins")}
          >
            <DropdownMenu isOpen={openSections.plugins}>
              <NavLink to="/fancytab">Fancytab</NavLink>
              <NavLink to="/flexslider">Flexslider</NavLink>
              <NavLink to="/owl-carousel">Owl Carousel</NavLink>
              <NavLink to="/fancybox">Fancybox</NavLink>
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
