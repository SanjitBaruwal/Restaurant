import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Typography = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Typography"
              desc="Documentation and examples for Restaurant-v1.0.0 typography, including global settings, headings, body text, lists, and special typographic element."
              goto="typography ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/content/typography/https://getbootstrap.com/docs/4.3/components/card/"
            />
          </div>
          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Font Family
              </h2>
              <p>
                You have three <span className="text-red-500">font-family</span>{" "}
                helper classes available to use.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div>
                  <div className="text-sans-serif font-bold text-xl">
                    Merriweather
                  </div>
                  <div className="text-base">Inconsolata</div>
                  <code className="text-monospace text-red-500">
                    SFMono-Regular
                  </code>{" "}
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="text-sans-serif">Merriweather</div>
<div class="text-base">Inconsolata</div>
<code class="text-monospace">SFMono-Regular</code>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Heading
              </h2>
              <p>
                <strong>theme</strong> has all the html headings,
                <span className="text-red-500"> {"<h1>"} </span>through{" "}
                <span className="text-red-500">{"<h6>"}</span>, styled for you.
                Also you can use <span className="text-red-500">.h1</span>{" "}
                through <span className="text-red-500">.h6</span> classes when
                you want to match the font styling of a heading but still want
                your text to be displayed inline.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div
                className="bg-[#F9FAFD] p-4 flex flex-col gap-4 "
                style={{ fontFamily: "roboto" }}
              >
                <h1 className="text-5xl  text-black">Heading 1</h1>
                <h2 className="text-4xl  text-black">Heading 2</h2>
                <h3 className="text-3xl  text-black">Heading 3</h3>
                <h4 className="text-2xl  text-black">Heading 4</h4>
                <h5 className="text-xl  text-black">Heading 5</h5>
                <h6 className="text-lg  text-black">Heading 6</h6>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Paragraphs
              </h2>
              <p>
                Following text are dummy copy text. Mellentesque cursus placerat
                hendrerit. Donec sed erat nulla. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Fusce vitae consequat erat. Quisque faucibus felis et fringilla
                imperdiet. Etiam at porttitor elit, quis convallis massa. Ut id
                risus sapien.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p>Your paragraph text goes here.</p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<p>Your paragraph text goes here.</p>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Lead Paragraph and Drop cap
              </h2>
              <p>
                Make a paragraph stand out by adding{" "}
                <span className="text-red-500">.lead</span> and for drop cap,
                use <span className="text-red-500">.dropcap</span> class.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="text-lg ">
                  <span className="dropcap">F</span>ollowing text are dummy copy
                  text. Mellentesque cursus placerat hendrerit. Donec sed erat
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Fusce vitae consequat
                  erat. Quisque faucibus felis et fringilla imperdiet. Etiam at
                  porttitor elit, quis convallis massa. Ut id risus sapien.
                </p>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<p class="dropcap lead">Following text are dummy copy text. Mellentesque cursus placerat hendrerit. Donec sed erat nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae consequat erat. Quisque faucibus felis et fringilla imperdiet. Etiam at porttitor elit, quis convallis massa. Ut id risus sapien.</p>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Font Weights
              </h2>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="font-weight-thin">{font-weight: 100 !important;}</div>
