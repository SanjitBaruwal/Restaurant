// import HeaderStatic from "../Home/HeaderStatic";
import Menu from "../Menu/Menu";
import About from "../../components/About/About";
import Catering from "./catering/Catering";
import Contact from "../../components/contact/Contact";
import Form from "../../components/Form/Form";
import Testimonials from "../../components/testimonials/Testimonials";
import HeaderStatic from "../Home/HeaderStatic";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <HeaderStatic />
      <Menu />
      <Catering />
      <About />
      <Contact animation={true} />
      <Form />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
