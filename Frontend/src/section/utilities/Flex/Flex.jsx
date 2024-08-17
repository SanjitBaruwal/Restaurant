import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Flex = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Flex"
              desc="Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary."
              goto="Flex ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/flex/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Enable flex behaviors
              </h2>
              <p>
                Apply <span className="text-red-500">display</span> utilities to
                create a flexbox container and transform direct children
                elements into flex items. Flex containers and items are able to
                be modified further with additional flex properties.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <div className="bg-[#EDF2F9] px-4 py-2">Flex container</div>
                  <div className="bg-[#EDF2F9] w-fit px-4 py-2">
                    Inline flexbox container !
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex p-2 bg-200 mb-2">Flexbox container!</div>
<div class="d-inline-flex p-2 bg-200">Inline flexbox container!</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Direction
              </h2>
              <p>
                Use <span className="text-red-500">.flex-row</span> to set a
                horizontal direction (the browser default), or .flex-row-reverse
                to start the horizontal direction from the opposite side.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <div className="bg-[#EDF2F9] flex justify-start">
                    <div className="px-2 py-3 border-1 border-[#BEB7C6] bg-[#D8E2EF]">
                      Flex item 1
                    </div>
                    <div className="px-2 py-3 border-1 border-[#BEB7C6] bg-[#D8E2EF]">
                      Flex item 2
                    </div>
                    <div className="px-2 py-3 border-1 border-[#BEB7C6] bg-[#D8E2EF]">
                      Flex item 3
                    </div>
                  </div>
                  <div className="bg-[#EDF2F9]  flex justify-end">
                    <div className="px-2 py-3 border-1 border-[#BEB7C6] bg-[#D8E2EF]">
                      Flex item 1
                    </div>
                    <div className="px-2 py-3 border-1 border-[#BEB7C6] bg-[#D8E2EF]">
                      Flex item 2
                    </div>
                    <div className="px-2 py-3 border-1 border-[#BEB7C6] bg-[#D8E2EF]">
                      Flex item 3
                    </div>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex bg-200 mb-3 flex-row">
  <div class="p-2 bg-300 border border-400">Flex item 1</div>
  <div class="p-2 bg-300 border border-400">Flex item 2</div>
  <div class="p-2 bg-300 border border-400">Flex item 3</div>
</div>
<div class="d-flex bg-200 mb-3 flex-row-reverse">
  <div class="p-2 bg-300 border border-400">Flex item 1</div>
  <div class="p-2 bg-300 border border-400">Flex item 2</div>
  <div class="p-2 bg-300 border border-400">Flex item 3</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
                <p>
                  Use <span className="text-red-500">.flex-column</span> to set
                  a vertical direction, or
                  <span className="text-red-500">.flex-column-reverse</span> to
                  start the vertical direction from the opposite side
                </p>
                <div className="bg-[#EDF2F9]  flex flex-col ">
                  <div className="px-2 py-3 border-[1px] border-[#BEB7C6] bg-[#D8E2EF]">
                    Flex item 1
                  </div>
                  <div className="px-2 py-3 border-[1px] border-[#BEB7C6] bg-[#D8E2EF]">
                    Flex item 2
                  </div>
                  <div className="px-2 py-3 border-[1px] border-[#BEB7C6] bg-[#D8E2EF]">
                    Flex item 3
                  </div>
                </div>
                <div className="bg-[#EDF2F9]  flex flex-col-reverse ">
                  <div className="px-2 py-3 border-[1px] border-[#BEB7C6] bg-[#D8E2EF]">
                    Flex item 1
                  </div>
                  <div className="px-2 py-3 border-[1px] border-[#BEB7C6] bg-[#D8E2EF]">
                    Flex item 2
                  </div>
                  <div className="px-2 py-3 border-[1px] border-[#BEB7C6] bg-[#D8E2EF]">
                    Flex item 3
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex bg-200 mb-3 flex-column">
  <div class="p-2 bg-300 border border-400">Flex item 1</div>
  <div class="p-2 bg-300 border border-400">Flex item 2</div>
  <div class="p-2 bg-300 border border-400">Flex item 3</div>
