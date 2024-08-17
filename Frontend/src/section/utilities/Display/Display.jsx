import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Display = () => {
  const example = `<div class="d-inline bg-primary p-2 text-white">d-inline</div>
<div class="d-block bg-primary p-2 text-white mt-3">d-inline-block</div>`;
  const display = `<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Display"
              desc="Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing."
              goto="DISPLAY ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/display/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Notation
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="hidden sm:inline md:inline-block lg:block xl:table">
                  Display utility classes that apply to all breakpoints, from{" "}
                  <span className="text-red-500">xs</span> to{" "}
                  <span className="text-red-500">xl</span>, have no breakpoint
                  abbreviation in them. This is because those classes are
                  applied from{" "}
                  <span className="text-red-500">min-width: 0;</span> and up,
                  and thus are not bound by a media query. The remaining
                  breakpoints, however, do include a breakpoint abbreviation.
                  <br />
                  As such, the classes are named using the format:
                  <br />
                  <ul className="list-disc ml-4">
                    <li>
                      <span className="text-red-500">.d-{"{value}"}</span> for{" "}
                      <span className="text-red-500">xs</span>
                    </li>
                    <li>
                      <span className="text-red-500">
                        .d-{"{breakpoint}"}-{"{value}"}
                      </span>{" "}
                      for{" "}
                      <span className="text-red-500">sm, md, lg, and xl</span>
                    </li>
                  </ul>
                  Where value is one of:
                  <br />
                  <ul className="list-disc ml-4">
                    <li>
                      <span className="text-red-500">none</span>
                    </li>
                    <li>
                      <span className="text-red-500">inline</span>
                    </li>
                    <li>
                      <span className="text-red-500">inline-block</span>
                    </li>
                    <li>
                      <span className="text-red-500">block</span>
                    </li>
                    <li>
                      <span className="text-red-500">table</span>
                    </li>
                    <li>
                      <span className="text-red-500">table-cell</span>
                    </li>
                    <li>
                      <span className="text-red-500">table-row</span>
                    </li>
                    <li>
                      <span className="text-red-500">flex</span>
                    </li>
                    <li>
                      <span className="text-red-500">inline-flex</span>
                    </li>
                  </ul>
                  The display values can be altered by changing the{" "}
                  <span className="text-red-500">$displays</span> variable and
                  recompiling the SCSS.
                  <br />
                  The media queries effect screen widths with the given
                  breakpoint or larger. For example,{" "}
                  <span className="text-red-500">.d-lg-none</span> sets{" "}
                  <span className="text-red-500">display: none;</span> on both{" "}
                  <span className="text-red-500">lg</span> and{" "}
                  <span className="text-red-500">xl</span> screens.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Example
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <button className="bg-bgLightYellow text-white p-3 py-1 w-fit">
                    d-inline
                  </button>
                  <button className="bg-bgLightYellow  text-white p-3 py-1 flex justify-start">
                    d-inline-block
                  </button>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {example}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Hiding Elements
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="text-gray-800">
                  <p>
                    For faster mobile-friendly development, use responsive
                    display classes for showing and hiding elements by device.
                    Avoid creating entirely different versions of the same site,
                    instead hide elements responsively for each screen size.
                    <br />
                    <br />
                    To hide elements simply use the{" "}
                    <span className="text-red-500">.d-none</span> class or one
                    of the{" "}
                    <span className="text-red-500">
                      .d-{"{sm,md,lg,xl}-none"}
                    </span>{" "}
                    classes for any responsive screen variation.
                    <br />
                    <br />
                    To show an element only on a given interval of screen sizes
                    you can combine one{" "}
                    <span className="text-red-500">.d-{"*"}-none</span> class
                    with a <span className="text-red-500">.d-{"*"}</span> class,
                    for example{" "}
                    <span className="text-red-500">
                      .d-none .d-md-block .d-xl-none
                    </span>{" "}
                    will hide the element for all screen sizes except on medium
                    and large devices.
                  </p>
                  <table className="min-w-full mt-4 border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Screen Size
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Class
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Hidden on all
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">.d-none</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Hidden only on xs
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-none .d-sm-block
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Hidden only on sm
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-sm-none .d-md-block
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Hidden only on md
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-md-none .d-lg-block
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Hidden only on lg
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-lg-none .d-xl-block
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Hidden only on xl
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">.d-xl-none</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Visible on all
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">.d-block</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Visible only on xs
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-block .d-sm-none
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Visible only on sm
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-none .d-sm-block .d-md-none
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Visible only on md
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-none .d-md-block .d-lg-none
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Visible only on lg
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-none .d-lg-block .d-xl-none
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Visible only on xl
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-500">
                            .d-none .d-xl-block
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Display in print
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col ">
                <div className="text-gray-800">
                  <div className="p-4">
                    <p>
                      Change the <span className="text-red-500">display</span>{" "}
                      value of elements when printing with our print display
                      utility classes. Includes support for the same{" "}
                      <span className="text-red-500">display</span> values as
                      our responsive{" "}
                      <span className="text-red-500">.d-* utilities</span>.
                    </p>
                    <ul className="list-disc pl-6">
                      <li>
                        <span className="text-red-500">.d-print-none</span>
                      </li>
                      <li>
                        <span className="text-red-500">.d-print-inline</span>
                      </li>
                      <li>
                        <span className="text-red-500">
                          .d-print-inline-block
                        </span>
                      </li>
                      <li>
                        <span className="text-red-500">.d-print-block</span>
                      </li>
                      <li>
                        <span className="text-red-500">.d-print-table</span>
                      </li>
                      <li>
                        <span className="text-red-500">.d-print-table-row</span>
                      </li>
                      <li>
                        <span className="text-red-500">
                          .d-print-table-cell
                        </span>
                      </li>
                      <li>
                        <span className="text-red-500">.d-print-flex</span>
                      </li>
                      <li>
                        <span className="text-red-500">
                          .d-print-inline-flex
                        </span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      The print and display classes can be combined.
                    </p>
                    <p className="mt-4">Screen Only (Hide on print only)</p>
                    <p>Hide up to large on screen, but always show on print</p>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {display}
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

export default Display;
