import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import ResuableHeader from "../../../components/ResuableHeader";

const Badges = () => {
  const contextualVariations = `<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>`;

  const PillBadges = `<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>`;

  const softBadges = `<span class="badge badge-soft-primary">Primary</span>
<span class="badge badge-soft-secondary">Secondary</span>
<span class="badge badge-soft-success">Success</span>
<span class="badge badge-soft-info">Info</span>
<span class="badge badge-soft-warning">Warning</span>
<span class="badge badge-soft-danger">Danger</span>
<span class="badge badge-soft-light">Light</span>
<span class="badge badge-soft-dark">Dark</span>`;

  const softPillBadges = `<span class="badge badge-pill badge-soft-primary">Primary</span>
<span class="badge badge-pill badge-soft-secondary">Secondary</span>
<span class="badge badge-pill badge-soft-success">Success</span>
<span class="badge badge-pill badge-soft-info">Info</span>
<span class="badge badge-pill badge-soft-warning">Warning</span>
<span class="badge badge-pill badge-soft-danger">Danger</span>
<span class="badge badge-pill badge-soft-light">Light</span>
<span class="badge badge-pill badge-soft-dark">Dark</span>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Badges"
            desc="Documentation and examples for badges, our small count and labeling component."
            goto="BADGES ON BOOTSTRAP"
            link="https://getbootstrap.com/docs/4.3/components/badge/"
          />
          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Contextual variations
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <button className="px-2 py-1 rounded-md font-bold text-['#4D5969'] bg-[#FFC554]">
                  Primary
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-white bg-[#748194]">
                  Secondary
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-white bg-[#4CD964]">
                  Success
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-white bg-[#5AC8FA]">
                  Info
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-['#4D5969'] bg-[#FFCC00]">
                  Warning
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-white bg-[#FF806E]">
                  Danger
                </button>
                <button className="px-2 py-1 rounded-md font-bold  bg-light">
                  Light
                </button>
                <button className="px-4 py-1 rounded-md font-bold text-white bg-[#0B1727]">
                  Dark
                </button>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {contextualVariations}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Pill badges
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <button className="px-2 py-1 rounded-full font-bold text-[#4D5969] bg-[#FFC554]">
                  Primary
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-white bg-[#748194]">
                  Secondary
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-white bg-[#4CD964]">
                  Success
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-white bg-[#5AC8FA]">
                  Info
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-['#4D5969'] bg-[#FFCC00]">
                  Warning
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-white bg-[#FF806E]">
                  Danger
                </button>
                <button className="px-2 py-1 rounded-full font-bold  bg-light">
                  Light
                </button>
                <button className="px-4 py-1 rounded-full font-bold text-white bg-[#0B1727]">
                  Dark
                </button>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {PillBadges}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Soft badges
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <button className="px-2 py-1 rounded-md font-bold text-[#FFC554] bg-primary">
                  Primary
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-['#748194'] bg-secondary">
                  Secondary
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-[#4CD964] bg-success">
                  Success
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-[#5AC8FA] bg-info">
                  Info
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-['#FFCC00'] bg-warning">
                  Warning
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-[#FF806E] bg-danger">
                  Danger
                </button>
                <button className="px-2 py-1 rounded-md font-bold text-[##9FA0A2] bg-light">
                  Light
                </button>
                <button className="px-4 py-1 rounded-md font-bold text-[#0B1727] bg-dark">
                  Dark
                </button>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {softBadges}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md ">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Soft Pill badges
            </h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <button className="px-2 py-1 rounded-full font-bold text-[#FFC554] bg-primary">
                  Primary
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-['#748194'] bg-secondary">
                  Secondary
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-[#4CD964] bg-success">
                  Success
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-[#5AC8FA] bg-info">
                  Info
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-['#FFCC00'] bg-warning">
                  Warning
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-[#FF806E] bg-danger">
                  Danger
                </button>
                <button className="px-2 py-1 rounded-full font-bold text-[##9FA0A2] bg-light">
                  Light
                </button>
                <button className="px-4 py-1 rounded-full font-bold text-[#0B1727] bg-dark">
                  Dark
                </button>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {softPillBadges}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
