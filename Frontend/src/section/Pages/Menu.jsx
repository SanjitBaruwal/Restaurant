import CarouselImg from "../../components/Carousel/Carousel";
import FullPageBg from "../../components/FullPageBg";
import MenuItems from "../../components/MenuItem/MenuItems";

const Menu = () => {
  return (
    <div className=" w-full flex flex-col mt-[60px] ">
      <FullPageBg
        heading="Our Menu"
        subHeading="The various dishes are waiting for your coming to enjoy its"
      />

      <MenuItems />

      <div className=" pb-20">
        <CarouselImg />
      </div>
    </div>
  );
};

export default Menu;
