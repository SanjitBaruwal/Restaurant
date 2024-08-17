import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { FancyTabs } from "fancy-tab";
import "fancy-tab/dist/css/fancy-tab.min.css";

import ResuableHeader from "../../../components/ResuableHeader";

const FancyTab = () => {
  const tabs = [
    { title: "Tab 1", content: <div>Content for Tab 1</div> },
    { title: "Tab 2", content: <div>Content for Tab 2</div> },
    { title: "Tab 3", content: <div>Content for Tab 3</div> },
  ];
  const example = `<div class="fancy-tab">
  <div class="fancy-bar justify-content-center">
    <div class="fancy-bar-item active">
      <span class="fas fa-home"></span>
      <div class="mt-1">Home</div>
    </div>
    <div class="fancy-bar-item">
      <span class="fas fa-user-circle"></span>
      <div class="mt-1">Profile</div>
    </div>
    <div class="fancy-bar-item">
      <span class="fas fa-cog"></span>
      <div class="mt-1">Settings</div>
    </div>
  </div>
  <div class="fancy-tab-contents">
    <div class="fancy-tab-content active">
      <p class="lead">Duis ac facilisis mauris. Pellentesque leo tortor, maximus sed gravida dapibus, suscipit non nisi. Duis ultrices diam a maximus imperdiet. Nam eu purus a erat tristique ornare. Donec condimentum tristique diam eu congue.</p>
    </div>
    <div class="fancy-tab-content">
      <p class="lead">Nullam sed tempus mauris, vitae pretium nibh. Nam pretium diam id massa mollis pretium. Aenean lacus massa, tristique id mauris ac, sollicitudin auctor neque. Cras laoreet nunc nibh, ac tristique orci rutrum quis. Nam luctus, sapien ligula finibus turpis.</p>
    </div>
    <div class="fancy-tab-content">
      <p class="lead">Vestibulum convallis diam id nibh tempus, ac scelerisque nulla congue. Cras laoreet nunc nibh, ac tristique orci rutrum quis. Sed eu tellus pharetra, scelerisque nulla in, vehicula libero. Curabitur interdum nec metus ante sed luctus. </p>
    </div>
  </div>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Fancy tab"
            desc="These modular elements can be readily used and customized in every layout across pages."
            goto="SEE documentation"
            link="https://humayunkabir.github.io/fancy-tab/"
          />

          <div className="flex flex-col gap-4 bg-white p-4 rounded-lg overflow-hidden shadow-md ">
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
              <h2
                className=" text-2xl"
                style={{ fontFamily: "Merriweather, sans-serif" }}
              >
                Example
              </h2>
              <p>
                Add class <span className="text-red-500">.active</span> to{" "}
                <span className="text-red-500">.fancy-bar-item</span> and
                corresponding
                <span className="text-red-500">.tab-content</span> which you
                want to show after page loading.
              </p>
            </div>
            {/* <div>
              <h1>My Fancy Tabs</h1>
              <FancyTabs tabs={tabs} />
            </div> */}
            <div className="select-text">
              <SyntaxHighlighter language="html" style={dracula}>
                {example}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyTab;
