import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import { RxHamburgerMenu } from "react-icons/rx";

import { IoIosClose } from "react-icons/io";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import ResuableNavbar from "../../../components/ResuableNavbar";
const Navbars = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const navbarLight = `<nav class="navbar navbar-expand-lg navbar-dark fs--1 bg-dark"><a class="navbar-brand" href="#">falcon</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContentdark" aria-controls="navbarContentdark" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarContentdark">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
      <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbarDropdowndark">Dropdown</a>
        <div class="dropdown-menu dropdown-menu-right py-0" aria-labelledby="navbarDropdowndark">
          <div class="bg-white rounded-soft py-2"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0"><input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" /><button class="btn btn-sm btn-light my-2 my-sm-0" type="submit">Search</button></form>
  </div>
</nav>`;

  const navbarPrimary = `<nav class="navbar navbar-expand-lg navbar-dark fs--1 bg-primary"><a class="navbar-brand" href="#">falcon</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContentprimary" aria-controls="navbarContentprimary" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarContentprimary">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
      <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbarDropdownprimary">Dropdown</a>
        <div class="dropdown-menu dropdown-menu-right py-0" aria-labelledby="navbarDropdownprimary">
          <div class="bg-white rounded-soft py-2"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0"><input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" /><button class="btn btn-sm btn-light my-2 my-sm-0" type="submit">Search</button></form>
  </div>
</nav>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Navbar"
              desc="Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for Bootstrap collapse plugin."
              goto="NAVBAR  ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/navbar/"
            />
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Navbar Light
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ResuableNavbar bg="darkdark" />
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {navbarLight}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Navbar Primary
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ResuableNavbar bg="darkprimary" />

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {navbarPrimary}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
