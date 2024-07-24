import founders from "./founder";
const About = () => {
  return (
    <div
      className="py-[110px]    relative flex justify-start px-10 lg:px-[5%] xl:px-[12.5%] xs:bg-hidden lg:bg-soup bg-no-repeat   bg-right bg-cover "
      style={{ backgroundSize: "40%" }}
    >
      <div className="flex flex-1  flex-col space-y-9">
        <div className="space-y-3 flex flex-col items-start">
          <h3 className="text-center text-[28px] leading-[28px] font-bold text-[#232E3C]">
            About Us
          </h3>
          <h1
            className="text-black md:text-3xl font-bold xs:text-2xl lg:text-4xl xs:text-center"
            style={{ fontFamily: "Merriweather,serif" }}
          >
            Who Are We ?
          </h1>
        </div>
        <div>
          <p className=" w-full">
            Apparently, we had reached a great height in the atmosphere, for the
            sky was a dead black, and which lifts the horizon of the sea to the
            level of the spectator on a hillside.
          </p>
        </div>
        <div className=" border-2 border-[#ffc554] rounded-[.375rem] bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear w-fit z-[1]">
          <button className="outline-none px-[3rem] py-[0.3125rem] font-bold ">
            LEARN MORE
          </button>
        </div>

        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="   px-2  flex flex-col gap-3 items-center"
            >
              <div className="  w-[100%] aspect-square rounded-full overflow-hidden">
                <img
                  src={founder.img}
                  alt="founder_img"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className=" flex flex-col items-center justify-center gap-1">
                <h3
                  className="text-xl  font-bold "
                  style={{ textTransform: "capitalize" }}
                >
                  {founder.name}
                </h3>
                <p
                  className=" text-[16px] leading-[16px]"
                  style={{ textTransform: "capitalize" }}
                >
                  {founder.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden  lg:flex   flex-1"></div>
    </div>
  );
};

export default About;