<div class="font-weight-extra-light">{font-weight: 200 !important;}</div>
<div class="font-weight-light">{font-weight: 300 !important;}</div>
<div class="font-weight-normal">{font-weight: 400 !important;}</div>
<div class="font-weight-medium">{font-weight: 500 !important;}</div>
<div class="font-weight-semi-bold">{font-weight: 600 !important;}</div>
<div class="font-weight-bold">{font-weight: 700 !important;}</div>
<div class="font-weight-extra-bold">{font-weight: 800 !important;}</div>
<div class="font-weight-black">{font-weight: 900 !important;}</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Colors
              </h2>
              <p>Use the following colors to change the text color</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="text-lg text-darkprimary">.text-primary</p>
                <p className="text-lg text-darkinfo">.text-info</p>
                <p className="text-lg text-darkprimary">.text-success</p>
                <p className="text-lg text-danger">.text-warning</p>
                <p className="text-lg text-black">.text-danger</p>
                <p className="text-lg text-darkdark">.text-black</p>
                <p className="text-lg text-darksecondary">.text-dark</p>
                <p className="text-lg text-gray-300">.text-300</p>
                <p className="text-lg text-gray-200 w-fit p-2 rounded-sm bg-gray-700">
                  .text-200
                </p>
                <p className="text-lg text-gray-100 w-fit p-2 rounded-sm bg-gray-800">
                  .text-light
                </p>
                <p className="text-lg text-white w-fit p-2 rounded-sm bg-gray-900">
                  .text-white
                </p>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<h5 class="text-primary">.text-primary</h5>
<h5 class="text-info">.text-info</h5>
<h5 class="text-success">.text-success</h5>
<h5 class="text-warning">.text-warning</h5>
<h5 class="text-danger">.text-danger</h5>
<h5 class="text-black">.text-black</h5>
<h5 class="text-dark">.text-dark</h5>
<h5 class="text-1000">.text-1000</h5>
<h5 class="text-900">.text-900</h5>
<h5 class="text-800">.text-800</h5>
<h5 class="text-700">.text-700</h5>
<h5 class="text-600">.text-600</h5>
<h5 class="text-500">.text-500</h5>
<h5 class="text-400">.text-400</h5>
<h5 class="text-300"><span class="bg-black">.text-300</span></h5>
<h5 class="text-200"><span class="bg-dark">.text-200</span></h5>
<h5 class="text-light"><span class="bg-1000">.text-light</span></h5>
<h5 class="text-white"><span class="bg-900">.text-white</span></h5>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Left Alignment
              </h2>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="text-left">
                  Following text are dummy copy text. Mellentesque cursus
                  placerat hendrerit. Donec sed erat nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Fusce vitae consequat erat. Quisque faucibus felis
                  et fringilla imperdiet. Etiam at porttitor elit, quis
                  convallis massa. Ut id risus sapien.
                </p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<p class="text-left">Following text are dummy copy text. Mellentesque cursus placerat hendrerit. Donec sed erat nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae consequat erat. Quisque faucibus felis et fringilla imperdiet. Etiam at porttitor elit, quis convallis massa. Ut id risus sapien.</p>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Right Alignment
              </h2>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="text-right">
                  Following text are dummy copy text. Mellentesque cursus
                  placerat hendrerit. Donec sed erat nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Fusce vitae consequat erat. Quisque faucibus felis
                  et fringilla imperdiet. Etiam at porttitor elit, quis
                  convallis massa. Ut id risus sapien.
                </p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<p class="text-right">Following text are dummy copy text. Mellentesque cursus placerat hendrerit. Donec sed erat nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae consequat erat. Quisque faucibus felis et fringilla imperdiet. Etiam at porttitor elit, quis convallis massa. Ut id risus sapien.</p>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                center Alignment
              </h2>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="text-center">
                  Following text are dummy copy text. Mellentesque cursus
                  placerat hendrerit. Donec sed erat nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Fusce vitae consequat erat. Quisque faucibus felis
                  et fringilla imperdiet. Etiam at porttitor elit, quis
                  convallis massa. Ut id risus sapien.
                </p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<p class="text-center">Following text are dummy copy text. Mellentesque cursus placerat hendrerit. Donec sed erat nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae consequat erat. Quisque faucibus felis et fringilla imperdiet. Etiam at porttitor elit, quis convallis massa. Ut id risus sapien.</p>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                justified
              </h2>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="text-justify">
                  Following text are dummy copy text. Mellentesque cursus
                  placerat hendrerit. Donec sed erat nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Fusce vitae consequat erat. Quisque faucibus felis
                  et fringilla imperdiet. Etiam at porttitor elit, quis
                  convallis massa. Ut id risus sapien.
                </p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<p class="text-justify">Following text are dummy copy text. Mellentesque cursus placerat hendrerit. Donec sed erat nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae consequat erat. Quisque faucibus felis et fringilla imperdiet. Etiam at porttitor elit, quis convallis massa. Ut id risus sapien.</p>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Transformation
              </h2>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p className="lowercase">lowercased text</p>
                <p className="uppercase">uppercase text</p>
                <p className="capitalize"> capitalize text</p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="text-lowercase">Lowercased text</div>
