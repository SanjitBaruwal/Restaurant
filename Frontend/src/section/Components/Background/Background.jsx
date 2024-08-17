import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import ResuableHeader from "../../../components/ResuableHeader";

const Background = () => {
  const imgBg = `<div class="position-relative py-6 py-lg-8">
  <div class="bg-holder rounded-soft overlay overlay-0" style="background-image:url(../assets/img/gallery/big/2.jpg);"></div> <!--/.bg-holder-->
  <div class="position-relative text-center">
    <h4 class="text-white">Image Background</h4>
  </div>
</div>`;

  const videoBg = `<div className="relative">
    <video className=" h-[300px] w-full object-cover rounded-lg" autoPlay loop muted playsInline>
      <source src="/sekuwa.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black opacity-70 rounded-lg "></div>
    <div className="absolute top-0  h-full  w-full flex justify-center items-center text-2xl font-bold text-white">Video Background</div>
</div>`;

  const youtubeVideoBg = `<div className=" font-bold h-[300px] relative flex justify-center items-center bg-momos  bg-no-repeat bg-cover bg-center rounded-lg">
    <div className="absolute inset-0 bg-black opacity-20 rounded-lg "></div>
    <div className="absolute bg-transparent opacity-100 text-white flex justify-center items-center text-2xl ">Youtube Video Backgrounds</div>
</div>`;

  const stylesheet = `<link href="assets/lib/jquery.mb.ytplayer/jquery.mb.YTPlayer.min.css" rel="stylesheet">`;
  const javascript = `<script src="assets/lib/jquery.mb.ytplayer/jquery.mb.YTPlayer.min.js"></script>`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Background"
            desc="These modular elements can be readily used and customized in every layout across pages."
          />
          <div
            className="bg-[#F9FAFD]  flex flex-col rounded-lg overflow-hidden  shadow-md "
            style={{ fontFamily: "Merriweather,sans-serif" }}
          >
            <h2 className="bg-white text-2xl p-4">Image Background</h2>
            <div className="p-4 flex flex-col ">
              <div className=" font-bold h-[300px] relative flex justify-center items-center bg-burgerBg  bg-no-repeat bg-cover bg-center rounded-lg">
                <div className="absolute inset-0 bg-black opacity-70 rounded-lg "></div>
                <div className="absolute bg-transparent opacity-100 text-white flex justify-center items-center text-2xl ">
                  Image Background
                </div>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {imgBg}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div
            className="bg-[#F9FAFD]  flex flex-col rounded-lg overflow-hidden  shadow-md "
            style={{ fontFamily: "Merriweather,sans-serif" }}
          >
            <h2 className="bg-white text-2xl p-4">Video Background</h2>
            <div className="p-4 flex flex-col  ">
              <div className="relative">
                <video
                  className=" h-[300px] w-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/sekuwa.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-70 rounded-lg "></div>

                <div className="absolute top-0  h-full  w-full flex justify-center items-center text-2xl font-bold text-white">
                  Video Background
                </div>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {videoBg}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="bg-[#F9FAFD]  flex flex-col rounded-lg overflow-hidden  shadow-md ">
            <ResuableHeader
              title="Background"
              desc="These modular elements can be readily used and customized in every layout across pages."
              goto="SEE THE DOCUMENTATION"
              link="https://github.com/pupunzi/jquery.mb.YTPlayer/wiki"
              shadow="none"
            />

            <div className="p-4 flex flex-col ">
              <div className=" font-bold h-[300px] relative flex justify-center items-center bg-momos  bg-no-repeat bg-cover bg-center rounded-lg">
                <div className="absolute inset-0 bg-black opacity-20 rounded-lg "></div>
                <div className="absolute bg-transparent opacity-100 text-white flex justify-center items-center text-2xl ">
                  Youtube Video Backgrounds
                </div>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {youtubeVideoBg}
                </SyntaxHighlighter>
              </div>

              <div className="mt-4">
                <h2
                  className="text-2xl text-black"
                  style={{ fontFamily: "Merriweather,sans-serrif" }}
                >
                  Stylesheet
                </h2>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {stylesheet}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="mt-4">
                <h2
                  className="text-2xl text-black"
                  style={{ fontFamily: "Merriweather,sans-serrif" }}
                >
                  Javascript
                </h2>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {javascript}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 border h-fit sticky  top-[63px]"></div>
      </div>
    </div>
  );
};

export default Background;
