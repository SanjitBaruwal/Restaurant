import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import ResuableHeader from "../../../components/ResuableHeader";

const Hoverbox = () => {
  const basicExample = `<div class="hoverbox rounded-soft text-center">
  <img class="img-fluid" src="../assets/img/generic/3.jpg" alt="" />
  <div class="hoverbox-content bg-dark p-5 self-center">
    <div>
      <p class="lead text-white">Style your card with different design using theme Hoverbox</p>
      <a class="btn btn-light btn-sm mt-1" href="#!">Learn more</a>
    </div>
  </div>
</div>`;
  const ChangeImage = `<a class="color-white" href="#!">
  <div class="hoverbox rounded-soft">
    <img class="img-fluid" src="../assets/img/generic/1.jpg" alt="" />
    <div class="hoverbox-content">
      <img class="img-fluid" src="../assets/img/generic/2.jpg" alt="" /></div>
  </div>
</a>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Hoverbox"
              desc="Style your card with a different design using theme Hoverbox"
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
                <div className="w-full h-fit overflow-hidden rounded-md  relative custom-card">
                  <img
                    src="/card2.jpg"
                    alt="2 "
                    className="w-full h-full  object-cover rounded-md"
                  />
                  <div className="absolute left-0  bottom-[-100%] h-full w-full flex flex-col items-center  bg-[#0B1727] backdrop-blur-sm rounded-md card-body transition-all duration-250 ease-linear">
                    <p className="text-lg text-white  mb-3 p-4">
                      Style your card with different designs using theme
                      Hoverbox
                    </p>
                    <a
                      className="btn  bg-white text-black py-2 px-4 rounded-md mt-1"
                      href="#!"
                    >
                      Learn more
                    </a>
                  </div>
                </div>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {basicExample}
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
              Change Image
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className=" w-full rounded overflow-hidden">
                  <div className="w-full h-fit">
                    <div className="rounded-md bg-card1 w-full h-[220px] bg-no-repeat bg-contain bg-center hover:bg-card3 cursor-pointer"></div>
                  </div>
                  <div className="select-text">
                    <SyntaxHighlighter language="html" style={dracula}>
                      {ChangeImage}
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

export default Hoverbox;