<div class="text-uppercase">Uppercased text</div>
<div class="text-capitalize">Capitalized text</div>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Inline styles
              </h2>
              <p>
                Use these tags for inline styling. Feel free to use
                <span className="text-red-500">{" <b>"}</span> and{" "}
                <span className="text-red-500">{"<em>"}</span> tags insted of{" "}
                <span className="text-red-500">{"<strong>"}</span> and
                <span className="text-red-500"> {"<i>"} </span>tags.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <p>
                  <mark>Highlight text</mark>
                </p>
                <p>
                  <del>Deleted text</del>
                </p>
                <p>
                  <u>Underlined text</u>
                </p>
                <p>
                  <small>Small text</small>
                </p>
                <p>
                  <strong>Bold text</strong>
                </p>
                <p>
                  <i>Italic text</i>
                </p>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<p>
  <mark>Highlight text</mark>
</p>
<p>
  <del>Deleted text</del>
</p>
<p>
  <u>Underlined text</u>
</p>
<p>
  <small>Small text</small>
</p>
<p>
  <strong>Bold text</strong>
</p>
<p>
  <i>Italic text</i>
</p>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Blockquotes
              </h2>

              <p>
                Use these tags for inline styling. Feel free to use
                <span className="text-red-500">{" <b>"}</span> and{" "}
                <span className="text-red-500">{"<em>"}</span> tags insted of{" "}
                <span className="text-red-500">{"<strong>"}</span> and
                <span className="text-red-500"> {"<i>"} </span>tags.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <blockquote className="blockquote space-y-3">
                  <p className="fs-2 text-800 font-italic">
                    Racing is life, everything before or after is just waiting.”
                  </p>
                  <footer className="blockquote-footer">Frank Zappa</footer>
                </blockquote>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<blockquote class="blockquote my-3">
  <p class="fs-2 text-800 font-italic">Racing is life, everything before or after is just waiting.”</p>
  <footer class="blockquote-footer">Frank Zappa</footer>
</blockquote>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  sm:col-span-1 shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Unordered List
              </h2>

              <p>
                A list of items in which the order does not explicitly matter.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <ul className="list-disc p-4">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul className="list-disc px-4">
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                </ul>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
</ul>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                ordered List
              </h2>

              <p>A list of items in which the order does explicitly matter.</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="p-4">
                  <ol className="list-decimal">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>
                      Nulla volutpat aliquam velit
                      <ol className="list-decimal px-4">
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                      </ol>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                  </ol>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
</ul>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2  sm:col-span-1 shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                unstyled List
              </h2>

              <p>
                Adding <span className="text-red-500">list-unstyled</span> class
                to <span className="text-red-500">ul</span> element will produce
                the following list style:
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="p-4">
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>
                      Nulla volutpat aliquam velit
                      <ul className="list-disc list-inside px-4 ">
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                      </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                  </ul>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
</ul>
`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1  shadow-md flex flex-col ">
            <div className="p-4 bg-white">
              <h2
                className="text-2xl  text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                checkmarked list
              </h2>

              <p>
                Adding <span className="text-red-500">styyle-check</span> class
                to <span className="text-red-500">ul</span> element will produce
                the following list style:
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="p-4">
                  <ul className="checklist">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>
                      Nulla volutpat aliquam velit
                      <ul className="checklist">
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                      </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                  </ul>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<ul class="style-check">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
</ul>
`}
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

export default Typography;
