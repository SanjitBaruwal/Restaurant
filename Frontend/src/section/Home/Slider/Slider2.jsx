const Slider2 = () => {
  return (
    <div
      id="header-static"
      className=" xs:pt-[50px]  h-[100vh] w-full  flex xs:flex-col-reverse md:flex-row-reverse bg-[#FFFFFF] justify-center items-center gap-4 z-[0]  "
    >
      <div className=" xs:w-full md:w-1/2 h-full flex items-center justify-center  ">
        <img
          src="/buger.png"
          alt=""
          className=" xs:h-full sm:h-[75%] w-ful object-contain"
        />
      </div>
      <div className="  xs:w-full md:w-1/2 xs:h-fit  md:h-[93%] p-10 md:pl-[8%] lg:pl-[5%] xl:pl-[12.5%] flex flex-col justify-center xs:items-center md:items-start xs:gap-2 sm:gap-3 lg:gap-4">
        <div
          className="xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-thin flex flex-col xs:items-center md:items-start"
          style={{ fontFamily: "Merriweather" }}
        >
          <h1>Fresh Takes on</h1>
          <h1>
            old <span className="font-black">Standards</span>
          </h1>
          <h1>
            A Place For <span className="font-black">Family</span>
          </h1>
        </div>
        <p className="hidden md:flex ">
          Whether part of a party of fifty or a party of two, your experience
          throughout our elegant, yet comfortable space is eventful. We are
          sharing our long-held Lebanese-Mediterranean traditions with a modern
          contemporary twist.
        </p>

        <div className="mt-4 border-2 border-[#ffc554] flex justify-center items-center rounded bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear z-20">
          <button className="outline-none px-[3rem] py-[0.3125rem] font-bold flex space-x-2 ">
            <div>BOOK NOW</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
