import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Figures = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="figures"
              desc="Documentation and examples for displaying related images and text with the figure component in Bootstrap."
              goto="figures ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/content/figures/"
            />
          </div>
          <div className="col-span-2  shadow-md flex flex-col ">
            <p className=" p-4 bg-white">
              Anytime you need to display a piece of content—like an image with
              an optional caption, consider using a{" "}
              <span className="text-red-500">{" <figure>"}</span>
              Use the included <span className="text-red-500">.figure</span>,
              <span className="text-red-500">.figure-img</span> and{" "}
              <span className="text-red-500">.figure-caption</span> classes to
              provide some baseline styles for the HTML5{" <figure> "}and
              <span className="text-red-500">{" <figcaption>"}</span> elements.
              Images in figures have no explicit size, so be sure to add the
              .img-fluid class to your{" "}
              <span className="text-red-500">{"<img>"} </span>to make it
              responsive.
            </p>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <figure className="max-w-[25rem]">
                  <img className=" rounded" src="/card2.jpg" alt="..." />
                  <figcaption>A caption for the above image.</figcaption>
                </figure>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<figure class="figure" style="max-width: 25rem;">
  <img class="figure-img img-fluid rounded" src="../assets/img/generic/3.jpg" alt="..." />
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>`}
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

export default Figures;
