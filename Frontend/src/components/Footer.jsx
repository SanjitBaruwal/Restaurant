import { motion } from "framer-motion";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  const forkVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        type: "tween",
        ease: "linear",
        duration: 1,
      },
    },
  };
  return (
    <div className="w-full xs:h-[85vh] md:h-[50vh] z-10  ">
      <div className="  bg-[#0B1727] xs:h-[90%] md:h-4/5 w-full  px-10 lg:px-[5%] xl:px-[12.5%] flex xs:items-center md:items-end z-0">
        <div className=" flex justify-start items-start gap-4  flex-1  px-[15px] z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={forkVariant}
            className="h-[245px] w-[125px] px-[15px] xs:hidden md:flex z-10"
          >
            <img
              src="/pngfood2.png"
              className="w-full h-full object-fit"
              alt=""
            />
          </motion.div>
          <div className="px-[15px]   w-full xs:h-fit md:h-[245px]  flex xs:flex-col xs:justify-start md:flex-row md:justify-between items-start xs:gap-16 lg:gap-16 md:gap-4 ">
            <div className="flex flex-col gap-4  flex-1  ">
              <img src="/logo.png" className="w-[137px] h-[35px]" alt="" />
              <div
                className="text-white text-2xl"
                style={{ fontFamily: "Merriweather,sans-serig" }}
              >
                Want To Taste <br />
                Our Food?
              </div>
              <div className=" w-fit  flex justify-center items-center rounded-[.375rem] bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear z-20">
                <button className=" w-fit outline-none xs:px-[2rem]  lg:px-[3rem] py-[0.3125rem] font-bold flex space-x-2 ">
                  ORDER ONLINE
                </button>
              </div>
            </div>
            <div className="flex xs:flex-1  md:flex-[2] items-start h-fit ">
              <div className="flex items-start  gap-4 flex-1 justify-center h-full ">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-lg font-bold">ABOUT</h1>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Hire Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start   gap-4 flex-1 justify-center h-full ">
                {/* <div className="  h-full flex items-center">
                  <div className="border border-[#232E3C] h-1/2"></div>
                </div> */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-lg font-bold">RESOURCES</h1>
                  <ul>
                    <li>
                      <a href="#">Term</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                  <ul className="flex justify-start items-center gap-2">
                    <li>
                      <a href="#">
                        <RiFacebookFill />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <RiInstagramFill />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineGooglePlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTripadvisor />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000] xs:h-[10%] md:h-1/5 flex justify-center items-center gap-2 px-10 lg:px-[5%] xl:px-[12.5%] z-20">
        <div className=" text-md font-bold">
          Made With <span className="text-yellow-400">♥</span> By
        </div>
        <div className="text-white text-md">
          <a href="https://themewagon.com/">Themewagon</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
