import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./section/Pages/Home";
import Menu from "./section/Pages/Menu";
import Gallery from "./section/Pages/Gallery";
import AboutPage from "./section/Pages/AboutPage";
import ContactPage from "./section/Pages/ContactPage";
import Card from "./section/Components/Card/Card";
import Alerts from "./section/Components/Alerts/Alerts";
import Background from "./section/Components/Background/Background";
import Badges from "./section/Components/Badges/Badges";
import Breadcrumb from "./section/Components/Breadcrumb/Breadcrumb";
import Buttons from "./section/Components/Buttons/Buttons";
import Carousels from "./section/Components/Carousel/Carousels";
import Collapse from "./section/Components/Collapse/Collapse";
import Dropdowns from "./section/Components/Dropdowns/Dropdowns";
import FancyScroll from "./section/Components/Fancyscroll/FancyScroll";
import Forms from "./section/Components/Forms/Forms";
import Hoverbox from "./section/Components/Hoverbox/Hoverbox";
import Modals from "./section/Components/Modals/Modals";
import MediaObject from "./section/Components/Media object/MediaObject";
import Navs from "./section/Components/Navs/Navs";
import Navbars from "./section/Components/Navbar/Navbars";
import PageHeaders from "./section/Components/Page headers/PageHeaders";
import Paginations from "./section/Components/Pagination/Pagination";
import PopOvers from "./section/Components/Popovers/PopOvers";
import Progress from "./section/Components/Progress/Progress";
import Scrollspy from "./section/Components/Scrollspy/Scrollspy";
import Spinners from "./section/Components/Spinner/Spinner";
import Tables from "./section/Components/Tables/Tables";
import Tabss from "./section/Components/Tabs/Tabs";
import Tooltips from "./section/Components/Tooltips/Tooltips";
import Toasts from "./section/Components/Toasts/Toasts";
import ListGroups from "./section/Components/List group/ListGroup";
import SelfHostedVideo from "./section/Home/SelfHostedVideo";
import YoutubeBackground from "./section/Home/YoutubeBackground";
import HeaderSlider from "./section/Home/HeaderSlider";
import Borders from "./section/utilities/Borders/Borders";
import Clearfix from "./section/utilities/Clearfix/Clearfix";
import CloseIcon from "./section/utilities/CloseIcon/CloseIcon";
import Colors from "./section/utilities/Colors/Colors";
import Display from "./section/utilities/Display/Display";
import Embed from "./section/utilities/Embed/Embed";
import Flex from "./section/utilities/Flex/Flex";
import Figures from "./section/utilities/Figures/Figures";
import Grid from "./section/utilities/Grid/Grid";
import Sizing from "./section/utilities/Sizing/Sizing";
import Stretched from "./section/utilities/StretchedLink/Stretched";
import Spacing from "./section/utilities/Spacing/Spacing";
import Typography from "./section/utilities/Typography/Typography";
import VerticalAlign from "./section/utilities/VerticalAlign/VerticalAlign";
import Visibility from "./section/utilities/Visibility/Visibility";
import FancyTab from "./section/Plugins/Fancytab/FancyTab";
import FancyBox from "./section/Plugins/Fancybox/FancyBox";
import OwlCarousel from "./section/Plugins/OwlCarousel/OwlCarousel";
import FlexSlider from "./section/Plugins/Flexslider/FlexSlider";

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
      <Router>
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <div className="flex-grow bg-[#F9FAFD]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/header-static" element={<Home />} />
              <Route path="/self-hosted-video" element={<SelfHostedVideo />} />
              <Route
                path="/youtube-background"
                element={<YoutubeBackground />}
              />
              <Route path="/header-slider" element={<HeaderSlider />} />

              <Route path="/pages/menu" element={<Menu />} />
              <Route path="/pages/gallery" element={<Gallery />} />
              <Route path="/pages/about" element={<AboutPage />} />
              <Route path="/pages/contact" element={<ContactPage />} />
              <Route path="/components/cards" element={<Card />} />
              <Route path="/components/alert" element={<Alerts />} />
              <Route path="/components/background" element={<Background />} />
              <Route path="/components/badges" element={<Badges />} />
              <Route path="/components/breadcrumb" element={<Breadcrumb />} />
              <Route path="/components/buttons" element={<Buttons />} />
              <Route path="/components/carousel" element={<Carousels />} />
              <Route path="/components/collapse" element={<Collapse />} />
              <Route path="/components/dropdown" element={<Dropdowns />} />
              <Route path="/components/fancyscroll" element={<FancyScroll />} />
              <Route path="/components/forms" element={<Forms />} />
              <Route path="/components/hoverbox" element={<Hoverbox />} />
              <Route path="/components/listgroup" element={<ListGroups />} />
              <Route path="/components/modals" element={<Modals />} />
              <Route path="/components/mediaobject" element={<MediaObject />} />
              <Route path="/components/navs" element={<Navs />} />
              <Route path="/components/navbar" element={<Navbars />} />
              <Route path="/components/pageheader" element={<PageHeaders />} />
              <Route path="/components/pagination" element={<Paginations />} />
              <Route path="/components/popovers" element={<PopOvers />} />
              <Route path="/components/progress" element={<Progress />} />
              <Route path="/components/scrollspy" element={<Scrollspy />} />
              <Route path="/components/spinners" element={<Spinners />} />
              <Route path="/components/tables" element={<Tables />} />
              <Route path="/components/tabs" element={<Tabss />} />
              <Route path="/components/tooltips" element={<Tooltips />} />
              <Route path="/components/toasts" element={<Toasts />} />
              <Route path="/utilities/borders" element={<Borders />} />
              <Route path="/utilities/clearfix" element={<Clearfix />} />
              <Route path="/utilities/closeIcon" element={<CloseIcon />} />
              <Route path="/utilities/colors" element={<Colors />} />
              <Route path="/utilities/display" element={<Display />} />
              <Route path="/utilities/embed" element={<Embed />} />
              <Route path="/utilities/flex" element={<Flex />} />
              <Route path="/utilities/figures" element={<Figures />} />
              <Route path="/utilities/grid" element={<Grid />} />
              <Route path="/utilities/sizing" element={<Sizing />} />
              <Route path="/utilities/stretchedlink" element={<Stretched />} />
              <Route path="/utilities/spacing" element={<Spacing />} />
              <Route path="/utilities/typography" element={<Typography />} />
              <Route
                path="/utilities/verticalalign"
                element={<VerticalAlign />}
              />
              <Route path="/utilities/visibility" element={<Visibility />} />
              <Route path="/plugins/fancytab" element={<FancyTab />} />
              <Route path="/plugins/flexslider" element={<FlexSlider />} />
              <Route path="/plugins/owlcarousel" element={<OwlCarousel />} />
              <Route path="/plugins/fancybox" element={<FancyBox />} />
            </Routes>
            <ToastContainer
              position="top-right"
              theme="colored"
              transition:Flip
            />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
