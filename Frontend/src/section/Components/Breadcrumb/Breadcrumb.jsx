import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import ResuableHeader from "../../../components/ResuableHeader";
import { Breadcrumbs } from "@material-tailwind/react";

const Breadcrumb = () => {
  const breadcrumb = `<Breadcrumbs fullWidth className="bg-transparent">
    <a href="#">Home</a>
</Breadcrumbs>

<Breadcrumbs fullWidth separator=">>" className="bg-transparent">
    <a href="#" className=" text-[#FFAB08] hover:underline">Home</a>
    <a href="#">Library</a>
</Breadcrumbs>

<Breadcrumbs fullWidth separator=">>" className="bg-transparent">
    <a href="#" className=" text-[#FFAB08] hover:underline">Home</a>
    <a href="#" className="text-[#FFAB08] hover:underline">Library</a>
    <a href="#">Data</a>
</Breadcrumbs>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Breadcrumb"
            desc="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
            goto="BREADCRUMB ON TAILWIND"
            link="https://www.material-tailwind.com/docs/react/breadcrumbs"
          />
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Example
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Breadcrumbs fullWidth className="bg-transparent">
                  <a href="#">Home</a>
                </Breadcrumbs>
                <Breadcrumbs
                  fullWidth
                  separator=">>"
                  className="bg-transparent"
                >
                  <a href="#" className=" text-[#FFAB08] hover:underline">
                    Home
                  </a>
                  <a href="#">Library</a>
                </Breadcrumbs>
                <Breadcrumbs
                  separator=">>"
                  fullWidth
                  className="bg-transparent"
                >
                  <a href="#" className=" text-[#FFAB08] hover:underline">
                    Home
                  </a>
                  <a href="#" className="text-[#FFAB08] hover:underline">
                    Library
                  </a>
                  <a href="#">Data</a>
                </Breadcrumbs>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {breadcrumb}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
