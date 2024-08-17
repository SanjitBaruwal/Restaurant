import ResuableHeader from "../../../components/ResuableHeader";

const Spacing = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Spacing"
              desc="Spacing utilities that apply to all breakpoints, from xs to xxl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."
              goto="spaing ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/utilities/spacing/"
            />
          </div>
          <div className="col-span-2 bg-white rounded  shadow-md flex flex-col ">
            <div className="flex flex-col gap-2 ">
              <div className=" p-4 flex flex-col gap-4 ">
                <div className="container mx-auto p-4">
                  <p className="mb-4">
                    The classes are named using the format{" "}
                    <span className="text-red-500">
                      {"{property}{sides}-{size}"}
                    </span>{" "}
                    for <span className="text-red-500">xs</span> and{" "}
                    <span className="text-red-500">
                      {"{property}{sides}-{breakpoint}-{size}"}
                    </span>{" "}
                    for <span className="text-red-500">sm, md, lg, xl</span> and{" "}
                    <span className="text-red-500">xxl</span>.
                  </p>
                  <p className="mb-4">
                    Where <span className="text-red-500">property</span> is one
                    of:
                    <ul className="list-disc ml-6">
                      <li>
                        <span className="text-red-500">m</span> - for classes
                        that set <span className="text-red-500">margin</span>
                      </li>
                      <li>
                        <span className="text-red-500">p</span> - for classes
                        that set <span className="text-red-500">padding</span>
                      </li>
                    </ul>
                  </p>
                  <p className="mb-4">
                    Where <span className="text-red-500">sides</span> is one of:
                    <ul className="list-disc ml-6">
                      <li>
                        <span className="text-red-500">t</span> - for classes
                        that set{" "}
                        <span className="text-red-500">margin-top</span> or{" "}
                        <span className="text-red-500">padding-top</span>
                      </li>
                      <li>
                        <span className="text-red-500">b</span> - for classes
                        that set{" "}
                        <span className="text-red-500">margin-bottom</span> or{" "}
                        <span className="text-red-500">padding-bottom</span>
                      </li>
                      <li>
                        <span className="text-red-500">l</span> - for classes
                        that set{" "}
                        <span className="text-red-500">margin-left</span> or{" "}
                        <span className="text-red-500">padding-left</span>
                      </li>
                      <li>
                        <span className="text-red-500">r</span> - for classes
                        that set{" "}
                        <span className="text-red-500">margin-right</span> or{" "}
                        <span className="text-red-500">padding-right</span>
                      </li>
                      <li>
                        <span className="text-red-500">x</span> - for classes
                        that set both{" "}
                        <span className="text-red-500">*-left</span> and{" "}
                        <span className="text-red-500">*-right</span>
                      </li>
                      <li>
                        <span className="text-red-500">y</span> - for classes
                        that set both{" "}
                        <span className="text-red-500">*-top</span> and{" "}
                        <span className="text-red-500">*-bottom</span>
                      </li>
                      <li>
                        <span className="text-red-500">blank</span> - for
                        classes that set a{" "}
                        <span className="text-red-500">margin</span> or{" "}
                        <span className="text-red-500">padding</span> on all 4
                        sides of the element
                      </li>
                    </ul>
                  </p>
                  <p>
                    Where <span className="text-red-500">size</span> is one of:{" "}
                    <span className="text-red-500">
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 & auto
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spacing;
