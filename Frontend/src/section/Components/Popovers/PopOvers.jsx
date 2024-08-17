import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
const PopOvers = () => {
  const popovers = `<button class="btn btn-secondary m-1" type="button" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on top</button>
<button class="btn btn-secondary m-1" type="button" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on right</button>
<button class="btn btn-secondary m-1" type="button" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on left</button>
<button class="btn btn-secondary m-1" type="button" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on bottom</button>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Popovers"
              desc="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
              goto="POPOVERS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/popovers/"
            />
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3 flex-wrap">
                  {["top", "right", "bottom", "left"].map((placement) => (
                    <OverlayTrigger
                      trigger="click"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Body
                            className="text-gray-500 rounded-md"
                            style={{ fontFamily: "inconsolata" }}
                          >
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus.
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button className="bg-[#748194] hover:bg-[#748194] border-none xs:px-2 lg:px-4 xs:text-md uppercase lg:text-md font-semibold">
                        Popover on {placement}
                      </Button>
                    </OverlayTrigger>
                  ))}
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {popovers}
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

export default PopOvers;
