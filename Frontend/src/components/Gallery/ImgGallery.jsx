import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gallery from "./gallery";

const ImgGallery = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Image: {
        zoom: true,
      },
      Hash: false,
    });
  }, []);
  return (
    <div className="mt-20">
      <div className="grid xs:grid-cols-3 xs:gap-3 md:gap-4 md:grid-cols-5">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            className={`overflow-hidden rounded-lg ${
              index === 0
                ? "xs:col-span-3 md:col-span-2 md:row-span-2"
                : "md:col-span-1"
            }`}
          >
            <a
              href={item.img}
              data-fancybox="gallery"
              data-caption={`Image Caption`}
              data-slug="cat"
            >
              <img
                src={item.img}
                alt={`Gallery ${item.id}`}
                className="object-cover w-full h-full cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
