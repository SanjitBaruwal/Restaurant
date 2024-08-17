import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Visibility = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Visibility"
              desc="Control the visibility, without modifying the display, of elements with visibility utilities."
              goto="VISIBILITY ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/visibility/"
            />
          </div>
          <div className="col-span-2  bg-white shadow-md flex flex-col ">
            <div className="flex flex-col gap-2 ">
              <div className=" p-4 flex flex-col gap-4 ">
                <p>
                  Set the <span className="text-red-500">visibility</span> of
                  elements with our visibility utilities. These utility classes
                  do not modify the display value at all and do not affect
                  layout - <span className="text-red-500">.invisible</span>{" "}
                  elements still take up space in the page. Content will be
                  hidden both visually and for assistive technology/screen
                  reader users.
                  <br />
                  Apply <span className="text-red-500">.visible</span> or{" "}
                  <span className="text-red-500">.invisible</span> as needed.
                </p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="visible"></div>
<div class="invisible"></div>`}
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

export default Visibility;
