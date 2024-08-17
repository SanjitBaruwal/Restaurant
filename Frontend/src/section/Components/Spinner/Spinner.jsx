import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import { Spinner } from "react-bootstrap";

const Spinners = () => {
  const basicExample = `<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>
`;
  const colors = `<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

  const growing = `<div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

  const growingcolors = `<div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

  const size = `<div class="spinner-border spinner-border-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>`;
  const button = `<button class="btn btn-primary mr-1" type="button" disabled="">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button><button class="btn btn-primary" type="button" disabled="">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Spinners"
              desc="Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript."
              goto="SPINNERS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/spinners/"
            />
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Basic Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {basicExample}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4 flex flex-col gap-1">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Colors
              </h2>
              <p>
                The border spinner uses{" "}
                <span className="text-red-500">currentColor</span> for its{" "}
                <span className="text-red-500">border-color</span>, meaning you
                can customize the color with text color utilities. You can use
                any of our text color utilities on the standard spinner.
              </p>
            </div>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3">
                  <Spinner animation="border" variant="primary" />
                  <Spinner animation="border" variant="secondary" />
                  <Spinner animation="border" variant="success" />
                  <Spinner animation="border" variant="danger" />
                  <Spinner animation="border" variant="warning" />
                  <Spinner animation="border" variant="info" />
                  <Spinner animation="border" variant="dark" />
                  <Spinner animation="border" variant="light" />
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {colors}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4 flex flex-col gap-1">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Growing spinner
              </h2>
              <p>
                Place toasts with the helper classes as you need them. The top
                right is often used for notifications, as is the top middle. If
                you’re only ever going to show one toast at a time, put the
                positioning styles right on the
                <span className="text-red-500"> .toast</span>.
              </p>
            </div>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Spinner animation="grow" />
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {growing}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4 flex flex-col gap-1">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Growing colors
              </h2>
            </div>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3">
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="light" />
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {growingcolors}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4 flex flex-col gap-1">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Size
              </h2>
              <p>
                Add
                <span className="text-red-500">
                  .spinner-border-sm{" "}
                </span> and{" "}
                <span className="text-red-500">.spinner-grow-sm</span>to make a
                smaller spinner that can quickly be used within other
                components.
              </p>
            </div>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex items-center gap-3">
                  <Spinner animation="border" size="sm" />
                  <Spinner animation="border" />
                  <Spinner animation="grow" size="sm" />
                  <Spinner animation="grow" />
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {size}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Buttons
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3 items-center">
                  <button className="flex items-center justify-center px-4 h-10 py-2 bg-bgLightYellow rounded-xl">
                    <Spinner animation="border" size="sm" />
                  </button>
                  <button className="flex gap-1 justify-center items-center px-4 py-2 bg-bgLightYellow text-lg font-medium rounded-xl">
                    <Spinner animation="border" size="sm" />
                    LOADING...
                  </button>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {button}
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

export default Spinners;
