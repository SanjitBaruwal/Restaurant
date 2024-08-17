import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import { Carousel, Typography } from "@material-tailwind/react";
import items from "./flex";

const FlexSlider = () => {
  const eg = `<div class="flexslider text-center">
  <ul class="slides">
    <li class="text-center">
      <div class="bg-holder overlay rounded" style="background-image:url(../assets/img/gallery/big/1.jpg);"></div> <!--/.bg-holder-->
      <div class="row align-items-center min-vh-50">
        <div class="col">
          <h2 class="ls-1 text-white">We are smart</h2>
        </div>
      </div>
    </li>
    <li class="text-center">
      <div class="bg-holder overlay rounded" style="background-image:url(../assets/img/gallery/big/2.jpg);"></div> <!--/.bg-holder-->
      <div class="row align-items-center min-vh-50">
        <div class="col">
          <h2 class="ls-1 text-white">We are awesome</h2>
        </div>
      </div>
    </li>
    <li class="text-center">
      <div class="bg-holder overlay rounded" style="background-image:url(../assets/img/gallery/big/3.jpg);"></div> <!--/.bg-holder-->
      <div class="row align-items-center min-vh-50">
        <div class="col">
          <h2 class="ls-1 text-white">Take a breath</h2>
        </div>
      </div>
    </li>
  </ul>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Flexslider"
            desc=" The best responsive slider. Period."
            goto="see docs"
            link="https://themewagon.gitlab.io/zion-flexslider/"
          />

          <div
            className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white">Example</h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <Carousel loop className="rounded-xl">
                  {items.map((item) => (
                    <div key={item.id} className="relative h-[400px] w-full">
                      <img
                        src={item.img}
                        alt="image 1"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                          <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                          >
                            {item.title}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>

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

export default FlexSlider;
