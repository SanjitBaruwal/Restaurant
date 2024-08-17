import { motion } from "framer-motion";
const MakeOrder = () => {
  const fried_varient = {
    hidden: {
      opacity: 0,
      height: "30%",
    },
    visible: {
      opacity: 1,
      height: "100%",
      transition: {
        type: "tween", // Use "tween" for linear animation
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  };
  return (
    <div className="mt-[120px] h-[278px] bg-[#0B1727] flex  md:flex-row-reverse lg:flex-row justify-center items-end md:gap-4">
      <motion.div
        className=" h-[120%]  xs:hidden  md:flex items-end justify-end "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.img
          src="/fried-clipart-transparent-background-7.png"
          alt="finger fry"
          className="h-full w-full object-contain"
          variants={fried_varient}
        />
      </motion.div>
      <div className="  flex flex-col gap-5 h-full justify-center xs:items-center md:items-start ">
        <div className="flex flex-col justify-center items-center md:items-start">
          <p
            className="text-[#ffc554] font-semibold text-lg"
            style={{ lineHeight: "18px" }}
          >
            Hungry ?
          </p>
          <h3
            className="text-[28px] font-light text-white"
            style={{ fontFamily: "Merriweather,sans-serif" }}
          >
            We will home deliver !
          </h3>
        </div>
        <div className=" border-2 border-[#ffc554] rounded-[.375rem] bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear w-fit z-[1]">
          <a href="#menu">
            <button className="outline-none px-[3rem] py-[0.3125rem] font-bold ">
              Make An Order
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
