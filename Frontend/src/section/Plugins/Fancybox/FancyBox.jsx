import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const FancyBox = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Image: {
        zoom: true,
      },
      Hash: false,
    });
  }, []);
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="fancybox"
            desc="jQuery lightbox script for displaying images, videos and more. Touch enabled, responsive and fully customizable."
            goto="flexbox documentation"
            link="#"
          />

          <div
            className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white">Example</h2>
            <div className="flex flex-col gap-2  p-4  ">
              <div className="bg-[#F9FAFD] p-4 grid grid-cols-2 gap-2  ">
                <div className="flex flex-col">
                  <a
                    href="/2.jpg"
                    data-fancybox="gallery"
                    data-caption={`Image Caption`}
                    data-slug="cat"
                  >
                    <img
                      src="/2.jpg"
                      alt="gallery"
                      className="object-cover w-full h-full cursor-pointer rounded"
                    />
                  </a>
                  <div className="select-text">
                    <SyntaxHighlighter language="html" style={dracula}>
                      {`<a href="../assets/img/gallery/thumb/2.jpg" data-fancybox data-caption="Image caption">
  <img class="rounded w-100" src="../assets/img/gallery/thumb/2.jpg" alt="">
</a>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white">Gallery</h2>
            <div className="flex flex-col gap-2 bg-white p-4  ">
              <div className=" bg-[#F9FAFD]  p-4 gap-2  ">
                <div className="grid grid-cols-3 gap-2  w-full">
                  <a
                    href="/1.jpg"
                    data-fancybox="gallery"
                    data-caption={`Image Caption`}
                    data-slug="cat"
                  >
                    <img
                      src="/1.jpg"
                      alt="gallery"
                      className="object-cover w-full h-full cursor-pointer rounded"
                    />
                  </a>
                  <a
                    href="/4.jpg"
                    data-fancybox="gallery"
                    data-caption={`Image Caption`}
                    data-slug="cat"
                  >
                    <img
                      src="/4.jpg"
                      alt="gallery"
                      className="object-cover w-full h-full cursor-pointer rounded"
                    />
                  </a>
                  <a
                    href="/3.jpg"
                    data-fancybox="gallery"
                    data-caption={`Image Caption`}
                    data-slug="cat"
                  >
                    <img
                      src="/3.jpg"
                      alt="gallery"
                      className="object-cover w-full h-full cursor-pointer rounded"
                    />
                  </a>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="row no-gutters">
  <div class="col-4 px-1"><a href="../assets/img/gallery/thumb/1.jpg" data-fancybox="gallery" data-caption="Image caption"><img class="rounded w-100" src="../assets/img/gallery/thumb/1.jpg" alt="" /></a></div>
  <div class="col-4 px-1"><a href="../assets/img/gallery/thumb/4.jpg" data-fancybox="gallery" data-caption="Image caption"><img class="rounded w-100" src="../assets/img/gallery/thumb/4.jpg" alt="" /></a></div>
  <div class="col-4 px-1"><a href="../assets/img/gallery/thumb/3.jpg" data-fancybox="gallery" data-caption="Image caption"><img class="rounded w-100" src="../assets/img/gallery/thumb/3.jpg" alt="" /></a></div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white">Stylesheet</h2>
            <div className="flex flex-col gap-2 bg-white p-4  ">
              <div className=" bg-[#F9FAFD]  p-4 gap-2  ">
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<link href="assets/lib/fancybox/jquery.fancybox.min.css" rel="stylesheet">`}
                  </SyntaxHighlighter>
                </div>
              </div>
              <h2 className="p-4 text-2xl bg-white">Javascript</h2>
              <div className=" bg-[#F9FAFD]  p-4 gap-2  ">
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<script src="assets/lib/fancybox/jquery.fancybox.min.js"></script>`}
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

export default FancyBox;
