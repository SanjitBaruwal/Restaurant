import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Borders = () => {
  const additive = `<span class="border"></span>
<span class="border-top"></span>
<span class="borderright"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>`;

  const subtractive = `<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-right-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-left-0"></span>`;

  const borderColor = `<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-white"></span>`;

  const borderRaduis = `<span class="rounded-0"></span>
<span class="rounded"></span>
<span class="rounded-soft"></span>
<span class="rounded-circle"></span>`;
  const borderStyle = `<span class="border-dashed"></span>
<span class="border-dashed-top"></span>
<span class="border-dashed-right"></span>
<span class="border-dashed-bottom"></span>

<span class="border-dashed-left"></span>`;
  const span = `<span class="border border-info"></span>
<span class="border border-success"></span>
<span class="border border-warning"></span>
<span class="border border-danger"></span>
<span class="border border-stunning"></span>
<span class="border border-cake"></span>
<span class="border border-facebook"></span>
<span class="border border-twitter"></span>
<span class="border border-google-plus"></span>
<span class="border border-github"></span>
<div class="w-100"></div>
<span class="border border-black"></span>
<span class="border border-dark"></span>
<span class="border border-1100"></span>
<span class="border border-1000"></span>
<span class="border border-900"></span>
<span class="border border-800"></span>
<span class="border border-700"></span>
<span class="border border-600"></span>
<span class="border border-500"></span>
<span class="border border-400"></span>
<span class="border border-300"></span>
<span class="border border-200"></span>
<span class="border border-100"></span>
<span class="border border-light"></span>
<span class="border border-white"></span>
<span class="border border-2x"></span>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Borders"
              desc="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element."
              goto="BORDERS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/borders/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Border
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p>
                  The classes are named using the format
                  <span className="text-red-600"> border-{"{side}"}</span> for
                  <span className="text-red-600"> xs</span>
                  and{" "}
                  <span className="text-red-600">
                    border-{"{breakpoint}"}-{"{side}"}-{"{side}"}
                  </span>{" "}
                  for <span className="text-red-600">sm</span>,
                  <span className="text-red-600">md</span>,
                  <span className="text-red-600">lg</span>, and
                  <span className="text-red-600"> xl</span>.
                </p>
                <p>
                  Where <span className="italic">side</span> is one of :
                </p>
                <ul className="list-disc list-inside ">
                  <li>
                    <span className="font-semibold text-red-500">top</span> -
                    for classes that set style for{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      border-top
                    </code>
                  </li>
                  <li>
                    <span className="font-semibold text-red-500">bottom</span> -
                    for classes that set style for{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      border-bottom
                    </code>
                  </li>
                  <li>
                    <span className="font-semibold text-red-500">left</span> -
                    for classes that set style for{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      border-left
                    </code>
                  </li>
                  <li>
                    <span className="font-semibold text-red-500">right</span> -
                    for classes that set style for{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      margin-right
                    </code>
                  </li>
                  <li>
                    <span className="font-semibold text-red-500">x</span> - for
                    classes that set both{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      *-left
                    </code>{" "}
                    and{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      *-right
                    </code>
                  </li>
                  <li>
                    <span className="font-semibold text-red-500">y</span> - for
                    classes that set both{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      *-top
                    </code>{" "}
                    and{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      *-bottom
                    </code>
                  </li>
                  <li>
                    <span className="font-semibold text-red-500">blank</span> -
                    for classes that set the{" "}
                    <code className="bg-gray-100 px-1 rounded text-red-500">
                      border
                    </code>{" "}
                    style on all 4 sides of the element.
                  </li>
                </ul>
                <p>
                  Use border utilities to quickly style the{" "}
                  <span className="text-red-500">border</span> of an element.
                  Great for images, buttons, or any other element.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Additive
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex gap-4 flex-wrap">
                  <div className="h-28 aspect-square bg-[#EDF2F9] border"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-t"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-r"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-b"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-l"></div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {additive}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Additive
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex gap-4 flex-wrap">
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-0"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-l border-r border-b "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-l border-t border-b "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-l border-t border-r "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-t border-r border-b "></div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {subtractive}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Border Color
              </h2>
              <p>
                Change the border color using utilities built on our theme
                colors
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex gap-4 flex-wrap">
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darkprimary"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darksecondary"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darksuccess"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darkinfo"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darkdanger"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darkwarning"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darklight"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-darkdark"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-white"></div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {borderColor}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Border Radius
              </h2>
              <p>Add classes to an element to easily round its corners.</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex gap-4 flex-wrap">
                  <div className="h-28 aspect-square bg-darkdark "></div>
                  <div className="h-28 aspect-square bg-darkdark rounded "></div>
                  <div className="h-28 aspect-square bg-darkdark rounded-full "></div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {borderRaduis}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Border Style
              </h2>
              <p className="mb-2">
                For the dashed border, the classes are named using the format,{" "}
                <code className="bg-gray-100 px-1  text-red-500">
                  border-dashed-{"{side}"}
                </code>{" "}
                for <span className="font-semibold">xs</span> and{" "}
                <code className="bg-gray-100 px-1  text-red-500">
                  border-{"{breakpoint}"}-dashed-{"{side}"}
                </code>{" "}
                for <span className="font-semibold">sm, md, lg, xl</span> and{" "}
                <span className="font-semibold">xxl</span>.
              </p>
              <p>
                Where <span className="italic">side</span> is same as documented
                before.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex gap-4 flex-wrap">
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-dashed  border-t border-b border-l border-r"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-dashed border-t "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-dashed border-r "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-dashed border-b "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-dashed border-l "></div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {borderStyle}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black mb-2"
                style={{ fontFamily: "Merriweather" }}
              >
                Border Color and Width
              </h2>
              <p className="mb-2">
                Border color set as{" "}
                <span className="font-semibold text-red-500">currentColor</span>{" "}
                and border width{" "}
                <span className="font-semibold text-red-500">1px</span>.
                Modifier can be used to change border color and width. The
                modifier classes for color are named using the format{" "}
                <code className="bg-gray-100 px-1 rounded text-red-500">
                  border-{"{color}"}
                </code>{" "}
                and for width{" "}
                <code className="bg-gray-100 px-1 rounded text-red-500">
                  border-2x
                </code>
                .
              </p>
              <p className="">
                Where <span className="italic">color</span> is one of:{" "}
                <span className="text-red-500">
                  primary, secondary, success, info, warning, danger, light,
                  dark, black, 1100, 1000, 900, 800, 700, 600, 500, 400, 300,
                  200, 100, white,
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex gap-4 flex-wrap">
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-darkinfo"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9]  border-1 border-darksuccess "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-darkprimary "></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-darkdanger"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-cake"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-stunning"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-facebook"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-twitter"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-github"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border-1 border-googelPlus"></div>
                  <div className="w-100"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-black"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-dark"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-gray-950"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-gray-900"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-gray-800"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-800"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-700"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-600"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-500"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-400"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-300"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-200"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-100"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-light"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-white"></div>
                  <div className="h-28 aspect-square bg-[#EDF2F9] border border-2x"></div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {span}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:hidden lg:flex border sticky top-[65px] flex-col h-fit">
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
          <div className="text-lg font-semibold">123</div>
        </div>
      </div>
    </div>
  );
};

export default Borders;
