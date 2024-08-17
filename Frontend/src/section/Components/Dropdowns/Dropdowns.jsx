import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Dropdown from "react-bootstrap/Dropdown";
import ResuableHeader from "../../../components/ResuableHeader";

const Dropdowns = () => {
  const Dropdownexample = `<div class="dropdown text-sans-serif"><button class="btn btn-falcon-default dropdown-toggle" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
  <div class="dropdown-menu dropdown-menu-right py-0" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>
</div>

`;
  return (
    <div className="bg-[#F9FAFD] py-[110px] w-full px-10 lg:px-[5%] xl:px-[12.5%]">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1 gap-4">
          <ResuableHeader
            title="Dropdown"
            desc="Toggle contextual overlays for displaying lists of links and more with the Falcon dropdown plugin."
            goto="DROPDOWN ON BOOTSTRAP"
            link="https://getbootstrap.com/docs/4.3/components/dropdown/"
          />
          <div className="flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Examples
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <Dropdown align="end">
                <Dropdown.Toggle
                  className=" px-16 uppercase font-bold text-2xl text-[#5E6E82]  rounded border-none focus:outline-none focus:ring focus:ring-[#FBECD3]"
                  variant="none"
                  id="dropdown-menu-align-end"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    className="text-[#5E6E82] hover:text-[#5E6E82] active:bg-transparent"
                    href="#/action-1"
                  >
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="text-[#5E6E82] hover:text-[#5E6E82] border border-[#E4E3E3] active:bg-transparent"
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    className="text-[#5E6E82] hover:text-[#5E6E82] active:bg-transparent"
                  >
                    Something else here
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {Dropdownexample}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
