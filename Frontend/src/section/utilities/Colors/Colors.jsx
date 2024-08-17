import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Colors = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Colors"
              desc="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
              goto="colors ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/colors/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Theme colors
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex w-full  flex-wrap">
                  <div className="bg-[#FFC554] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-primary</p>
                    <p>.bg-primary</p>
                  </div>
                  <div className="bg-[#748194] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-secondary</p>
                    <p>.bg-secondary</p>
                  </div>
                  <div className="bg-[#4CD964] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-success</p>
                    <p>.bg-success</p>
                  </div>
                  <div className="bg-[#5AC8FA] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-info</p>
                    <p>.bg-info</p>
                  </div>
                  <div className="bg-[#FFCC00] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-warning</p>
                    <p>.bg-warning</p>
                  </div>
                  <div className="bg-[#FF806E] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-danger</p>
                    <p>.bg-danger</p>
                  </div>
                  <div className="bg-light border w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-light</p>
                    <p>.bg-light</p>
                  </div>
                  <div className="bg-darkdark text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-dark</p>
                    <p>.bg-dark</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Gray shades
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex w-full  flex-wrap">
                  <div className="bg-[#000000] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-primary</p>
                    <p>.bg-primary</p>
                  </div>
                  <div className="bg-[#0B1727] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-secondary</p>
                    <p>.bg-secondary</p>
                  </div>
                  <div className="bg-[#232E3C] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-success</p>
                    <p>.bg-success</p>
                  </div>
                  <div className="bg-[#344050] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-info</p>
                    <p>.bg-info</p>
                  </div>
                  <div className="bg-[#4D5969] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-warning</p>
                    <p>.bg-warning</p>
                  </div>
                  <div className="bg-[#5E6E82] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-danger</p>
                    <p>.bg-danger</p>
                  </div>
                  <div className="bg-[#748194] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-light</p>
                    <p>.bg-light</p>
                  </div>
                  <div className="bg-[#9DA9BB] text-white w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-dark</p>
                    <p>.bg-dark</p>
                  </div>
                  <div className="bg-[#B6C1D2] text-black w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-dark</p>
                    <p>.bg-dark</p>
                  </div>
                  <div className="bg-[#D8E2EF] text-black w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-dark</p>
                    <p>.bg-dark</p>
                  </div>
                  <div className="bg-[#EDF2F9] text-black border w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-dark</p>
                    <p>.bg-dark</p>
                  </div>
                  <div className="bg-[#F9FAFD] text-black border w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-dark</p>
                    <p>.bg-dark</p>
                  </div>
                  <div className="bg-[#FFFFFF] text-black border w-1/4 aspect-square flex flex-col justify-center items-center ">
                    <p>.text-dark</p>
                    <p>.bg-dark</p>
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

export default Colors;
