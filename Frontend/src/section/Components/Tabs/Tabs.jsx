import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import data from "./data";
// import Nav from "react-bootstrap/Nav";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
const Tabss = () => {
  const [activeTab, setActiveTab] = useState("html");
  const tab1 = ` <Tabs value={activeTab}>
  <TabsHeader
    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
    indicatorProps={{
      className:
        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
    }}
  >
    {data.map(({ label, value }) => (
      <Tab
        key={value}
        value={value}
        onClick={() => setActiveTab(value)}
        className={activeTab === value ? "text-gray-900" : ""}
      >
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody>
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
        {desc}
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>`;

  const tab2 = `<Tabs id="custom-animation" value="html">
  <TabsHeader>
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody
    animate={{
      initial: { y: 250 },
      mount: { y: 0 },
      unmount: { y: 250 },
    }}
  >
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
        {desc}
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Tabs"
              desc="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
              goto="POPOVERS ON TAILWIND"
              link="https://www.material-tailwind.com/docs/react/tabs"
            />
          </div>
          <div className="col-span-2 lg:col-span-1   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Underline Tabs
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Tabs value={activeTab}>
                  <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                  >
                    {data.map(({ label, value }) => (
                      <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                      >
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody>
                    {data.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                        {desc}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {tab1}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Custom Tabs Animation
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Tabs id="custom-animation" value="html">
                  <TabsHeader
                    className="bg-[#F1F3F6] text-text"
                    indicatorProps={{
                      className: "bg-white shadow-none  ",
                    }}
                  >
                    {data.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody
                    animate={{
                      initial: { y: 250 },
                      mount: { y: 0 },
                      unmount: { y: 250 },
                    }}
                    className="border-t"
                  >
                    {data.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                        {desc}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {tab2}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabss;
