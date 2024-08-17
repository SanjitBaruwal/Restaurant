import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const CloseIcon = () => {
  const eg = `<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="close icon"
              desc="Use a generic close icon for dismissing content like modals and alerts."
              goto="close-icon ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/close-icon/"
            />
          </div>
          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Example
              </h2>
              <p>
                <span className="font-bold">
                  Be sure to include text for screen readers
                </span>
                , as we’ve done with
                <span className="text-red-500"> aria-label.</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <button
                  type="button"
                  className="font-bold text-3xl flex justify-start"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {eg}
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

export default CloseIcon;
