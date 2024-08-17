import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import carouselContent from "./carouselContent";
import Carousel from "react-bootstrap/Carousel";
import ResuableHeader from "../../../components/ResuableHeader";

const Carousels = () => {
  const { basicCarousel, carouselWithCaptions } = carouselContent;
  const BasicExample = `<div class="carousel slide" id="carouselExampleControls" data-ride="carousel">
  <ol class="carousel-indicators">
    <li class="active" data-target="#carouselExampleControls" data-slide-to="0"></li>
    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner rounded">
    <div class="carousel-item active"><img class="d-block w-100" src="../assets/img/generic/6.jpg" alt="First slide" /></div>
    <div class="carousel-item"><img class="d-block w-100" src="../assets/img/generic/7.jpg" alt="Second slide" /></div>
    <div class="carousel-item"><img class="d-block w-100" src="../assets/img/generic/8.jpg" alt="Third slide" /></div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

`;

  const withCaptions = `<div class="carousel slide" id="carouselExampleCaptions" data-ride="carousel">
  <ol class="carousel-indicators">
    <li class="active" data-target="#carouselExampleCaptions" data-slide-to="0"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner rounded">
    <div class="carousel-item active"><img class="d-block w-100" src="../assets/img/generic/10.jpg" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-white">First Slide Heading</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="carousel-item"><img class="d-block w-100" src="../assets/img/generic/11.jpg" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-white">First Slide Heading</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="carousel-item"><img class="d-block w-100" src="../assets/img/generic/12.jpg" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-white">First Slide Heading</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

`;

  const fadeExample = `<div class="carousel slide carousel-fade" id="carouselExampleFade" data-ride="carousel">
  <div class="carousel-inner rounded">
    <div class="carousel-item active"><img class="d-block w-100" src="../assets/img/generic/8.jpg" alt="First slide" /></div>
    <div class="carousel-item"><img class="d-block w-100" src="../assets/img/generic/7.jpg" alt="Second slide" /></div>
    <div class="carousel-item"><img class="d-block w-100" src="../assets/img/generic/6.jpg" alt="Third slide" /></div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Carousel"
            desc="A slideshow component for cycling through elements—images or slides of text—like a carousel."
            goto="CAROUSELS ON BOOTSTRAP"
            link="https://getbootstrap.com/docs/4.3/components/carousel/"
          />
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{
                  fontFamily: "Merriweather, sans-serif",
                  textTransform: "capitalize",
                }}
              >
                Basic example
              </h2>
            </div>
            <div className="bg-[#F9FAFD]  px-4 flex flex-col gap-4">
              <Carousel className="rounded-lg overflow-hidden">
                {basicCarousel.map((item) => (
                  <Carousel.Item Key={item.id}>
                    <img src={item.img} alt={item.id} />
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="select-text mb-2">
                <SyntaxHighlighter language="html" style={dracula}>
                  {BasicExample}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{
                  fontFamily: "Merriweather, sans-serif",
                  textTransform: "capitalize",
                }}
              >
                With Captions
              </h2>
            </div>
            <div className="bg-[#F9FAFD]  px-4 flex flex-col gap-4">
              <Carousel className="rounded-lg overflow-hidden">
                {carouselWithCaptions.map((item) => (
                  <Carousel.Item key={item.id}>
                    <img src={item.img} alt={item.id} />

                    <Carousel.Caption>
                      <h3 className="text-2xl font-semibold ">{item.title}</h3>
                      <p>{item.desc}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="select-text mb-2">
                <SyntaxHighlighter language="html" style={dracula}>
                  {withCaptions}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <div className=" p-4 bg-white flex flex-col gap-2">
              <h2
                className="  text-xl  text-black"
                style={{
                  fontFamily: "Merriweather, sans-serif",
                  textTransform: "capitalize",
                }}
              >
                Fade Example
              </h2>
            </div>
            <div className="bg-[#F9FAFD]  px-4 flex flex-col gap-4">
              <Carousel fade className="rounded-lg overflow-hidden">
                {basicCarousel.map((item) => (
                  <Carousel.Item key={item.id}>
                    <img src={item.img} alt={item.id} />
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="select-text  mb-2">
                <SyntaxHighlighter language="html" style={dracula}>
                  {fadeExample}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
