import ResuableHeader from "../../../components/ResuableHeader";

const Grid = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Grid"
              desc="Use Bootstrap's powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes"
              goto="grid ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/layout/grid/"
            />
          </div>
          <div className="col-span-2 shadow-md flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Grid options
              </h2>
              <p>
                While Bootstrap uses{" "}
                <span className="text-red-500">
                  .col-, .col-sm-, .col-md-, .col-lg- and .col-xl-
                </span>
                , we introduced a new breakpoint,
                <span className="text-red-500"> .col-xxl-</span> for the massive
                screen size.
              </p>
            </div>

            <div className="bg-[#F9FAFD] p-4  ">
              <div className="overflow-auto">
                <table className=" min-w-full border ">
                  <thead>
                    <tr>
                      <th className="border p-2"></th>
                      <th className="border-b border-r p-2 text-left">
                        Extra small
                        <br />
                        &lt;576px
                      </th>
                      <th className="border-b border-r p-2 text-left">
                        Small
                        <br />
                        ≥576px
                      </th>
                      <th className="border-b border-r p-2 text-left">
                        Medium
                        <br />
                        ≥768px
                      </th>
                      <th className="border-b border-r p-2 text-left">
                        Large
                        <br />
                        ≥992px
                      </th>
                      <th className="border-b border-r p-2 text-left">
                        Extra large
                        <br />
                        ≥1200px
                      </th>
                      <th className="border-b border-r p-2 text-left">
                        Massive
                        <br />
                        ≥1540px
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-gray-100">
                      <td className="font-bold border p-2 col-span-4">
                        Max container width
                      </td>
                      <td className="border-b border-r p-2">None (auto)</td>
                      <td className="border-b border-r p-2">540px</td>
                      <td className="border-b border-r p-2">720px</td>
                      <td className="border-b border-r p-2">960px</td>
                      <td className="border-b border-r p-2">1140px</td>
                      <td className="border-b border-r p-2">1480px</td>
                    </tr>
                    <tr className="even:bg-gray-100">
                      <td className="font-bold border p-2">Class prefix</td>
                      <td className="border-b border-r p-2 text-red-500">
                        .col-
                      </td>
                      <td className="border-b border-r p-2 text-red-500">
                        .col-sm-
                      </td>
                      <td className="border-b border-r p-2 text-red-500">
                        .col-md-
                      </td>
                      <td className="border-b border-r p-2 text-red-500">
                        .col-lg-
                      </td>
                      <td className="border-b border-r p-2 text-red-500">
                        .col-xl-
                      </td>
                      <td className="border-b border-r p-2 text-red-500">
                        .col-xxl-
                      </td>
                    </tr>
                    <tr className="even:bg-gray-100">
                      <td className="font-bold border p-2"># of columns</td>
                      <td className="border-b  p-2">12</td>
                    </tr>
                    <tr className="even:bg-gray-100 ">
                      <td className="font-bold border p-2">Gutter width</td>
                      <td className="border-b p-2 " colSpan="6">
                        30px (15px on each side of a column)
                      </td>
                    </tr>
                    <tr className="even:bg-gray-100">
                      <td className=" font-bold border p-2">Nestable</td>
                      <td className="border-b p-2" colSpan={6}>
                        Yes
                      </td>
                    </tr>
                    <tr className="even:bg-gray-100">
                      <td className=" font-bold border p-2  ">
                        Column ordering
                      </td>
                      <td className="border-b p-2  bg-gray-100">Yes</td>
                      <td className="border-b p-2"></td>
                      <td className="border-b p-2"></td>
                      <td className="border-b p-2"></td>
                      <td className="border-b p-2"></td>
                      <td className="border-b p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
