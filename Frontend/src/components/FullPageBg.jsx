const FullPageBg = ({ heading, subHeading }) => {
  return (
    <div className=" w-full h-[33vh] bg-fullpageBg bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center ">
      <h2
        className="text-3xl text-[#FFC554]"
        style={{ fontFamily: "Merriweather,sans-serif" }}
      >
        {heading}
      </h2>
      <p className="text-[white] uppercase">{subHeading}</p>
    </div>
  );
};

export default FullPageBg;
