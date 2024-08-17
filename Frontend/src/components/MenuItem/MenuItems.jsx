import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdFreeBreakfast } from "react-icons/md";
import { PiForkKnifeBold } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { FaBirthdayCake, FaGlassCheers } from "react-icons/fa";
import items from "./menuItem";
import ResuableOrderModel from "../ResuableOrderModel";

const MenuItems = () => {
  const [activeTab, setActiveTab] = useState("Breakfast");
  const [showOrderModel, setShowOrderModel] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item

  const handleOrderModelClose = () => setShowOrderModel(false);
  const handleOrderModelShow = (item) => {
    setSelectedItem(item); // Set the selected item when clicked
    setShowOrderModel(true);
  };

  const tabs = ["Breakfast", "Lunch", "Dinner", "Desserts", "Drinks"];

  const container_variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.5,
      },
    },
  };

  const item_variants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.1,
      },
    }),
  };

  const eggvarient = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.5,
      },
    },
  };

  const bradeVarient = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <div className="xs:px-10 lg:px-[5%] xl:px-[12.5%] mt-[80px] space-y-7 bg-white">
      <div className="border-b-[4px] border-[#F9FAFD] flex justify-center items-end xs:gap-4 md:gap-0">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`flex flex-col justify-center items-center xs:px-2 sm:px-3 md:px-4 lg:px-5 py-3 border-b-2 cursor-pointer transition-all duration-500 linear ${
              activeTab === tab
                ? "border-[#FFD37F] text-black"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "Breakfast" && <MdFreeBreakfast size={24} />}
            {tab === "Lunch" && <PiForkKnifeBold size={24} />}
            {tab === "Dinner" && <GiHotMeal size={24} />}
            {tab === "Desserts" && <FaBirthdayCake size={24} />}
            {tab === "Drinks" && <FaGlassCheers size={24} />}
            <p className="font-bold text-[16px] hidden md:block">{tab}</p>
          </div>
        ))}
      </div>
      <div className="w-full relative bg-[#F9FAFD]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={container_variants}
            className=" py-28 grid xs:grid-cols-1 lg:grid-cols-3 justify-items-start align-items-start"
          >
            {items[activeTab].map((item, index) => (
              <motion.div
                key={item.id}
                className={`w-full ${
                  index % 3 !== 2 ? "lg:border-r-2 border-gray-200" : ""
                }`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
                variants={item_variants}
              >
                <div className={`flex flex-col justify-start mb-8 px-10`}>
                  <div
                    className="flex justify-between cursor-pointer gap-2"
                    onClick={() => handleOrderModelShow(item)}
                  >
                    <div className="flex justify-start flex-col items-left pr-2">
                      <h3
                        className="text-lg font-bold text-black"
                        style={{ fontFamily: "Merriweather, sans-serif" }}
                      >
                        {item.item.toUpperCase()}
                      </h3>
                      <p className="">{item.description}</p>
                    </div>
                    <span className="text-[#FF806E] font-bold">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="absolute top-0 right-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={eggvarient}
            >
              <img src="/egg.png" className="h-40 w-[200px]" />
            </motion.div>
            <motion.div
              className=" xs:hidden md:flex absolute bottom-0 left-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              variants={bradeVarient}
            >
              <img src="/bread.png" className="h-[100px] w-[420px]" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        {selectedItem && (
          <ResuableOrderModel
            show={showOrderModel}
            onHide={handleOrderModelClose}
            item={selectedItem}
          />
        )}
      </div>
    </div>
  );
};

export default MenuItems;
