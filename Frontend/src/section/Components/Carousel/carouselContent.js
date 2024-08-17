import deck0 from "/deck0.jpg";
import deck1 from "/deck1.jpg";
import deck2 from "/deck2.jpg";
import group1 from "/group1.jpg";
import group2 from "/group2.jpg";
import group3 from "/group3.jpg";

const basicCarousel = [
  {
    id: 1,
    img: deck0,
  },
  {
    id: 2,
    img: deck1,
  },
  {
    id: 3,
    img: deck2,
  },
];

const carouselWithCaptions = [
  {
    id: 1,
    img: group1,
    title: "Fist Slide Heading",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    img: group2,
    title: "Second Slide Heading",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    img: group3,
    title: "Thired Slide Heading",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default { basicCarousel, carouselWithCaptions };
