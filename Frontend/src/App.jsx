import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeaderStatic from "./section/Home/HeaderStatic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import Menu from "./section/Menu/Menu";
import Catering from "./section/Pages/catering/Catering";
import About from "./section/Pages/About/About";
import Contact from "./section/Pages/contact/Contact";
import Form from "./section/Pages/Form/Form";
import Testimonials from "./section/Pages/testimonials/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const fadeOutTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // Duration of the fade-out animation

      return () => clearTimeout(fadeOutTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader className={fadeOut ? "fade-out" : ""} />;
  }
  return (
    <>
      <Navbar />
      <HeaderStatic />
      <Menu />
      <Catering />
      <About />
      <Contact />
      <Form />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
