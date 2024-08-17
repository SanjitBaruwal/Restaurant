import ImgGallery from "../../../components/Gallery/ImgGallery";

const Catering = () => {
  return (
    <div className="py-[110px] px-10 lg:px-[5%] xl:px-[12.5%] bg-[#F9FAFD] flex flex-col item-center justify-start">
      <div className="space-y-9">
        <div className="space-y-3">
          <h3 className="text-center text-[28px] leading-[28px] font-bold text-[#232E3C]">
            Catering
          </h3>
          <h1
            className="text-black md:text-3xl font-bold xs:text-2xl lg:text-4xl xs:text-center"
            style={{ fontFamily: "Merriweather,serif" }}
          >
            We Manage Your Events
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="xs:w-full lg:w-[80%] xl:w-[65%] text-center">
            Allow our Chef to deliver the perfect private dinner or cocktail
            party experience in your home; or let us simply add a little extra
            flavor to your next office meeting, boat trip, or beach picnic. By
            partnering with our sibling location Rosewater Wine & Spirits, we
            can offer a full array of bar services and beverage selections.
            Email us to learn more.
          </p>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <div
          className="sm:w-[570px] sm:h-[592px] md:w-[640px] md:h-[620px] lg:w-[665px] lg:h-[238px] flex xs:flex-col lg:flex-row justify-center text-center xs:space-y-4 lg:space-y-0 p-2"
          style={{ boxShadow: "0px 0px 38px 5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="h-full flex-1 px-4">
            <img
              src="/pancake_PNG94.png"
              className="h-full w-full object-contain"
              alt="pancake"
            />
          </div>
          <div className="h-full flex-1 px-4 flex flex-col items-center justify-center gap-4">
            <p className="text-center text-lg font-bold">
              We Cater in Weddings, <br /> Corporate Functions <br />
              and Events
            </p>
            <div className="border-2 border-[#ffc554] rounded-[.375rem] bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear w-fit z-[1]">
              <a href="#contact">
                <button className="outline-none px-[3rem] py-[0.3125rem] font-bold">
                  HIRE US NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ImgGallery />
    </div>
  );
};

export default Catering;
