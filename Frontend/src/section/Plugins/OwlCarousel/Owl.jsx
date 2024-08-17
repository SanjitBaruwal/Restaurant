import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./data";
const Owl = () => {
  const responsive = {
    small: {
      breakpoint: { max: 3000, min: 0 },
      items: 3,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["small"]}
      infinite={true}
      autoPlay={true}
    >
      {data.map((item) => (
        <div key={item.id} className="px-2">
          <img src={item.background} alt="" className="rounded-lg" />
        </div>
      ))}
    </Carousel>
  );
};

export default Owl;
