import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import ResuableHeader from "../../../components/ResuableHeader";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Slider, Switch } from "@material-tailwind/react";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";

const Forms = () => {
  const [fileName, setFileName] = useState("Choose file");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "Choose file");
  };
  const basicfrom = `<form>
  <div class="form-group">
    <label for="name">Name</label>
    <input class="form-control" id="name" type="text" placeholder="Name" />
  </div>
  <div class="form-group">
    <label for="readOnly">Read Only</label>
    <input class="form-control" id="readonly" type="text" placeholder="Readonly input here…" readonly="" />
  </div>
  <div class="form-group">
    <label>Read only plain text</label>
    <input class="form-control-plaintext" id="staticEmail" type="text" readonly="" value="email@example.com" />
  </div>
  <div class="form-group">
    <label for="email1">Email</label>
    <input class="form-control" id="email1" type="email" placeholder="Email" />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input class="form-control" id="password" type="password" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input class="form-check-input" id="defaultcheckbox1" type="checkbox" />
    <label class="form-check-label" for="defaultcheckbox1">Cehckbox</label>
  </div>
  <div class="form-group form-check">
    <input class="form-check-input" id="defaultCheck2" type="checkbox" value="" disabled="" />
    <label class="form-check-label" for="defaultCheck2">Disabled checkbox</label>
  </div>
  <div class="form-group form-check">
    <input class="form-check-input" id="exampleRadios2" type="radio" name="exampleRadios" value="option2" />
    <label class="form-check-label" for="exampleRadios2">Default radio</label>
  </div>
  <div class="form-group form-check">
    <input class="form-check-input" id="exampleRadios3" type="radio" name="exampleRadios" value="option3" disabled="" />
    <label class="form-check-label" for="exampleRadios3">Disabled radio</label>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input class="form-control-file" id="exampleFormControlFile1" type="file" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select class="form-control" id="exampleFormControlSelect2" multiple="">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="formControlRange">Example Range input</label>
    <input class="form-control-range" id="formControlRange" type="range" />
  </div>
</form><button class="btn btn-primary mb-3" type="submit">Save</button>

`;

  const inputGroup = `<div class="input-group mb-3">
  <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">@</span></div><input class="form-control" type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</div>
<div class="input-group mb-3"><input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div class="input-group-append"><span class="input-group-text" id="basic-addon2">@example.com</span></div>
</div><label for="basic-url">Your vanity URL</label>
<div class="input-group mb-3">
  <div class="input-group-prepend"><span class="input-group-text" id="basic-addon3">https:example.com/users/</span></div><input class="form-control" id="basic-url" type="text" aria-describedby="basic-addon3" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend"><span class="input-group-text">$</span></div><input class="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
  <div class="input-group-append"><span class="input-group-text">.00</span></div>
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend"><span class="input-group-text">With textarea</span></div><textarea class="form-control" aria-label="With textarea"></textarea>
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input" /></div>
  </div><input class="form-control" type="text" aria-label="Text input with checkbox" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text"><input type="radio" aria-label="Radio button for following text input" /></div>
  </div><input class="form-control" type="text" aria-label="Text input with radio button" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend"><span class="input-group-text">First and last name</span></div><input class="form-control" type="text" aria-label="First name" /><input class="form-control" type="text" aria-label="Last name" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend"><span class="input-group-text">$</span><span class="input-group-text">0.00</span></div><input class="form-control" type="text" aria-label="Dollar amount (with dot and two decimal places)" />
</div>
<div class="input-group mb-3"><input class="form-control" type="text" aria-label="Dollar amount (with dot and two decimal places)" />
  <div class="input-group-append"><span class="input-group-text">$</span><span class="input-group-text">0.00</span></div>
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend"><button class="btn btn-primary dropdown-toggle shadow-none" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider" role="separator"></div><a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><input class="form-control" type="text" aria-label="Text input with dropdown button" />
</div>
<div class="input-group"><input class="form-control" type="text" aria-label="Text input with dropdown button" />
  <div class="input-group-append"><button class="btn btn-primary dropdown-toggle shadow-none" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider" role="separator"></div><a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

`;
  const checkboxes = `<div class="custom-control custom-checkbox">
  <input class="custom-control-input" id="customCheck1" type="checkbox" />
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>
<div class="custom-control custom-checkbox">
  <input class="custom-control-input" id="customCheck2" type="checkbox" />
  <label class="custom-control-label" for="customCheck2">Check another custom checkbox</label>
</div`;
  const radios = `<div class="custom-control custom-radio">
  <input class="custom-control-input" id="customRadio1" type="radio" name="customRadio" />
  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input class="custom-control-input" id="customRadio2" type="radio" name="customRadio" />
  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
</div>

`;

  const InlineRadios = `<div class="custom-control pl-0"><label class="mb-0">Select one option</label></div>
<div class="custom-control custom-radio custom-control-inline">
  <input class="custom-control-input" id="customRadioInline1" type="radio" name="customRadioInline1" />
  <label class="custom-control-label" for="customRadioInline1">Toggle</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input class="custom-control-input" id="customRadioInline2" type="radio" name="customRadioInline1" />
  <label class="custom-control-label" for="customRadioInline2">Or toggle this</label>
</div>`;

  const disabled = `<div class="custom-control custom-checkbox">
  <input class="custom-control-input" id="customCheckDisabled1" type="checkbox" disabled="" />
  <label class="custom-control-label" for="customCheckDisabled1">Check this custom checkbox</label>
</div>
<div class="custom-control custom-radio">
  <input class="custom-control-input" id="customRadioDisabled2" type="radio" name="radioDisabled" disabled="" />
  <label class="custom-control-label" for="customRadioDisabled2">Toggle this custom radio</label>
</div>`;
  const switches = `<div class="custom-control custom-switch">
  <input class="custom-control-input" id="customSwitch1" type="checkbox" />
  <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
</div>`;
  const disabledSwitches = `<div class="custom-control custom-switch">
  <input class="custom-control-input" id="customSwitch2" type="checkbox" disabled="" />
  <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
</div>`;

  const customSelect = `<select class="custom-select mb-3 custom-select-lg mb-3">
  <option selected="">Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select class="custom-select mb-3">
  <option selected="">Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select class="custom-select mb-3 custom-select-sm mb-3">
  <option selected="">Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

  const multipleSelect = `<select class="custom-select mb-3" multiple="">
  <option selected="">Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select class="custom-select mb-3" multiple="" size="3">
  <option selected="">Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

  const rangeIp = `<label for="customRange1">Example range</label>
<input class="custom-range" id="customRange1" type="range">`;

  const fileBrowser = `<div class="custom-file">
  <input class="custom-file-input" id="customFile" type="file">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>`;

  return (
    <div className="bg-[#F9FAFD] py-[110px] w-full xs:px-10 lg:px-[5%] xl:px-[12.5%]">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <ResuableHeader
              title="Form"
              desc="Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms."
              goto="FORMS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/forms/"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              basic form
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <form className="space-y-4">
                {/* <!-- Text Input --> */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg  font-medium"
                    style={{ fontFamily: "Merriweather" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="mt-1 block w-full px-3 py-2  border-1 border-default
                     rounded-sm  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-sm"
                  />
                </div>

                {/* <!-- Read Only Input --> */}
                <div>
                  <label
                    htmlFor="readonly"
                    className="block text-lg  font-medium"
                    style={{ fontFamily: "Merriweather" }}
                  >
                    Read Only
                  </label>
                  <input
                    id="readonly"
                    type="text"
                    placeholder="Readonly input here…"
                    readOnly
                    className="mt-1 block w-full px-3 py-2  border-1 border-default
                     rounded-sm  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-sm"
                  />
                </div>

                {/* <!-- Read Only Plain Text --> */}
                <div>
                  <label
                    className="block text-lg  font-medium"
                    style={{ fontFamily: "Merriweather" }}
                  >
                    Read only plain text
                  </label>
                  <input
                    id="staticEmail"
                    type="text"
                    readOnly
                    value="email@example.com"
                    className="mt-1 block w-full px-3 py-2  border-1 border-transparent bg-transparent
                     rounded-sm  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-sm"
                  />
                </div>

                {/* <!-- Email Input --> */}
                <div>
                  <label
                    htmlFor="email1"
                    className="block text-lg  font-medium"
                    style={{ fontFamily: "Merriweather" }}
                  >
                    Email
                  </label>
                  <input
                    id="email1"
                    type="email"
                    placeholder="Email"
                    className="mt-1 block w-full px-3 py-2  border-1 border-default
                     rounded-sm  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-sm"
                  />
                </div>

                {/* <!-- Password Input --> */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-lg  font-medium"
                    style={{ fontFamily: "Merriweather" }}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="mt-1 block w-full px-3 py-2  border-1 border-default
                     rounded-sm  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-sm"
                  />
                </div>

                {/* <!-- Checkbox --> */}
                <div className="flex items-center">
                  <input
                    id="defaultcheckbox1"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="defaultcheckbox1"
                    className="ml-2 block text-lg font-medium "
                  >
                    Checkbox
                  </label>
                </div>

                {/* <!-- Disabled Checkbox --> */}
                <div className="flex items-center">
                  <input
                    id="defaultCheck2"
                    type="checkbox"
                    value=""
                    disabled
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="defaultCheck2"
                    className="ml-2 block text-lg font-medium text-gray-500"
                  >
                    Disabled checkbox
                  </label>
                </div>

                {/* <!-- Radio Button --> */}
                <div className="flex items-center">
                  <input
                    id="exampleRadios2"
                    type="radio"
                    name="exampleRadios"
                    value="option2"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor="exampleRadios2"
                    className="ml-2 block text-lg font-medium "
                  >
                    Default radio
                  </label>
                </div>

                {/* <!-- Disabled Radio Button --> */}
                <div className="flex items-center">
                  <input
                    id="exampleRadios3"
                    type="radio"
                    name="exampleRadios"
                    value="option3"
                    disabled
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor="exampleRadios3"
                    className="ml-2 block text-lg font-medium text-gray-500"
                  >
                    Disabled radio
                  </label>
                </div>

                {/* <!-- File Input --> */}
                <div>
                  <label
                    htmlFor="exampleFormControlFile1"
                    className="block text-lg font-medium "
                  >
                    Example file input
                  </label>
                  <input
                    id="exampleFormControlFile1"
                    type="file"
                    className="mt-1 block w-full text-sm file:border  file:border-gray-500  file:mr-2 file:py-0 file:px-2  file:rounded-md file:text-lg file:font-medium file:bg-gray-100 hover:file:bg-gray-200"
                  />
                </div>

                {/* <!-- Single Select --> */}
                <div>
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="block text-lg font-medium "
                  >
                    Example select
                  </label>
                  <select
                    id="exampleFormControlSelect1"
                    className="mt-1 block bg-white   font-medium w-full px-3 py-2  border-1 border-default
                     rounded-sm  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-lg"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                {/* <!-- Multiple Select --> */}
                <div>
                  <label
                    htmlFor="exampleFormControlSelect2"
                    className="block text-lg font-medium "
                  >
                    Example multiple select
                  </label>
                  <select
                    id="exampleFormControlSelect2"
                    multiple
                    className="mt-1 block bg-white   font-medium w-full px-3 py-2  border-1 border-default
                     rounded-md  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-lg"
                  >
                    <option className=" py-2">1</option>
                    <option className=" py-2">2</option>
                    <option className=" py-2">3</option>
                    <option className=" py-2">4</option>
                    <option className=" py-2">5</option>
                  </select>
                </div>

                {/* <!-- Textarea --> */}
                <div>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="block text-lg font-medium "
                  >
                    Example textarea
                  </label>
                  <textarea
                    id="exampleFormControlTextarea1"
                    rows="3"
                    className="mt-1 block bg-white   font-medium w-full px-3 py-2  border-1 border-default
                     rounded-md  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-lg"
                  ></textarea>
                </div>

                {/* <!-- Range Input --> */}
                <div>
                  <label
                    htmlFor="formControlRange"
                    className="block text-lg font-medium "
                  >
                    Example Range input
                  </label>
                  <input
                    id="formControlRange"
                    type="range"
                    className="mt-1 block w-full"
                  />
                </div>

                {/* <!-- Submit Button --> */}
                <button
                  type="submit"
                  className="mt-4 px-12 py-1.5 bg-bgLightYellow text-lg font-semibold rounded-md shadow-sm hover:bg-bgDarkYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Save
                </button>
              </form>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {basicfrom}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              input group
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <div className="space-y-4">
                {/* Input Group with Prefix */}
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-3 py-2 bg-[#EDF2F9] border-l border-t border-b  border-gray-300  rounded-l-md">
                    @
                  </span>
                  <input
                    className="block w-full px-3 py-2 border-1 border-gray-300 rounded-r-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent "
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                {/* Input Group with Suffix  */}
                <div className="flex items-center mb-3">
                  <input
                    className="z-10 block w-full px-3 py-2 border-1 border-gray-300 rounded-l-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span className="z-0 inline-flex items-center px-3 py-2  bg-[#EDF2F9] border-r border-t border-b border-gray-300 rounded-r-md">
                    @example.com
                  </span>
                </div>

                {/* Input Group with URL Prefix */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="vinityURL"
                    className="text-lg font-medium"
                    style={{ fontFamily: "Merriweather" }}
                  >
                    Your vanity URL
                  </label>
                  <div
                    id="vinityURL"
                    className="flex xs:flex-col md:flex-row xs:items-start md:items-center mb-3"
                  >
                    <span className="w-fit flex justify-center xs:px-1 md:px-3 py-2 xs:text-sm md:text-lg  bg-[#EDF2F9] xs:border  md:border-l md:border-t md:border-b border-gray-300 rounded-md md:rounded-l-md">
                      https://example.com/users/
                    </span>
                    <input
                      className="w-full  px-3 py-2 border-1 border-gray-300 rounded md:rounded-r-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                      id="basic-url"
                      type="text"
                      aria-describedby="basic-addon3"
                    />
                  </div>
                </div>
                {/* Input Group with Prefix and Suffix */}
                <div className="flex items-center mb-3">
                  <span className="z-0 inline-flex items-center px-3 py-2  border-gray-300 border-l border-t border-b bg-[#EDF2F9] rounded-l-md">
                    $
                  </span>
                  <input
                    className="z-10 block w-full px-3 py-2 border-1 border-gray-300  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span className="z-0 inline-flex items-center px-3 py-2  bg-[#EDF2F9] border-t border-r border-b border-gray-300 rounded-r-md">
                    .00
                  </span>
                </div>
                {/* Input Group with Textarea */}
                <div className="flex items-center mb-3 ">
                  <span className=" min-w-fit flex  items-center px-3 py-2  bg-[#EDF2F9] border-t border-b border-l border-gray-300 rounded-l-md">
                    With textarea
                  </span>
                  <textarea
                    className=" w-full px-3 py-2 border-1 border-gray-300 rounded-r-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    aria-label="With textarea"
                  ></textarea>
                </div>
                {/* Input Group with Checkbox */}
                <div className="flex items-center mb-3">
                  <div className=" min-w-fit h-[41px] flex items-center px-3 py-2 bg-[#EDF2F9] border-l border-t border-b border-gray-300 rounded-l-md">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <input
                    className="w-full col-span-6 px-3 py-2 border-1 border-gray-300 rounded-r-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    aria-label="Text input with checkbox"
                  />
                </div>
                {/* Input Group with Radio Button */}
                <div className="flex items-center mb-3">
                  <div className="flex h-[41px] items-center px-3 py-2 bg-[#EDF2F9] border-l border-t border-b border-gray-300 rounded-l-md">
                    <input
                      type="radio"
                      aria-label="Radio button for following text input"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <input
                    className="block w-full px-3 py-2 border-1 border-gray-300 rounded-r-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    aria-label="Text input with radio button"
                  />
                </div>
                <div className="flex items-center mb-3 w-full">
                  <span className="min-w-fit flex justify-center px-3 py-2  bg-[#EDF2F9] border-l border-t border-b border-gray-300 rounded-l-md">
                    First and last name
                  </span>
                  <input
                    className="z-20 w-1/2  px-3 py-2 border-1 border-r-none   border-gray-300  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    id="basic-url"
                    type="text"
                    aria-label="First name"
                  />
                  <input
                    className=" z-10 w-1/2  px-3 py-2 border-1 border-gray-300 rounded-r-md  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    id="basic-url"
                    type="text"
                    aria-label="Last name"
                  />
                </div>
                {/* Input Group with Prefix and Suffix Amount */}
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-3 py-2 bg-[#EDF2F9] border border-gray-300 rounded-l-md">
                    $
                  </span>
                  <span className="inline-flex items-center px-3 py-2 bg-[#EDF2F9] border-y border-gray-300 rounded-none">
                    0.00
                  </span>
                  <input
                    className="block w-full px-3 py-2 border-1 border-gray-300 rounded-r-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                </div>
                {/* Input Group with Prefix and Suffix Amount */}
                <div className="flex items-center mb-3">
                  <input
                    className="z-10 block w-full px-3 py-2 border-1 border-gray-300 rounded-l-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="z-0 inline-flex items-center px-3 py-2 bg-[#EDF2F9] border border-gray-300 ">
                    $
                  </span>
                  <span className="inline-flex items-center px-3 py-2 bg-[#EDF2F9] border-t border-r border-b border-gray-300 rounded-r-md">
                    0.00
                  </span>
                </div>
                {/* Input Group with Dropdown Button */}
                <div className="relative flex items-center mb-3">
                  <span className="bg-darkprimary  text-lg font-medium rounded-l-md">
                    <Dropdown align="end">
                      <Dropdown.Toggle
                        variant="none"
                        id="dropdown-basic"
                        className="xs:px-2 md:px-5   uppercase font-bold text-lg text-[#5E6E82]   border-none focus:outline-none "
                      >
                        Dropdown
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <ul>
                          <li className=" border-b-0">
                            <Dropdown.Item
                              href="#/action-1"
                              className="text-[#5E6E82] hover:text-[#5E6E82] active:bg-transparent"
                            >
                              Action
                            </Dropdown.Item>
                          </li>
                          <li className=" border-b-0 ">
                            <Dropdown.Item
                              href="#/action-2"
                              className="text-[#5E6E82] hover:text-[#5E6E82] border border-x active:bg-transparent"
                            >
                              Another action
                            </Dropdown.Item>
                          </li>
                          <li className=" border-b-[1px] ">
                            <Dropdown.Item
                              href="#/action-3"
                              className="text-[#5E6E82] hover:text-[#5E6E82] active:bg-transparent"
                            >
                              Something else here
                            </Dropdown.Item>
                          </li>
                        </ul>
                        <ul className="py-2">
                          <li className="border-y">
                            <Dropdown.Item
                              href="#/action-3"
                              className="text-[#5E6E82] hover:text-[#5E6E82]  active:bg-transparent"
                            >
                              Separated link
                            </Dropdown.Item>
                          </li>
                        </ul>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                  <input
                    className="block w-full px-3 py-2 border-1 border-gray-300 rounded-r-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    aria-label="Text input with dropdown button"
                  />
                </div>
                {/* Input Group with Dropdown Button Right Aligned */}
                <div className="relative flex items-center mb-3">
                  <input
                    className="block w-full px-3 py-2 border-1 border-gray-300 rounded-l-md focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                    type="text"
                    aria-label="Text input with dropdown button"
                  />
                  <span className="bg-darkprimary  text-lg font-medium rounded-r-md">
                    <Dropdown align="end">
                      <Dropdown.Toggle
                        variant="none"
                        id="dropdown-basic"
                        className="xs:px-2  md:px-5   uppercase font-bold text-lg text-[#5E6E82]   border-none focus:outline-none "
                      >
                        Dropdown
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <ul>
                          <li className=" border-b-0">
                            <Dropdown.Item
                              href="#/action-1"
                              className="text-[#5E6E82] hover:text-[#5E6E82] active:bg-transparent"
                            >
                              Action
                            </Dropdown.Item>
                          </li>
                          <li className=" border-b-0 ">
                            <Dropdown.Item
                              href="#/action-2"
                              className="text-[#5E6E82] hover:text-[#5E6E82] border border-x active:bg-transparent"
                            >
                              Another action
                            </Dropdown.Item>
                          </li>
                          <li className=" border-b-[1px] ">
                            <Dropdown.Item
                              href="#/action-3"
                              className="text-[#5E6E82] hover:text-[#5E6E82] active:bg-transparent"
                            >
                              Something else here
                            </Dropdown.Item>
                          </li>
                        </ul>
                        <ul className="py-2">
                          <li className="border-y">
                            <Dropdown.Item
                              href="#/action-3"
                              className="text-[#5E6E82] hover:text-[#5E6E82]  active:bg-transparent"
                            >
                              Separated link
                            </Dropdown.Item>
                          </li>
                        </ul>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </div>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {inputGroup}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <ResuableHeader
              title="Custom Forms"
              desc="For even more customization and cross-browser consistency, use Bootstrap's completely custom form elements to replace the browser defaults."
              goto="CUSTOM-FORMS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/forms/"
            />
          </div>
          <div className="xs:col-span-2  md:col-span-1 h-fit flex flex-col gap-4  rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              checkboxes
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <Form>
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>
                    <p className="text-lg font-medium text-darksecondary">
                      Check this custom checkbox
                    </p>
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>
                    <p className="text-lg font-medium text-darksecondary">
                      Check another custom checkbox
                    </p>
                  </Form.Check.Label>
                </Form.Check>
              </Form>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {checkboxes}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="xs:col-span-2  md:col-span-1 h-fit flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              radios
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <Form>
                <Form.Check type="radio" id="check-api-radio">
                  <Form.Check.Input name="radio-group" type="radio" isValid />
                  <Form.Check.Label>
                    <p className="text-lg font-medium text-darksecondary">
                      Toggle this custom radio
                    </p>
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="radio" id="check-api-radio">
                  <Form.Check.Input name="radio-group" type="radio" isValid />
                  <Form.Check.Label>
                    <p className="text-lg font-medium text-darksecondary">
                      Or toggle this other custom radio
                    </p>
                  </Form.Check.Label>
                </Form.Check>
              </Form>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {radios}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="xs:col-span-2  md:col-span-1 h-fit flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              inline radios
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <Form>
                <p
                  className="text-lg font-medium pb-2"
                  style={{ fontFamily: "Merriweather" }}
                >
                  Select one Option
                </p>
                <div className="flex gap-4">
                  <Form.Check type="radio" id="check-api-radio">
                    <Form.Check.Input name="radio-group" type="radio" isValid />
                    <Form.Check.Label>
                      <p className="text-lg font-medium text-darksecondary">
                        Toggle
                      </p>
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type="radio" id="check-api-radio">
                    <Form.Check.Input name="radio-group" type="radio" isValid />
                    <Form.Check.Label>
                      <p className="text-lg font-medium text-darksecondary">
                        Or toggle this
                      </p>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {InlineRadios}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className=" xs:col-span-2  md:col-span-1 h-fit flex flex-col gap-4  rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Disabled
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <Form>
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" isValid disabled />
                  <Form.Check.Label>
                    <p className="text-lg font-medium text-darksecondary">
                      Check this custom checkbox
                    </p>
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="radio" id="check-api-radio">
                  <Form.Check.Input type="radio" isValid disabled />
                  <Form.Check.Label>
                    <p className="text-lg font-medium text-darksecondary">
                      Toggle this custom radio
                    </p>
                  </Form.Check.Label>
                </Form.Check>
              </Form>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {disabled}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className=" xs:col-span-2  md:col-span-1 h-fit flex flex-col gap-4  rounded-lg overflow-hidden  shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              switches
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <div className="flex gap-3">
                <Switch
                  id="custom-switch-component"
                  ripple={false}
                  className="h-full w-full border border-[#DEE2E6] checked:border-darkprimary  checked:bg-bgLightYellow"
                  containerProps={{
                    className: "w-11 h-6",
                  }}
                  circleProps={{
                    className: "before:hidden   left-0.5 border-none",
                  }}
                />
                <p
                  className="text-lg font-medium"
                  style={{ fontFamily: "Merriweather" }}
                >
                  Toggle this switch element
                </p>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {switches}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className=" xs:col-span-2  md:col-span-1 h-fit flex flex-col gap-4  rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Disabled switches
            </h2>
            <div className="bg-[#F9FAFD]  px-4 flex flex-col gap-2  ">
              <div className="flex gap-3">
                <Switch
                  disabled
                  id="custom-switch-component"
                  ripple={false}
                  className="h-full w-full border border-[#DEE2E6] checked:border-darkprimary  checked:bg-bgLightYellow"
                  containerProps={{
                    className: "w-11 h-6",
                  }}
                  circleProps={{
                    className: "before:hidden   left-0.5 border-none",
                  }}
                />
                <p
                  className="text-lg font-medium"
                  style={{ fontFamily: "Merriweather" }}
                >
                  Disabled switch element
                </p>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {disabledSwitches}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className=" xs:col-span-2  md:col-span-1 flex flex-col gap-4  rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Custom Select
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <div>
                <Form.Select
                  size="lg"
                  className="focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <br />
                <Form.Select className="focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <br />
                <Form.Select
                  size="sm"
                  className="focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent"
                >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {customSelect}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className=" xs:col-span-2  md:col-span-1 flex flex-col gap-4  rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Multiple Select
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <div>
                <select
                  // id="exampleFormControlSelect2"
                  multiple
                  className="mt-1 block bg-white   font-medium w-full px-3 py-2  border-1 border-default
                     rounded-md  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-lg"
                >
                  <option selected className=" py-2">
                    Open this select menu
                  </option>
                  <option className=" py-2">One</option>
                  <option className=" py-2">Two</option>
                  <option className=" py-2">Three</option>
                </select>
                <select
                  // id="exampleFormControlSelect2"
                  multiple
                  size="3"
                  className="mt-1 block bg-white   font-medium w-full px-3 py-2  border-1 border-default
                     rounded-md  focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-lg"
                >
                  <option selected className=" py-2">
                    Open this select menu
                  </option>
                  <option className=" py-2">One</option>
                  <option className=" py-2">Two</option>
                  <option className=" py-2">Three</option>
                </select>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {multipleSelect}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className=" xs:col-span-2  md:col-span-1 h-fit flex flex-col gap-4  rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Range Input
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <div>
                <label
                  htmlFor="formControlRange"
                  className="block text-lg font-medium mb-2 "
                >
                  Example Range
                </label>

                <Slider
                  defaultValue={50}
                  className="text-darkprimary "
                  barClassName="rounded bg-transparent"
                  thumbClassName="[&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-darkprimary hover:[&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                  trackClassName="[&::-webkit-slider-runnable-track]:bg-[#D8E2EF] [&::-moz-range-track]:bg-transparent rounded !bg-bgLightYellow/10 border border-[#FFC554]/20"
                />
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {rangeIp}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className=" xs:col-span-2  md:col-span-1 h-fit  flex flex-col gap-4  rounded-lg overflow-hidden shadow-md">
            <h2
              className="px-4 py-3 text-xl bg-white text-black capitalize"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              File Browser
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col  ">
              <div>
                <Form.Group controlId="formFileLg">
                  <Form.Control
                    type="file"
                    size="lg"
                    className="focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent sm:text-lg"
                  />
                </Form.Group>
              </div>

              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {fileBrowser}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
