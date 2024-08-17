import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import ResuableHeader from "../../../components/ResuableHeader";
import { BiPlus } from "react-icons/bi";
import { MdDelete, MdExpandMore } from "react-icons/md";
import { FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { useState } from "react";

const Buttons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const [openIndex, setOpenIndex] = useState(null); // State to track open dropdown

  const handleDropdownClick = (index) => {
    // Toggle the dropdown - if the clicked dropdown is already open, close it; otherwise, open it
    setOpenIndex(openIndex === index ? null : index);
  };

  const example = `<button class="btn btn-primary mr-1 mb-1" type="button">Primary</button>
<button class="btn btn-secondary mr-1 mb-1" type="button">Secondary</button>
<button class="btn btn-success mr-1 mb-1" type="button">Success</button>
<button class="btn btn-info mr-1 mb-1" type="button">Info</button>
<button class="btn btn-warning mr-1 mb-1" type="button">Warning</button>
<button class="btn btn-danger mr-1 mb-1" type="button">Danger</button>
<button class="btn btn-light mr-1 mb-1" type="button">Light</button>
<button class="btn btn-dark mr-1 mb-1" type="button">Dark</button>

`;

  const outline = `<button class="btn btn-outline-primary mr-1 mb-1" type="button">Primary</button>
<button class="btn btn-outline-secondary mr-1 mb-1" type="button">Secondary</button>
<button class="btn btn-outline-success mr-1 mb-1" type="button">Success</button>
<button class="btn btn-outline-info mr-1 mb-1" type="button">Info</button>
<button class="btn btn-outline-warning mr-1 mb-1" type="button">Warning</button>
<button class="btn btn-outline-danger mr-1 mb-1" type="button">Danger</button>
<button class="btn btn-outline-light mr-1 mb-1" type="button">Light</button>
<button class="btn btn-outline-dark mr-1 mb-1" type="button">Dark</button>

`;

  const buttonSizes = `<div class="btn btn-secondary btn-sm">Small</div>
<div class="btn btn-secondary">Regular</div>
<div class="btn btn-secondary btn-lg">Large</div>

`;

  const iconButtons = `<button class="btn btn-primary btn-sm mr-1 mb-1" type="button">
  <span class="fas fa-plus mr-1" data-fa-transform="shrink-3"></span>Small
</button>
<button class="btn btn-primary mr-1 mb-1" type="button">
  <span class="fas fa-plus mr-1" data-fa-transform="shrink-3"></span>Regular
</button>
<button class="btn btn-primary btn-lg mr-1 mb-1" type="button">
  <span class="fas fa-plus mr-1" data-fa-transform="shrink-3"></span>Large
</button>
<hr />
<button class="btn btn-primary mr-1 mb-1" type="button">
  <span class="fas fa-plus mr-1" data-fa-transform="shrink-3"></span>Regular
</button>
<button class="btn btn-outline-primary mr-1 mb-1" type="button">
  <span class="fas fa-plus mr-1" data-fa-transform="shrink-3"></span>Outline
</button>
<hr />
<button class="btn btn-primary mr-1 mb-1" type="button">
  Delete<span class="fas fa-trash ml-1" data-fa-transform="shrink-3"></span>
</button>

`;

  const buttonCapsule = `<button class="btn btn-primary rounded-capsule mr-1 mb-1" type="button">Example
</button><button class="btn btn-primary rounded-capsule mr-1 mb-1" type="button">
  <span class="fas fa-align-left mr-1" data-fa-transform="shrink-3"></span>Icon Left</button>
<button class="btn btn-primary rounded-capsule mr-1 mb-1" type="button">
  Icon Right<span class="fas fa-align-right ml-1" data-fa-transform="shrink-3"></span>
</button><button class="ml-1 btn btn-outline-primary rounded-capsule mr-1 mb-1" type="button">Outline</button>
<hr />
<button class="btn btn-sm btn-primary rounded-capsule mr-1 mb-1" type="button">Capsule Small</button>
<button class="btn btn-primary rounded-capsule mr-1 mb-1" type="button">Capsule Regular</button>
<button class="btn btn-lg btn-primary rounded-capsule mr-1 mb-1" type="button">Capsule Large</button>

`;

  const basicExample = `<div class="btn-group" role="group" aria-label="Basic example">
  <button class="btn btn-secondary" type="button">Left</button>
  <button class="btn btn-secondary" type="button">Middle</button>
  <button class="btn btn-secondary" type="button">Right</button>
</div>

`;

  const buttonToolBar = `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2 mb-2" role="group" aria-label="First group">
    <button class="btn btn-secondary" type="button">1</button>
    <button class="btn btn-secondary" type="button">2</button>
    <button class="btn btn-secondary" type="button">3</button>
    <button class="btn btn-secondary" type="button">4</button>
  </div>
  <div class="btn-group mb-2 mr-2" role="group" aria-label="Second group">
    <button class="btn btn-secondary" type="button">5</button>
    <button class="btn btn-secondary" type="button">6</button>
    <button class="btn btn-secondary" type="button">7</button>
  </div>
  <div class="btn-group mb-2" role="group" aria-label="Third group">
    <button class="btn btn-secondary" type="button">8</button>
  </div>
</div>

`;

  const buttonToolBarInput = `<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mb-2 mr-2" role="group" aria-label="First group">
    <button class="btn btn-secondary" type="button">1</button>
    <button class="btn btn-secondary" type="button">2</button>
    <button class="btn btn-secondary" type="button">3</button>
    <button class="btn btn-secondary" type="button">4</button>
  </div>
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon">@</div>
    </div>
    <input class="form-control" type="text" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
  </div>
</div>
<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mb-2" role="group" aria-label="First group">
    <button class="btn btn-secondary" type="button">1</button>
    <button class="btn btn-secondary" type="button">2</button>
    <button class="btn btn-secondary" type="button">3</button>
    <button class="btn btn-secondary" type="button">4</button></div>
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon2">@</div>
    </div>
    <input class="form-control" type="text" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
  </div>
</div>

`;

  const sizing = `<div class="btn-group btn-group-lg" role="group" aria-label="...">
  <button class="btn btn-secondary" type="button">Left</button>
  <button class="btn btn-secondary" type="button">Middle</button>
  <button class="btn btn-secondary" type="button">Right</button>
</div>
<div class="btn-group mt-2" role="group" aria-label="...">
  <button class="btn btn-secondary" type="button">Left</button>
  <button class="btn btn-secondary" type="button">Middle</button>
  <button class="btn btn-secondary" type="button">Right</button>
</div>
<div class="btn-group btn-group-sm mt-2" role="group" aria-label="...">
  <button class="btn btn-secondary" type="button">Left</button>
  <button class="btn btn-secondary" type="button">Middle</button>
  <button class="btn btn-secondary" type="button">Right</button>
</div>`;

  const verticalVariation = `<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button class="btn btn-secondary" type="button">Button</button>
  <button class="btn btn-secondary" type="button">Button</button>
  <button class="btn btn-secondary" type="button">Button</button>
  <button class="btn btn-secondary" type="button">Button</button>
  <button class="btn btn-secondary" type="button">Button</button>
  <button class="btn btn-secondary" type="button">Button</button>
</div>

`;

  const verticalVariationDropDown = `<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button class="btn btn-secondary" type="button">Button</button>
  <button class="btn btn-secondary" type="button">Button</button>
  <div class="btn-group" role="group">
    <button class="btn btn-secondary dropdown-toggle" id="btnGroupVerticalDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
      <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown</a>
    </div>
  </div>
  <button class="btn btn-secondary" type="button">Button</button>
  <button class="btn btn-secondary" type="button">Button</button>
  <div class="btn-group" role="group">
    <button class="btn btn-secondary dropdown-toggle" id="btnGroupVerticalDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2"><a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
  <div class="btn-group" role="group">
    <button class="btn btn-secondary dropdown-toggle" id="btnGroupVerticalDrop3" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3"><a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
  <div class="btn-group" role="group">
    <button class="btn btn-secondary dropdown-toggle" id="btnGroupVerticalDrop4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
      <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
</div>

`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Buttons"
            desc="Use Falcon’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
            goto="BUTTONS ON TAILWIND"
            link="https://www.material-tailwind.com/docs/react/breadcrumbs"
          />
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Examples
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-1 rounded-md font-bold text-primary bg-darkprimary">
                  Primary
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-secondary bg-darksecondary">
                  Secondary
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-success bg-darksuccess">
                  Success
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-info bg-darkinfo">
                  Info
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-warning bg-darkwarning">
                  Warning
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-danger bg-darkdanger">
                  Danger
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-light bg-darklight">
                  Light
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-dark bg-darkdark">
                  Dark
                </button>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {example}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Outline buttons
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-1 rounded-md font-bold text-darkprimary border-2 border-darkprimary hover:border-transparent hover:text-primary hover:bg-darkprimary ">
                  Primary
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-darksecondary border-2 border-darksecondary  hover:border-transparent hover:text-secondary hover:bg-darksecondary ">
                  Secondary
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-darksuccess border-2 border-darksuccess  hover:border-transparent hover:text-success hover:bg-darksuccess ">
                  Success
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-darkinfo border-2 border-darkinfo  hover:border-transparent hover:text-info hover:bg-darkinfo ">
                  Info
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-darkwarning border-2 border-darkwarning  hover:border-transparent hover:text-warning hover:bg-darkwarning ">
                  Warning
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-darkdanger border-2 border-darkdanger  hover:border-transparent hover:text-danger hover:bg-darkdanger ">
                  Danger
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-darklight border-2 border-darklight  hover:border-transparent hover:text-darklight hover:bg-[#fff] ">
                  Light
                </button>
                <button className="px-8 py-1 rounded-md font-bold text-darkdark border-2 border-[#0B1727]  hover:border-transparent hover:text-dark hover:bg-[#0B1727] ">
                  Dark
                </button>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {outline}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Button sizes
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4 text-white ">
                <button className="px-8 py-1 rounded-md font-bold bg-darksecondary  ">
                  SMALL
                </button>
                <button className="px-8 py-1 rounded-md font-bold bg-darksecondary ">
                  REGULAR
                </button>

                <button className="px-8 py-1 rounded-md font-bold bg-darksecondary  ">
                  LARGE
                </button>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {buttonSizes}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Icon Buttons
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4 pb-2 ">
                <button className="px-8 py-1 rounded-md font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex  items-center gap-1 ">
                  <BiPlus />
                  <span>SMALL</span>
                </button>
                <button className="px-8 py-1 rounded-md font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex items-center gap-1 ">
                  <BiPlus />
                  REGULAR
                </button>

                <button className="px-8 py-1 rounded-md font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex items-center gap-1 ">
                  <BiPlus />
                  LARGE
                </button>
              </div>
              <hr />
              <div className="flex flex-wrap gap-4 py-2 ">
                <button className="px-8 py-1 rounded-md font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex items-center gap-1 ">
                  <BiPlus />
                  REGULAR
                </button>

                <button className="px-8 py-1 rounded-md font-bold border-2 border-bgLightYellow bg-transparent hover:bg-bgDarkYellow flex  items-center gap-1 ">
                  <BiPlus />
                  <span>OUTLINE</span>
                </button>
              </div>
              <hr />

              <div className="flex flex-wrap gap-4 pt-2 ">
                <button className="px-8 py-1 rounded-md font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex items-center gap-1 ">
                  <span>DELETE</span>
                  <MdDelete />
                </button>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {iconButtons}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Button Capsule
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4 pb-2 ">
                <button className="px-8 py-1 rounded-full font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex  items-center gap-1 ">
                  EXAMPLE
                </button>
                <button className="px-8 py-1 rounded-full font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex items-center gap-1 ">
                  <FaAlignLeft />
                  ICON LEFT
                </button>

                <button className="px-8 py-1 rounded-full font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex items-center gap-1 ">
                  ICON RIGHT
                  <FaAlignRight />
                </button>
                <button className="px-8 py-1 rounded-full font-bold border-2 border-bgLightYellow bg-transparent hover:bg-bgDarkYellow flex  items-center gap-1 ">
                  OUTLINE
                </button>
              </div>
              <hr />
              <div className="flex flex-wrap gap-4 py-2 ">
                <button className="px-8 py-1 rounded-md font-bold bg-bgLightYellow hover:bg-bgDarkYellow flex items-center gap-1 ">
                  CAPSULE SMALL
                </button>

                <button className="px-8 py-1 rounded-md font-bold border-2 border-bgLightYellow bg-transparent hover:bg-bgDarkYellow flex  items-center gap-1 ">
                  CAPSULE REGULAR
                </button>
                <button className="px-8 py-1 rounded-md font-bold border-2 border-bgLightYellow bg-transparent hover:bg-bgDarkYellow flex  items-center gap-1 ">
                  CAPSULE LARGE
                </button>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {buttonCapsule}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <ResuableHeader
            title="Button Group"
            desc="Group a series of buttons together on a single line with the button group, and super-power them with JavaScript."
            goto="BUTTON-GROUP ON BOOTSTRAP"
            link="https://www.material-tailwind.com/docs/react/breadcrumbs"
          />

          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{ fontFamily: "Merriweather, sans-serif" }}
              >
                Basic Example
              </h2>
              <p className="">
                Wrap a series of buttons with
                <span className="text-red-500">.btn</span> in
                <span className="text-red-500">.btn-group</span>. Add on
                optional JavaScript radio and checkbox style behavior with
              </p>
            </div>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex font-bold bg-darksecondary text-white w-fit rounded">
                <button className="px-16 py-2  ">LEFT</button>
                <button className="px-16 py-2   ">MIDDLE</button>
                <button className="px-16 py-2">RIGHT</button>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {basicExample}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{ fontFamily: "Merriweather, sans-serif" }}
              >
                Button Toolbar
              </h2>
              <p>
                Combine sets of button groups into button toolbars for more
                complex components. Use utility classes as needed to space out
                groups, buttons, and more.
              </p>
            </div>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-2">
              <div className="flex font-bold bg-darksecondary text-white w-fit rounded">
                <button className="px-14 py-2  ">1</button>
                <button className="px-14 py-2   ">2</button>
                <button className="px-14 py-2">3</button>
                <button className="px-14 py-2">4</button>
              </div>
              <div className="flex gap-4">
                <div className="flex font-bold bg-darksecondary text-white w-fit rounded">
                  <button className="px-14 py-2  ">5</button>
                  <button className="px-14 py-2   ">6</button>
                  <button className="px-14 py-2">7</button>
                </div>
                <div className="px-14 py-2  bg-darksecondary text-white w-fit rounded">
                  8
                </div>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {buttonToolBar}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{ fontFamily: "Merriweather, sans-serif" }}
              >
                Button Toolbar with Input Group
              </h2>
              <p>
                Feel free to mix input groups with button groups in your
                toolbars. Similar to the example above, you'll likely need some
                utilities though to space things properly.
              </p>
            </div>
            <div className="bg-[#F9FAFD]  px-4 py-2 flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 flex-wrap">
                  <div className="flex font-bold bg-darksecondary text-white w-fit rounded">
                    <button className="px-14 py-2">1</button>
                    <button className="px-14 py-2">2</button>
                    <button className="px-14 py-2">3</button>
                    <button className="px-14 py-2">4</button>
                  </div>
                  <div className="rounded-md flex">
                    <button className="px-4 py-2 bg-[#EDF2F9] text-black rounded-l border-l border-t border-b border-darksecondary">
                      @
                    </button>
                    <input
                      type="text"
                      placeholder="Input group example"
                      className="px-4 rounded-r border-t border-r border-b border-darksecondary focus:border-transparent focus:outline-none focus:ring focus:ring-[#FBECD3]"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2 flex-wrap">
                  <div className="flex font-bold bg-darksecondary text-white w-fit rounded">
                    <button className="px-14 py-2">1</button>
                    <button className="px-14 py-2">2</button>
                    <button className="px-14 py-2">3</button>
                    <button className="px-14 py-2">4</button>
                  </div>
                  <div className="rounded-md flex">
                    <button className="px-4 py-2 bg-[#EDF2F9] text-black rounded-l border-l border-t border-b border-darksecondary">
                      @
                    </button>
                    <input
                      type="text"
                      placeholder="Input group example"
                      className="px-4 rounded-r border-t border-r border-b border-darksecondary focus:border-transparent focus:outline-none focus:ring focus:ring-[#FBECD3]"
                    />
                  </div>
                </div>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {buttonToolBarInput}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{ fontFamily: "Merriweather, sans-serif" }}
              >
                Sizing
              </h2>
              <p className="">
                Insteam of aplying button sizing classes to every button in a
                group, just add
                <span className="text-red-500">.btn-group-*</span> to each
                <span className="text-red-500">.btn-group</span>, including each
                one when nesting multiple groups.
              </p>
            </div>
            <div className="bg-[#F9FAFD]  px-4 flex flex-col gap-4">
              <div className="flex xs:flex-col md:flex-row md:items-center flex-wrap gap-2">
                <div className="flex  font-bold bg-darksecondary text-white w-fit rounded">
                  <button className="px-8 py-4 hover:bg-[#2F2F2F]">LEFT</button>
                  <button className="px-8 py-4 hover:bg-[#2F2F2F]   ">
                    MIDDLE
                  </button>
                  <button className="px-8 py-4 hover:bg-[#2F2F2F] ">
                    RIGHT
                  </button>
                </div>
                <div className="flex  h-fit font-bold bg-darksecondary text-white w-fit rounded">
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    LEFT
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    MIDDLE
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    RIGHT
                  </button>
                </div>
                <div className="flex font-bold bg-darksecondary text-white w-fit rounded">
                  <button className="p-2 hover:bg-[#242324]">LEFT</button>
                  <button className="p-2 hover:bg-[#2F2F2F]">MIDDLE</button>
                  <button className="p-2 hover:bg-[#2F2F2F]">RIGHT</button>
                </div>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {sizing}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{ fontFamily: "Merriweather, sans-serif" }}
              >
                Vertical Variation
              </h2>
              <p className="">
                Make a set of buttons appear vertically tacked rather than
                horizontally. Split button dropdowns ae not supported here.
              </p>
            </div>
            <div className="bg-[#F9FAFD]  px-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col font-bold bg-darksecondary text-white w-fit rounded">
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                </div>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {verticalVariation}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{ fontFamily: "Merriweather, sans-serif" }}
              >
                Vertical variation with dropdown
              </h2>
            </div>
            <div className="bg-[#F9FAFD]  px-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col font-bold bg-darksecondary text-white w-fit rounded">
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                  <button className="px-16 py-2 hover:bg-gray-700">
                    BUTTON
                  </button>
                  <div className="relative inline-block text-left">
                    <button
                      onClick={toggleDropdown}
                      className="flex w-full justify-center items-center  px-4 py-2 hover:bg-gray-700 focus:outline-none"
                    >
                      DROPDOWN
                      <span>
                        <MdExpandMore size={24} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 mt-0 w-full bg-white flex flex-col items-start pb-2 z-10">
                        <a
                          href="#"
                          className="border-b border-darksecondary px-4 py-2 text-darksecondary text-sm font-medium w-full hover:bg-gray-100"
                        >
                          Dropdown link
                        </a>
                        <a
                          href="#"
                          className="border-b border-darksecondary px-4 py-2 text-darksecondary text-sm font-medium w-full hover:bg-gray-100"
                        >
                          Dropdown Link
                        </a>
                      </div>
                    )}
                  </div>

                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>
                  <button className="px-16 py-2 hover:bg-[#2F2F2F]">
                    BUTTON
                  </button>

                  {[1, 2, 3].map((_, index) => (
                    <div
                      key={index}
                      className="relative inline-block text-center"
                    >
                      <button
                        onClick={() => handleDropdownClick(index)}
                        className="flex w-full justify-center items-center  px-4 py-2 hover:bg-gray-700 focus:outline-none"
                      >
                        DROPDOWN
                        <span>
                          <MdExpandMore size={24} />
                        </span>
                      </button>
                      {openIndex === index && (
                        <div className="absolute left-0 mt-2 w-full bg-white flex flex-col items-start pb-2 z-10">
                          <a
                            href="#"
                            className="border-b border-darksecondary px-4 py-2 text-darksecondary text-sm font-medium w-full hover:bg-gray-100"
                          >
                            Dropdown link
                          </a>
                          <a
                            href="#"
                            className="border-b border-darksecondary px-4 py-2 text-darksecondary text-sm font-medium w-full hover:bg-gray-100"
                          >
                            Dropdown Link
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {verticalVariationDropDown}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
