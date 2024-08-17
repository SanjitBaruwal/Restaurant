import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import { Button, Tooltip } from "@material-tailwind/react";
const Tooltips = () => {
  const tooltipMui = `<div className="flex flex-wrap gap-3">
  <Tooltip content="tooltip at top" placement="top">
    <Button className="w-fit bg-darksecondary">
      TOOLTIP ON TOP
    </Button>
  </Tooltip>
  <Tooltip content="i'm at right" placement="right">
    <Button className="w-fit bg-darksecondary">
      TOOLTIP ON RIGHT
    </Button>
  </Tooltip>
  <Tooltip content="I'm at bottom" placement="bottom">
    <Button className="w-fit bg-darksecondary">
      TOOLTIP ON BOTTOM
    </Button>
  </Tooltip>
  <Tooltip content="I'm from left'" placement="left">
    <Button className="w-fit bg-darksecondary">
      TOOLTIP ON LEFT
    </Button>
  </Tooltip>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="TAILWIND"
              desc="A Tooltip is a small pop-up element that appears while the user moves the mouse pointer over an element. Use it when you want to specify extra information about something when the user moves the mouse pointer over an element."
              goto="TOOLTIP ON TAILWIND"
              link="https://www.material-tailwind.com/docs/react/tooltip"
            />
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Tooltip Placement
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex flex-wrap gap-3">
                  <Tooltip content="tooltip at top" placement="top">
                    <Button className="w-fit bg-darksecondary">
                      TOOLTIP ON TOP
                    </Button>
                  </Tooltip>
                  <Tooltip content="i'm at right" placement="right">
                    <Button className="w-fit bg-darksecondary">
                      TOOLTIP ON RIGHT
                    </Button>
                  </Tooltip>
                  <Tooltip content="I'm at bottom" placement="bottom">
                    <Button className="w-fit bg-darksecondary">
                      TOOLTIP ON BOTTOM
                    </Button>
                  </Tooltip>
                  <Tooltip content="I'm from left'" placement="left">
                    <Button className="w-fit bg-darksecondary">
                      TOOLTIP ON LEFT
                    </Button>
                  </Tooltip>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {tooltipMui}
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

export default Tooltips;
