import Menu from "../Menu/Menu";
import About from "../../components/About/About";
import Contact from "../../components/contact/Contact";
import Form from "../../components/Form/Form";
import Testimonials from "../../components/testimonials/Testimonials";
import Catering from "../Pages/catering/Catering";
import Footer from "../../components/Footer";
const YoutubeBackground = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative right-0 flex items-center justify-center h-[100vh]  z-0">
        <div className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden">
          <video
            src="https://cdn.pixabay.com/video/2017/08/29/11619-231571922_large.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
        <div className="xs:p-10 lg:p-0 xs:w-full lg:w-[250px]  aspect-square z-10">
          <img
            src="/logo-banner.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <Menu />
      <Catering />
      <About />
      <Contact animation={true} />
      <Form />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default YoutubeBackground;
