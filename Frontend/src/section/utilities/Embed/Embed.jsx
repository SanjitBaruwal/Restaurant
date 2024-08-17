import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Embed = () => {
  const eg = `<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen=""></iframe>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Embed"
              desc="Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device."
              goto="EMBED ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/embed/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="felx flex-col gap-2 bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Example
              </h2>
              <p>
                Rules are directly applied to
                <span className="text-red-500"> &lt;iframe&gt;</span>,
                <span className="text-red-500"> &lt;embed&gt;</span>,
                <span className="text-red-500"> &lt;video&gt;</span>, and
                <span className="text-red-500"> &lt;object&gt;</span> elements;
                optionally use an explicit descendant class
                <span className="text-red-500"> .embed-responsive-item</span>
                when you want to match the styling for other attributes.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col  ">
                <iframe
                  height="400"
                  src="https://www.youtube.com/embed/zpOULjyy-n8"
                  title="REO Speedwagon - Can&#39;t Fight This Feeling (Official HD Video)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {eg}
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

export default Embed;
