import FullPageBg from "../../components/FullPageBg";
import ImgGallery from "../../components/Gallery/ImgGallery";

const Gallery = () => {
  return (
    <div className=" w-full flex flex-col mt-[60px] ">
      <FullPageBg heading="Gallery" subHeading="Take a look inside " />
      <div className="pb-[110px] px-10 lg:px-[5%] xl:px-[12.5%] space-y-7 ">
        <ImgGallery />
      </div>
    </div>
  );
};

export default Gallery;
