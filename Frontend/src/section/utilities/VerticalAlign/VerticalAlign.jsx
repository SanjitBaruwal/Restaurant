import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const VerticalAlign = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Vertical Align"
              desc="Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."
              goto="VERTICAL-ALIGN ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/vertical-align/"
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
              <div className=" mt-2">
                <p>
                  Change the alignment of elements with the vertical-alignment
                  utilities. Please note that vertical-align only affects
                  inline, inline-block, inline-table, and table cell elements.
                </p>
                <p className="mt-2">
                  Choose from{" "}
                  <span className="text-red-500">.align-baseline</span>,{" "}
                  <span className="text-red-500">.align-top</span>,{" "}
                  <span className="text-red-500">.align-middle</span>,{" "}
                  <span className="text-red-500">.align-bottom</span>,{" "}
                  <span className="text-red-500">.align-text-bottom</span>, and{" "}
                  <span className="text-red-500">.align-text-top</span> as
                  needed.
                </p>
                <p className="mt-2">
                  Multiple links and tap targets are not recommended with
                  stretched links. However, some{" "}
                  <span className="text-red-500">position</span> and{" "}
                  <span className="text-red-500">z-index</span> styles can help
                  should this be required.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="space-x-4">
                  <span className="align-baseline">baseline</span>
                  <span className="align-top">top</span>
                  <span className="align-middle">middle</span>
                  <span className="align-bottom">bottom</span>
                  <span className="align-text-top">text-top</span>
                  <span className="align-text-bottom">text-bottom</span>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div className="px-4">
              <p className="mb-2">with table cells</p>
              <div className="table-responsive">
                <table className="table table-bordered h-[100px]">
                  <tbody>
                    <tr>
                      <td className="align-baseline">baseline</td>
                      <td className="align-top">top</td>
                      <td className="align-middle">middle</td>
                      <td className="align-bottom">bottom</td>
                      <td className="align-text-top">text-top</td>
                      <td className="align-text-bottom">text-bottom</td>
                    </tr>
                  </tbody>
                </table>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="table-responsive">
  <table class="table table-bordered" style="height: 100px;">
    <tbody>
      <tr>
        <td class="align-baseline">baseline</td>
        <td class="align-top">top</td>
        <td class="align-middle">middle</td>
        <td class="align-bottom">bottom</td>
        <td class="align-text-top">text-top</td>
        <td class="align-text-bottom">text-bottom</td>
      </tr>
    </tbody>
  </table>
</div>`}
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

export default VerticalAlign;
