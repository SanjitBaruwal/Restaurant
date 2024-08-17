import { GoChevronRight } from "react-icons/go";

const ResuableHeader = ({ title, desc, goto, link, shadow = "md" }) => {
  return (
    <div
      className={`bg-white  p-4 pb-8 rounded-lg shadow-${shadow} flex flex-col gap-3`}
    >
      <h2
        className="text-3xl text-black capitalize "
        style={{ fontFamily: "Merriweather, sans-serif" }}
      >
        {title}
      </h2>
      <p>{desc}</p>
      <a
        href={link}
        target="_blank"
        className="uppercase flex font-medium text-md leading-[24px]  items-center text-[#FFAB08] hover:underline"
      >
        {goto}
        {goto && (
          <span className="ml-1">
            <GoChevronRight />
          </span>
        )}
      </a>
    </div>
  );
};

export default ResuableHeader;
