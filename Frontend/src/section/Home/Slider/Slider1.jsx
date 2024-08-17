const Slider1 = () => {
  return (
    <div
      id="header-static"
      className=" overflow-hidden xs:pt-[100px]  xs:h-fit md:h-[100vh] w-full  flex xs:flex-col-reverse md:flex-row-reverse bg-[#FFFFFF] justify-center items-end gap-4 z-[0]  "
    >
      <div className=" xs:w-full md:w-2/5   xs:h-fit md:h-[93%] flex items-center justify-end  overflow-hidden">
        <img
          src="/group2.png"
          alt=""
          className=" xs:h-full sm:h-1/2 lg:h-full w-ful object-contain"
        />
      </div>
      <div className="  xs:w-full md:w-3/5 xs:h-fit  md:h-[93%]    p-10 md:pl-[8%] lg:pl-[5%] xl:pl-[12.5%] flex flex-col justify-center xs:items-center lg:items-start xs:gap-2 sm:gap-3 lg:gap-4">
        <h3 className="xs:text-lg md: text-2xl lg:text-3xl capitalize font-bold text-[#5E6E82]">
          come hungry.leave happy.
        </h3>
        <div
          className="xs:text-xl md:text-3xl lg:text-5xl text-black font-thin flex flex-col xs:items-center lg:items-start"
          style={{ fontFamily: "Merriweather" }}
        >
          <h1>
            Our food is <span className="font-black">Delicious!!</span>
          </h1>
          <h1>
            <span className="font-black">Grab</span> some napkins
          </h1>
          <h1 className="font-black">and Eat up.</h1>
        </div>

        <div className="mt-2 border-2 border-[#ffc554] flex justify-center items-center rounded bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear z-20">
          <button className="outline-none px-[3rem] py-[0.3125rem] font-bold flex space-x-2 ">
            <div>SEE OUR MENU</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