</div>
<div class="d-flex bg-200 mb-3 flex-column-reverse">
  <div class="p-2 bg-300 border border-400">Flex item 1</div>
  <div class="p-2 bg-300 border border-400">Flex item 2</div>
  <div class="p-2 bg-300 border border-400">Flex item 3</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Justify Content
              </h2>
              <p>
                Use justify-content utilities on flexbox containers to change
                the alignment of flex items on the main axis (the x-axis to
                start, y-axis if flex-direction: column). Choose from start
                (browser default), end, center, between, or around.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <div className=" space-y-2">
                    <div className="bg-[#EDF2F9] flex justify-start">
                      <div className="px-2 py-3 bg-[#D8E2EF]  w-fit border  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EDF2F9]">
                      <div className="px-2 py-3 bg-[#D8E2EF] flex  w-fit border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                    <div className="flex justify-end bg-[#EDF2F9]">
                      <div className="px-2 py-3 bg-[#D8E2EF] flex  w-fit border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                    <div className="flex justify-start bg-[#EDF2F9]">
                      <div className="px-2 py-3 bg-[#D8E2EF] flex  w-fit border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EDF2F9]">
                      <div className="px-2 py-3 bg-[#D8E2EF] flex  w-fit border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex justify-content-start bg-200 mb-2">
  <div class="p-2 bg-300 border border-400">Flex Item</div>
</div>
<div class="d-flex justify-content-end bg-200 mb-2">
  <div class="p-2 bg-300 border border-400">Flex Item</div>
</div>
<div class="d-flex justify-content-center bg-200 mb-2">
  <div class="p-2 bg-300 border border-400">Flex Item</div>
</div>
<div class="d-flex justify-content-between bg-200 mb-2">
  <div class="p-2 bg-300 border border-400">Flex Item</div>
</div>
<div class="d-flex justify-content-around bg-200 mb-2">
  <div class="p-2 bg-300 border border-400">Flex Item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                With align items
              </h2>
              <p>
                Vertically move one flex item to the top or bottom of a
                container by mixing align-items, flex-direction: column , and
                margin-top: auto or margin-bottom: auto.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <div className=" space-y-2">
                    <div className="bg-[#EDF2F9] flex h-28 item-start">
                      <div className="px-2 pb-3 bg-[#D8E2EF] h-fit  border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                    <div className=" h-28 flex items-center  bg-[#EDF2F9]">
                      <div className="px-2 pb-3 h-fit bg-[#D8E2EF]   border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                    <div className="flex h-28 items-end bg-[#EDF2F9]">
                      <div className="px-2 pb-3 h-fit bg-[#D8E2EF]    border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>

                    <div className="flex h-28 items-center bg-[#EDF2F9]">
                      <div className="px-2 pb-3 h-full bg-[#D8E2EF]   border-1  border-[#BEB7C6]">
                        Flex Item
                      </div>
                    </div>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex align-items-start bg-200 mb-2" style="height: 5rem;">
  <div class="p-2 bg-300 border border-400">Flex item </div>
</div>
<div class="d-flex align-items-end bg-200 mb-2" style="height: 5rem;">
  <div class="p-2 bg-300 border border-400">Flex item </div>
</div>
<div class="d-flex align-items-center bg-200 mb-2" style="height: 5rem;">
  <div class="p-2 bg-300 border border-400">Flex item </div>
</div>
<div class="d-flex align-items-baseline bg-200 mb-2" style="height: 5rem;">
  <div class="p-2 bg-300 border border-400">Flex item </div>
</div>
<div class="d-flex align-items-stretch bg-200 mb-2" style="height: 5rem;">
  <div class="p-2 bg-300 border border-400">Flex item </div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                align self
              </h2>
              <p>
                Use align-self utilities on flexbox items to individually change
                their alignment on the cross axis (the y-axis to start, x-axis
                if flex-direction: column). Choose from the same options as
                align-items: start, end, center, baseline, or stretch (browser
                default).
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="  space-y-2">
                  <div className="bg-[#EDF2F9] flex h-28 items-start">
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-full   border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-fit   border-1  border-[#BEB7C6]">
                      Align self start
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-full   border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                  </div>
                  <div className="bg-[#EDF2F9] flex h-28 items-end">
                    <div className="px-2 pb-3 bg-[#D8E2EF]  h-full  border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-fit   border-1  border-[#BEB7C6]">
                      Align self start
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-full   border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                  </div>
                  <div className="bg-[#EDF2F9] flex h-28 items-center">
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-full   border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-fit   border-1  border-[#BEB7C6]">
                      Align self start
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF] h-full   border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                  </div>

                  <div className="bg-[#EDF2F9] flex h-28">
                    <div className="px-2 pb-3 bg-[#D8E2EF]   border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF]    border-1  border-[#BEB7C6]">
                      Align self start
                    </div>
                    <div className="px-2 pb-3 bg-[#D8E2EF]   border-1  border-[#BEB7C6]">
                      Flex Item
                    </div>
                  </div>
                </div>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex bg-200 mb-2" style="height: 5rem;">
  <div class="border border-400 p-2 bg-300">Flex Item</div>
  <div class="border border-400 p-2 bg-300 align-self-start">Align self start</div>
  <div class="border border-400 p-2 bg-300">Flex Item</div>
</div>
<div class="d-flex bg-200 mb-2" style="height: 5rem;">
  <div class="border border-400 p-2 bg-300">Flex Item</div>
  <div class="border border-400 p-2 bg-300 align-self-end">Align self end</div>
  <div class="border border-400 p-2 bg-300">Flex Item</div>
</div>
<div class="d-flex bg-200 mb-2" style="height: 5rem;">
  <div class="border border-400 p-2 bg-300">Flex Item</div>
  <div class="border border-400 p-2 bg-300 align-self-center">Align self center</div>
  <div class="border border-400 p-2 bg-300">Flex Item</div>
</div>
<div class="d-flex bg-200 mb-2" style="height: 5rem;">
  <div class="border border-400 p-2 bg-300">Flex Item</div>
  <div class="border border-400 p-2 bg-300 align-self-baseline">Align self baseline</div>
  <div class="border border-400 p-2 bg-300">Flex Item</div>
</div>
<div class="d-flex bg-200 mb-2" style="height: 5rem;">
  <div class="border border-400 p-2 bg-300">Flex Item</div>
  <div class="border border-400 p-2 bg-300 align-self-stretch">Align self stretch</div>
  <div class="border border-400 p-2 bg-300">Flex Item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Fill
              </h2>
              <p>
                Use the .flex-fill class on a series of sibling elements to
                force them into widths equal to their content (or equal widths
                if their content does not surpass their border-boxes) while
                taking up all available horizontal space.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="bg-[#EDF2F9] flex items-start">
                  <div className="px-2 py-2 bg-[#D8E2EF] flex-grow justify-center flex    border-1  border-[#BEB7C6]">
                    Flex item with a lot of content
                  </div>
                  <div className="px-2 py-2 bg-[#D8E2EF]  flex-grow justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2 bg-[#D8E2EF] flex-grow justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex bg-200">
  <div class="p-2 flex-fill bg-300 border border-400">Flex item with a lot of content</div>
  <div class="p-2 flex-fill bg-300 border border-400">Flex item</div>
  <div class="p-2 flex-fill bg-300 border border-400">Flex item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Grow and shrink
              </h2>
              <p>
                Use .flex-grow-* utilities to toggle a flex item’s ability to
                grow to fill available space. In the example below, the
                .flex-grow-1 elements uses all available space it can, while
                allowing the remaining two flex items their necessary space.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="bg-[#EDF2F9] flex items-start">
                  <div className="px-2 py-2 flex-grow   justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2 flex-shrink justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex bg-200">
  <div class="p-2 w-100 bg-300 border border-400">Flex item</div>
  <div class="p-2 flex-shrink-1 bg-300 border border-400">Flex item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Auto margins
              </h2>
              <p>
                Flexbox can do some pretty awesome things when you mix flex
                alignments with auto margins. Shown below are three examples of
                controlling flex items via auto margins: default (no auto
                margin), pushing two items to the right (.mr-auto), and pushing
                two items to the left (.ml-auto).
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="bg-[#EDF2F9] flex ">
                  <div className="px-2 py-2    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="bg-[#EDF2F9] flex">
                  <div className="px-2 py-2 mr-auto    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="bg-[#EDF2F9] flex">
                  <div className="px-2 py-2    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 ml-auto  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex bg-200 mb-2">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex bg-200 mb-2">
  <div class="mr-auto p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex bg-200 mb-2">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="ml-auto p-2 bg-300 border border-400">Flex item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Auto margins
              </h2>
              <p>
                Flexbox can do some pretty awesome things when you mix flex
                alignments with auto margins. Shown below are three examples of
                controlling flex items via auto margins: default (no auto
                margin), pushing two items to the right (.mr-auto), and pushing
                two items to the left (.ml-auto).
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="bg-[#EDF2F9] flex  flex-col h-[200px]">
                  <div className="px-2 py-2 w-fit mb-auto    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="bg-[#EDF2F9] flex flex-col  items-end h-[200px]">
                  <div className="px-2 py-2 w-fit mb-auto    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex flex-column bg-200 mb-3 align-items-start" style="height: 200px;">
  <div class="mb-auto p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex flex-column bg-200 mb-3 align-items-end" style="height: 200px;">
  <div class="mb-auto p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Wrap
              </h2>
              <p>
                Change how flex items wrap in a flex container. Choose from no
                wrapping at all (the browser default) with .flex-nowrap,
                wrapping with .flex-wrap, or reverse wrapping with
                .flex-wrap-reverse.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="bg-[#EDF2F9] flex   w-[150px] ">
                  <div className="px-2 py-2 w-fit mb-auto    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="bg-[#EDF2F9] flex flex-wrap   ">
                  <div className="px-2 py-2 w-fit mb-auto    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>
                <div className="bg-[#EDF2F9] flex flex-wrap-reverse   ">
                  <div className="px-2 py-2 w-fit mb-auto    justify-center flex border-1  border-[#BEB7C6]">
                    Flex item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                  <div className="px-2 py-2 w-fit  justify-center flex border-1  border-[#BEB7C6]">
                    Flex Item
                  </div>
                </div>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex flex-nowrap mb-3 bg-200 border border-300 py-3" style="width: 8rem">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex mb-3 bg-200 border border-300 flex-wrap">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex mb-3 bg-200 border border-300 flex-wrap-reverse">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Order
              </h2>
              <p>
                Change the visual order of specific flex items with a handful of
                order utilities. We only provide options for making an item
                first or last, as well as a reset to use the DOM order. As order
                takes any integer value (e.g., 5), add custom CSS for any
                additional values needed.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="bg-[#EDF2F9] flex items-start">
                  <div className="px-2 py-2 order-3 bg-[#D8E2EF]  justify-center flex    border-1  border-[#BEB7C6]">
                    First flex item
                  </div>
                  <div className="px-2 py-2 order-2 bg-[#D8E2EF]   justify-center flex border-1  border-[#BEB7C6]">
                    Second Flex item
                  </div>
                  <div className="px-2 py-2 order-1 bg-[#D8E2EF]  justify-center flex border-1  border-[#BEB7C6]">
                    Third Flex Item
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex flex-nowrap bg-200">
  <div class="order-3 p-2 bg-300 border border-400">First flex item</div>
  <div class="order-2 p-2 bg-300 border border-400">Second flex item</div>
  <div class="order-1 p-2 bg-300 border border-400">Third flex item</div>
</div>`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4 ">
              <h2
                className="text-2xl text-black capitalize"
                style={{ fontFamily: "Merriweather" }}
              >
                Align content
              </h2>
              <p>
                Use align-content utilities on flexbox containers to align flex
                items together on the cross axis. Choose from start (browser
                default), end, center, between, around, or stretch. To
                demonstrate these utilities, we’ve enforced flex-wrap: wrap and
                increased the number of flex items.
              </p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-3 ">
                <div className="bg-[#EDF2F9] flex align-content-start flex-wrap h-[300px] w-full">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 bg-[#D8E2EF]   flex justify-center items-center border-1 border-[#BEB7C6] m-0"
                    >
                      Flex item
                    </div>
                  ))}
                </div>
                <div className="bg-[#EDF2F9] flex align-content-center flex-wrap h-[300px] w-full">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 bg-[#D8E2EF]   flex justify-center items-center border-1 border-[#BEB7C6] m-0"
                    >
                      Flex item
                    </div>
                  ))}
                </div>
                <div className="bg-[#EDF2F9] flex align-content-end flex-wrap h-[300px] w-full">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 bg-[#D8E2EF]   flex justify-center items-center border-1 border-[#BEB7C6] m-0"
                    >
                      Flex item
                    </div>
                  ))}
                </div>
                <div className="bg-[#EDF2F9] flex align-content-between flex-wrap h-[300px] w-full">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 bg-[#D8E2EF]   flex justify-center items-center border-1 border-[#BEB7C6] m-0"
                    >
                      Flex item
                    </div>
                  ))}
                </div>
                <div className="bg-[#EDF2F9] flex align-content-around flex-wrap h-[300px] w-full">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 bg-[#D8E2EF]  flex justify-center items-center border-1 border-[#BEB7C6] m-0"
                    >
                      Flex item
                    </div>
                  ))}
                </div>
                <div className="bg-[#EDF2F9] flex align-content-stretch flex-wrap h-[300px] w-full">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 bg-[#D8E2EF]  flex justify-center items-center border-1 border-[#BEB7C6] m-0"
                    >
                      Flex item
                    </div>
                  ))}
                </div>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {`<div class="d-flex flex-wrap bg-200 mb-3 align-content-start" style="height: 300px;">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex flex-wrap bg-200 mb-3 align-content-center" style="height: 300px;">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex flex-wrap bg-200 mb-3 align-content-end" style="height: 300px;">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex flex-wrap bg-200 mb-3 align-content-between" style="height: 300px;">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex flex-wrap bg-200 mb-3 align-content-around" style="height: 300px;">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>
<div class="d-flex flex-wrap bg-200 mb-3 align-content-stretch" style="height: 300px;">
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
  <div class="p-2 bg-300 border border-400">Flex item</div>
</div>`}
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

export default Flex;
