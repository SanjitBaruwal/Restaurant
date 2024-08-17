import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "./Slider/Slider1";
import HeaderStatic from "./HeaderStatic";
import Slider2 from "./Slider/Slider2";
import Menu from "../Menu/Menu";
import About from "../../components/About/About";
import Contact from "../../components/contact/Contact";
import Form from "../../components/Form/Form";
import Testimonials from "../../components/testimonials/Testimonials";
import Catering from "../Pages/catering/Catering";
import Footer from "../../components/Footer";
const HeaderSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        data-bs-theme="dark"
        activeIndex={index}
        indicators={false}
        fade
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <HeaderStatic />
        </Carousel.Item>
        <Carousel.Item>
          <Slider1 />
        </Carousel.Item>
        <Carousel.Item>
          <Slider2 />
        </Carousel.Item>
      </Carousel>
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

export default HeaderSlider;
