import About from "../../components/About/About";
import FullPageBg from "../../components/FullPageBg";
import MakeOrder from "../../components/MakeOrder";
import Testimonials from "../../components/testimonials/Testimonials";

const AboutPage = () => {
  return (
    <div className=" w-full flex flex-col mt-[60px] ">
      <FullPageBg heading="" subHeading="" />

      <About />
      <MakeOrder />
      <Testimonials />
    </div>
  );
};

export default AboutPage;
