import { useEffect, useRef, useState } from "react";
import ResuableHeader from "../../../components/ResuableHeader";
import scrollIds from "./scrollIds";
const Scrollspy = () => {
  const [activeId, setActiveId] = useState("");
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      itemsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute("id");
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Scrollspy"
              desc="Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport."
              goto="    SCROLLSPY BARS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/scrollspy/"
            />
          </div>

          <div className="  col-span-2 bg-white p-4   shadow-md  flex gap-2 rounded ">
            <div className=" py-32  sticky  top-0">
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#home"
                    className={`text-text ${
                      activeId === "home"
                        ? "text-black font-bold"
                        : "text-blue-500"
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#profile"
                    className={`text-text ${
                      activeId === "profile"
                        ? "text-black font-bold"
                        : "text-blue-500"
                    }`}
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#messages"
                    className={`text-text ${
                      activeId === "messages"
                        ? "text-black font-bold"
                        : "text-blue-500"
                    }`}
                  >
                    Messages
                  </a>
                </li>
                <li>
                  <a
                    href="#settings"
                    className={`text-text ${
                      activeId === "settings"
                        ? "text-black font-bold"
                        : "text-blue-500"
                    }`}
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {scrollIds.map((item, i) => (
                <div key={item.id} id={item.id} className={`px-4 `}>
                  <h1
                    className="text-3xl  text-black"
                    style={{ fontFamily: "Merriweather" }}
                    ref={(el) => (itemsRef.current[i] = el)}
                  >
                    {item.heading}
                  </h1>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollspy;
