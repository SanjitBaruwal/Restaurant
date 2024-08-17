import MakeOrder from "../../components/MakeOrder";
import MenuItems from "../../components/MenuItem/MenuItems";
import CarouselImg from "../../components/Carousel/Carousel";

const Menu = () => {
  return (
    <div id="menu" className="pt-[110px] overflow-x-hidden w-full bg-white  ">
      <div>
        <div className="space-y-3">
          <h3 className="text-center text-[28px] leading-[28px] font-bold text-[#232E3C]">
            Menu
          </h3>
          <h1
            className="text-black md:text-3xl font-bold xs:text-2xl lg:text-4xl xs:text-center"
            style={{ fontFamily: "Merriweather,serif" }}
          >
            Taste Our Foods & Enjoy
          </h1>
        </div>

        <CarouselImg />
      </div>
      <MenuItems />
      <MakeOrder />
    </div>
  );
};

export default Menu;
