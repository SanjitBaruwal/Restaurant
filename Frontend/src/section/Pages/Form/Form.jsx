import { FaCheck } from "react-icons/fa";

const Form = () => {
  return (
    <div className="py-[110px]   w-full bg-[#F9FAFD] px-10 lg:px-[5%] xl:px-[12.5%]">
      <div id="#form">
        <div className="space-y-3 flex flex-col items-center justify-center">
          <h3
            className="text-black md:text-3xl font-bold xs:text-2xl lg:text-4xl xs:text-center"
            style={{ fontFamily: "Merriweather,serif" }}
          >
            Feel free to drop us a line!
          </h3>
          <p className=" xs:w-full text-center lg:w-[60%] lg:px-6">
            Let's talk if you have any query or suggestion. We are open to learn
            from you. So don't hesitate to reach us anytime.
          </p>
        </div>
        <form className="  mt-20 grid xs:grid-cols-1 md:grid-cols-2  gap-4 ">
          <div className="  grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-white px-8 py-2 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none  focus:ring-4 focus:ring-[#FBECD3]"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="bg-white px-8 py-2 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-white px-8 py-2 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            <div className="flex items-center  w-fit  h-fit py-1  ">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center  rounded-full cursor-pointer"
                  htmlFor="ripple-on"
                  data-ripple-dark="true"
                >
                  <input
                    id="ripple-on"
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[[#D8E2EF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-transparent checked:bg-[#FFC554] focus:outline-none focus:ring-4 focus:ring-[#FBECD3] focus:border-transparent   hover:before:opacity-10"
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1S"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className=" ms-4  text-xl font-medium cursor-pointer select-none"
                  htmlFor="ripple-on"
                >
                  Send me a Copy
                </label>
              </div>
            </div>
          </div>
          <div
            className="
           grid grid-cols-1 grid-rows-4 gap-4 "
          >
            <div className="row-span-3">
              <textarea
                type="text"
                placeholder="Type your message here "
                className="bg-white h-full w-full px-8 py-2 border-2 border-[#D8E2EF] rounded-lg resize-none focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3] "
              />
            </div>
            <div className=" w-fit h-fit bg-[#0B1727] flex justify-center items-center rounded-[.375rem] text-white hover:bg-[#000] cursor-pointer transition duration-300 ease-linear z-20">
              <button
                type="submit"
                className="outline-none px-[3rem] py-[0.3125rem]  font-bold flex space-x-2"
              >
                GIVE US A SHOT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
