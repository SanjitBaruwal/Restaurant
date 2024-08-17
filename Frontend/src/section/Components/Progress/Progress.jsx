import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ProgressBar from "react-bootstrap/ProgressBar";
import ResuableHeader from "../../../components/ResuableHeader";
import { useState } from "react";
const Progress = () => {
  const [animated, setAnimated] = useState(false);
  const handleAnimation = () => {
    setAnimated(!animated);
  };
  const now = 50;
  const basic = `<div class="progress mb-3" style="height:15px">
  <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

  const label = `<div class="progress mb-3" style="height:15px">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>`;

  const height = `
<div class="progress mb-3" style="height:1px">
  <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:10px">
  <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:20px">
  <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

  const bg = `
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-info" role="progressbar" style="width: 40%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

  const multiple = `<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;
  const striped = `<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-success progress-bar-striped" role="progressbar" style="width: 30%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-info progress-bar-striped" role="progressbar" style="width: 40%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-warning progress-bar-striped" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-danger progress-bar-striped" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3" style="height:15px">
  <div class="progress-bar bg-primary progress-bar-striped" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

  const animate = `<div class="progress mb-3" style="height:15px">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Progress Bars"
              desc="Documentation and examples for using ZiON-v6.1.0 custom progress bars featuring support for stacked bars, animated backgrounds, and text labels"
              goto="PROGRESS BARS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/progress/"
            />
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Basic Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ProgressBar now={60} variant="warning" />
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {basic}
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
              Label
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ProgressBar now={now} label={`${now}%`} variant="warning" />
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {label}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Height
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ProgressBar now={now} variant="warning" className="h-[1px]" />
                <ProgressBar now={now} variant="warning" className="h-[10px]" />
                <ProgressBar now={now} variant="warning" className="h-[20px]" />
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {height}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Background
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ProgressBar now={30} variant="warning" />
                <ProgressBar now={40} variant="success" />
                <ProgressBar now={50} variant="danger" />
                <ProgressBar now={60} variant="info" />
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {bg}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Multiple bars
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ProgressBar>
                  <ProgressBar now={10} variant="warning" key={1} />
                  <ProgressBar now={20} variant="success" key={2} />
                  <ProgressBar now={10} variant="info" key={3} />
                </ProgressBar>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {multiple}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Background
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ProgressBar now={30} striped variant="warning" />
                <ProgressBar now={40} striped variant="primary" />
                <ProgressBar now={50} striped variant="danger" />
                <ProgressBar now={60} striped variant="info" />
                <ProgressBar now={70} striped variant="success" />
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {striped}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Basic Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ProgressBar
                  now={60}
                  animated={animated}
                  striped
                  variant="warning"
                />
                <button
                  onClick={handleAnimation}
                  className="w-fit cursor-pointer xs:px-4 sm:px-10  md:px-16 py-2 rounded-sm bg-slate-400 text-white font-bold"
                >
                  {animated ? "STOP ANIMATION" : "TOGGLE ANIMAION"}
                </button>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {animate}
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

export default Progress;
