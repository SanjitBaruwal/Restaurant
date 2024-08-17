import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Sizing = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Sizing"
              desc="Easily make an element as wide or as tall (relative to its parent) with our width and height utilities Includes support for 25% , 50% , 75% , and 100% by default. The classes are named using the format {property}-{size} for xs and {property}-{breakpoint}-{size} for sm, md, lg, xl and xxl."
              goto="sizing ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/sizing/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Width (relative to parent)
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <div className="w-full p-2 text-red-500 border-dashed border-1">
                    .w-100
                  </div>
                  <div className="w-3/4 p-2 text-red-500 border-dashed border-1">
                    .w-75
                  </div>
                  <div className="w-1/2 p-2 text-red-500 border-dashed border-1">
                    .w-50
                  </div>
                  <div className="w-1/4 p-2 text-red-500 border-dashed border-1">
                    .w-25
                  </div>
                  <div className="w-auto p-2 text-red-500 border-dashed border-1">
                    .w-auto
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="bg-light text-dark p-2 border-dashed mb-3 w-100"><code>.w-100</code></div>
<div class="bg-light text-dark p-2 border-dashed mb-3 w-75"><code>.w-75</code></div>
<div class="bg-light text-dark p-2 border-dashed mb-3 w-50"><code>.w-50</code></div>
<div class="bg-light text-dark p-2 border-dashed mb-3 w-25"><code>.w-25</code></div>
<div class="bg-light text-dark p-2 border-dashed mb-3 w-auto"><code>.w-auto</code></div>`}
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
              Height (relative to parent)
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex justify-between h-[200px]">
                  <div className="h-full p-2 text-red-500 border-dashed border-1">
                    .h-100
                  </div>
                  <div className="h-3/4 p-2 text-red-500 border-dashed border-1">
                    .h-75
                  </div>
                  <div className="h-1/2 p-2 text-red-500 border-dashed border-1">
                    .h-50
                  </div>
                  <div className="h-1/4 p-2 text-red-500 border-dashed border-1">
                    .h-25
                  </div>
                  <div className="h-auto p-2 text-red-500 border-dashed border-1">
                    .h-auto
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="vh-50 text-dark py-3">
  <div class="row h-100">
    <div class="col">
      <div class="bg-light p-2 border-dashed mb-3 h-100"><code>.h-100</code></div>
    </div>
    <div class="col">
      <div class="bg-light p-2 border-dashed mb-3 h-75"><code>.h-75</code></div>
    </div>
    <div class="col">
      <div class="bg-light p-2 border-dashed mb-3 h-50"><code>.h-50</code></div>
    </div>
    <div class="col">
      <div class="bg-light p-2 border-dashed mb-3 h-25"><code>.h-25</code></div>
    </div>
    <div class="col">
      <div class="bg-light p-2 border-dashed mb-3 h-auto"><code>.h-auto</code></div>
    </div>
  </div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Special classes (relative to viewport)
              </h2>
              <p>
                Responsive variations also exist for sizing classes relative to
                the <span className="text-red-500">viewport</span>. Here are all
                the support classes:
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="select-text">
                  <SyntaxHighlighter language="css" style={dracula}>
                    {`.min-vw-100 { min-width: 100vw; }
.vw-100 { width: 100vw; }
.max-vh-100 { max-height: 100vh; }
.max-vh-75 { max-height: 75vh; }
.max-vh-50 { max-height: 50vh; }
.max-vh-25 { max-height: 25vh; }
.min-vh-100 { min-height: 100vh; }
.min-vh-75 { min-height: 75vh; }
.min-vh-50 { min-height: 50vh; }
.min-vh-25 { min-height: 25vh; }
.vh-100 { height: 100vh !important; }
.vh-75 { height: 75vh !important; }
.vh-50 { height: 50vh !important; }
.vh-25 { height: 25vh !important; }
.max-vh-sm-100 { max-height: 100vh; }
.max-vh-sm-75 { max-height: 75vh; }
.max-vh-sm-50 { max-height: 50vh; }
.max-vh-sm-25 { max-height: 25vh; }
.min-vh-sm-100 { min-height: 100vh; }
.min-vh-sm-75 { min-height: 75vh; }
.min-vh-sm-50 { min-height: 50vh; }
.min-vh-sm-25 { min-height: 25vh; }
.vh-sm-100 { height: 100vh !important; }
.vh-sm-75 { height: 75vh !important; }
.vh-sm-50 { height: 50vh !important; }
.vh-sm-25 { height: 25vh !important; }
.max-vh-md-100 { max-height: 100vh; }
.max-vh-md-75 { max-height: 75vh; }
.max-vh-md-50 { max-height: 50vh; }
.max-vh-md-25 { max-height: 25vh; }
.min-vh-md-100 { min-height: 100vh; }
.min-vh-md-75 { min-height: 75vh; }
.min-vh-md-50 { min-height: 50vh; }
.min-vh-md-25 { min-height: 25vh; }
.vh-md-100 { height: 100vh !important; }
.vh-md-75 { height: 75vh !important; }
.vh-md-50 { height: 50vh !important; }
.vh-md-25 { height: 25vh !important; }
.max-vh-lg-100 { max-height: 100vh; }
.max-vh-lg-75 { max-height: 75vh; }
.max-vh-lg-50 { max-height: 50vh; }
.max-vh-lg-25 { max-height: 25vh; }
.min-vh-lg-100 { min-height: 100vh; }
.min-vh-lg-75 { min-height: 75vh; }
.min-vh-lg-50 { min-height: 50vh; }
.min-vh-lg-25 { min-height: 25vh; }
.vh-lg-100 { height: 100vh !important; }
.vh-lg-75 { height: 75vh !important; }
.vh-lg-50 { height: 50vh !important; }
.vh-lg-25 { height: 25vh !important; }
.max-vh-xl-100 { max-height: 100vh; }
.max-vh-xl-75 { max-height: 75vh; }
.max-vh-xl-50 { max-height: 50vh; }
.max-vh-xl-25 { max-height: 25vh; }
.min-vh-xl-100 { min-height: 100vh; }
.min-vh-xl-75 { min-height: 75vh; }
.min-vh-xl-50 { min-height: 50vh; }
.min-vh-xl-25 { min-height: 25vh; }
.vh-xl-100 { height: 100vh !important; }
.vh-xl-75 { height: 75vh !important; }
.vh-xl-50 { height: 50vh !important; }
.vh-xl-25 { height: 25vh !important; }
.max-vh-xxl-100 { max-height: 100vh; }
.max-vh-xxl-75 { max-height: 75vh; }
.max-vh-xxl-50 { max-height: 50vh; }
.max-vh-xxl-25 { max-height: 25vh; }
.min-vh-xxl-100 { min-height: 100vh; }
.min-vh-xxl-75 { min-height: 75vh; }
.min-vh-xxl-50 { min-height: 50vh; }
.min-vh-xxl-25 { min-height: 25vh; }
.vh-xxl-100 { height: 100vh !important; }
.vh-xxl-75 { height: 75vh !important; }
.vh-xxl-50 { height: 50vh !important; }
.vh-xxl-25 { height: 25vh !important; }`}
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

export default Sizing;
