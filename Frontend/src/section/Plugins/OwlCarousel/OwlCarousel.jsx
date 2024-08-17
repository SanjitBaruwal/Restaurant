import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import Owl from "./Owl";

const OwlCarousel = () => {
  const eg = `<div class="row overflow-hidden">
  <div class="col-12">
    <div class="owl-carousel owl-theme owl-dots-inner" data-options='{"margin":10,"nav":true,"autoplay":true,"loop":true,"dots":false,"items":3}'>
      <img class="rounded" src="../assets/img/gallery/big/1.jpg" alt="">
      <img class="rounded" src="../assets/img/gallery/big/2.jpg" alt="">
      <img class="rounded" src="../assets/img/gallery/big/3.jpg" alt="">
    </div>
  </div>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Owl-carousel"
            desc="Documentation and examples for opt-in styling of image slider with Owl Caorusel."
            goto="Owlcarousel documentation"
            link="https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html"
          />

          <div
            className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white text-black">Owl Carousel</h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4  ">
                <div>
                  <Owl />
                  <div className="select-text">
                    <SyntaxHighlighter language="html" style={dracula}>
                      {eg}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <div className="">
                  <h2 className=" text-2xl text-black">StyleSheet</h2>
                  <div className="select-text">
                    <SyntaxHighlighter language="html" style={dracula}>
                      {`<link href="assets/lib/owl.carousel/owl.carousel.css" rel="stylesheet">`}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <div className="">
                  <h2 className=" text-2xl text-black">Javascript</h2>
                  <div className="select-text">
                    <SyntaxHighlighter language="html" style={dracula}>
                      {`<script src="assets/lib/owl.carousel/owl.carousel.js"></script>`}
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

export default OwlCarousel;
