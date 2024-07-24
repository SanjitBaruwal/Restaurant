import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { ImMap } from "react-icons/im";
import { MdCall } from "react-icons/md";
import Map from "./Map";

const Contact = () => {
  const greenVarient = {
    hidden: {
      opacity: 0,
      left: -100,
    },
    visible: {
      opacity: 1,
      left: 0,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.5,
      },
    },
  };
  return (
    <div className="  w-full bg-[#F9FAFD]  ">
      <div className=" py-[110px] relative " id="contact">
        <motion.div
          className=" xs:hidden lg:flex  absolute left-0 bottom-0 h-[110%]  z-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={greenVarient}
        >
          <img
            src="/green.png"
            className=" w-full h-full object-contain object-left "
            alt=""
          />
        </motion.div>
        <div className="space-y-3  relativez-10">
          <h3 className="text-center text-[28px] leading-[28px] font-bold text-[#232E3C]">
            Catering
          </h3>
          <h1
            className="text-black md:text-3xl font-bold xs:text-2xl lg:text-4xl xs:text-center"
            style={{ fontFamily: "Merriweather,serif" }}
          >
            Contact with us
          </h1>
        </div>

        <div className=" relative mt-20 px-10 lg:px-[5%] xl:px-[12.5%] grid xs:grid-cols-1 lg:grid-cols-3 gap-4 z-10 ">
          <div
            className="bg-white h-[232px]   flex  justify-start xs:pl-10 sm:pl-20 lg:pl-10 items-center rounded-lg"
            style={{ boxShadow: `0px 0px 15px 5px rgba(0,0,0,0.1)` }}
          >
            <div className="w-full   flex flex-col gap-5">
              <div className="flex justify-start gap-4 ">
                <ImMap size={24} color="#FF806E" />
                <div className="text-[16px] leading-[16px] font-medium">
                  Av. Paz Soldán 290, San <br /> Isidro, Lima 27 - Peru
                </div>
              </div>
              <div className="  flex justify-start gap-4 ">
                <MdCall
                  color="#FF806E"
                  size={24}
                  className="rotate-[270deg]  "
                />
                <div className="text-[16px] leading-[16px] font-medium hover:underline cursor-pointer">
                  +511 442-2777
                </div>
              </div>
              <div className="flex justify-start gap-4  items-start">
                <HiMail color="#FF806E" size={24} />
                <div className="text-[16px] leading-[16px] font-medium hover:underline cursor-pointer">
                  mail@restaurantpro.com
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white h-[232px] flex  justify-start xs:pl-10 sm:pl-20 lg:pl-10 items-center rounded-lg"
            style={{ boxShadow: `0px 0px 15px 5px rgba(0,0,0,0.1)` }}
          >
            <div className="w-full   flex flex-col gap-5">
              <h2 className="text-[#FF806E] text-[18px] font-bold">
                Hours of service
              </h2>
              <div className=" text-[16px]">
                <h3 className="text-black">Monday to Saturday</h3>
                <h3>1:00 pm - 3:00 pm and</h3>
                <h3>7:00 pm - 11:00 pm</h3>
              </div>
              <div className=" text-[16px]">
                <div className="text-black">Sunday</div>
                <div>12:30 pm - 3:30 pm</div>
              </div>
            </div>
          </div>
          <div
            className="bg-white h-[232px] flex  justify-start xs:pl-10 sm:pl-20 lg:pl-10 items-center rounded-lg"
            style={{ boxShadow: `0px 0px 15px 5px rgba(0,0,0,0.1)` }}
          >
            <div className="  w-full flex flex-col gap-5">
              <div>
                <h2 className="text-[#FF806E] text-[18px] font-bold">
                  Telephone support:
                </h2>
                <div className=" text-[16px]">
                  <h3 className="text-black">Monday to Saturday from</h3>
                  <h3>9:00 am to 9:00 pm </h3>
                </div>
              </div>
              <div className="bg-[#FF806E] hover:bg-[#FF5E48] w-fit  justify-center items-center rounded-[.375rem] text-[#fff] text-lg cursor-pointer transition duration-300 ease-linear z-20 ">
                <button className="outline-none xs:px-[1rem] sm:px-[2rem] md:px-[3rem] py-[0.3125rem] font-bold ">
                  MAKE A RESERVATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
