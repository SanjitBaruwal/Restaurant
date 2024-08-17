import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Clearfix = () => {
  const clear = `<div class="bg-info clearfix">
  <button class="btn btn-secondary float-left" type="button">Example Button floated left</button>
  <button class="btn btn-secondary float-right" type="button">Example Button floated right</button>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Clearfix"
              desc="Quickly and easily clear floated content within a container by adding a clearfix utility."
              goto="Clearfix ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/clearfix/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Basic Example
            </h2>
            <div className="flex flex-col ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4  ">
                <div>
                  <p>
                    Easily clear floats by adding .clearfix to the parent
                    element. Can also be used as a mixin.
                  </p>
                  <div className="select-text">
                    <SyntaxHighlighter language="html" style={dracula}>
                      {`<div class="clearfix">...</div>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <div>
                  <p>
                    The following example shows how the clearfix can be used.
                    Without the clearfix the wrapping div would not span around
                    the buttons which would cause a broken layout.
                  </p>
                  <div className="text-white font-bold text-lg bg-darkinfo rounded flex  flex-wrap justify-between">
                    <button className="bg-darksecondary px-4 py-2 rounded  ">
                      Exaple button floated left
                    </button>
                    <button className="bg-darksecondary px-4 py-2 rounded ">
                      Exaple button floated right
                    </button>
                  </div>

                  <div className="select-text">
                    <SyntaxHighlighter language="html" style={dracula}>
                      {clear}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clearfix;
