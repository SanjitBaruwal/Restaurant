const HeaderStatic = () => {
  return (
    <div
      id="header-static"
      className=" h-[100vh] bg-white  w-full  flex xs:flex-col-reverse xs:top-[70px] md:top-[56px] xs:px-10 lg:px-0 md:flex-row justify-center items-center md:space-x-10 lg:space-x-24 xs:gap-10 md:gap-0 z-[0] "
    >
      <div className=" xs:w-full md:w-2/5 xs:h-fit md:h-[110%] flex items-center justify-center lg:bg-vector bg-left bg-no-repeat lg:bg-contain xl:bg-contain  sm:bg-none ">
        <div className="h-[450px] aspect-square xs:h-[250px] sm:h-[500px] md:h-[300px] lg:h-[400px] object-cover rotate-plate ">
          <img
            src="/plate.png"
            alt="Rotating Plate"
            className="rotate-move-in "
          />
        </div>
      </div>
      <div className="  xs:w-full md:w-3/5 xs:h-fit md:h-[110%]  flex items-center xs:justify-center  lg:pr-10 xl:pr-[12.5%] xs:pt-10  ">
        <div className="flex flex-col md:items-start justify-center space-y-3     xs:items-center">
          <div
            style={{
              fontFamily: "Merriweather, sans-serif",
              fontStyle: "normal",
            }}
            className="w-full text-center  "
          >
            <div className=" text-black md:text-3xl font-light xs:text-2xl lg:text-4xl  xs:text-center md:text-left ">
              The Spectacle <span className="font-bold">Before Us</span>
              <br />
              <span className="font-bold">Was Indeed </span> Sublime
            </div>
          </div>
          <div className="hidden md:block">
            <p className=" w-full  xl:max-w-[75%]">
              Apparently, we had reached a great height in the atmosphere, for
              the sky was a dead black, and which lifts the horizon of the sea
              to the level of the spectator on a hillside.
            </p>
          </div>
          <div className="  pt-6 flex md:flex-row  justify-start items-center gap-5 xs:flex-col sm:flex-row z-0">
            <div className=" border-2 border-[#ffc554] flex justify-center items-center rounded-[.375rem] bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear z-20">
              <a href="#menu">
                <button className="outline-none px-[3rem] py-[0.3125rem] font-bold flex space-x-2 ">
                  <div>ORDER</div> <div className="hidden lg:flex">ONLINE</div>
                </button>
              </a>
            </div>
            <div className="  border-2 border-[#ffc554] flex justify-center items-center rounded-[.375rem] text-[#ffc554] hover:text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear z-20">
              <a href="#location">
                <button className="outline-none px-[3rem] py-[0.3125rem] font-bold flex space-x-2">
                  <span className="hidden lg:flex">OUR</span>{" "}
                  <div>LOCATION</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStatic;
