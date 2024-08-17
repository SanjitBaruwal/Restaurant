import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { useState } from "react";

const ResuableNavbar = ({ bg }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div
      className={`bg-${bg} xs:${
        click ? `min-h-[212px]` : `h-[60px]`
      } lg:h-[60px] w-full rounded-sm flex flex-col  overflow-hidden   transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-start text-white justify-between">
        <div className="flex items-center gap-3 pl-3">
          <div className="text-5xl h-[60px] flex items-center">falcon</div>
          <nav className="flex items-center space-x-5 ">
            <ul className="xs:hidden lg:flex items-center  h-[60px]  space-x-5 text-yellow-50  cursor-pointer">
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-basic"
                      className="text-white focus:outline-none"
                    >
                      Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <NavDropdown.Divider />
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center h-[60px]  gap-2 pr-3">
          <div className="xs:hidden lg:flex  gap-2">
            <input
              type="text"
              id="search"
              placeholder="Search"
              className=" h-[30px] rounded overflow-hidden px-3 focus:outline-none focus:border-none text-darkdark "
            />
            <label htmlFor="search">
              <button className="h-[30px] px-3 py-1 font-medium rounded bg-[#DCE2F3] text-darksecondary">
                Search
              </button>
            </label>
          </div>
          <div className="lg:hidden cursor-pointer" onClick={handleClick}>
            {!click ? <RxHamburgerMenu /> : <IoIosClose size="28px" />}
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden xs:flex flex-col gap-3 px-3   ${
          click ? `h-[210px] py-2` : `h-[0px]`
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start justify-center gap-3 text-white">
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a>
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="text-white p-0 outline-none  border-none focus:outline-none "
                >
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <NavDropdown.Divider />
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </a>
          </li>
        </ul>
        <div className="flex gap-2">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className=" h-[30px] rounded-sm overflow-hidden px-3 focus:outline-none focus:border-none text-darkdark "
          />
          <label htmlFor="search">
            <button className="h-[30px] px-3 py-1 font-medium rounded-sm bg-[#DCE2F3] text-darksecondary">
              Search
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ResuableNavbar;
