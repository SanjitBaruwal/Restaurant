import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
const Tables = () => {
  const exmaple = `<table class="table">
  <thead class="undefined">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th class="white-space-nowrap" scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Steven</td>
      <td>Speilberg</td>
      <td class="white-space-nowrap">@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Martin</td>
      <td>Scorsese</td>
      <td class="white-space-nowrap">@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>Cameron</td>
      <td class="white-space-nowrap">@twitter</td>
    </tr>
  </tbody>
</table>`;

  const dark = `<table class="table table-dark">
  <thead class="undefined">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th class="white-space-nowrap" scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Steven</td>
      <td>Speilberg</td>
      <td class="white-space-nowrap">@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Martin</td>
      <td>Scorsese</td>
      <td class="white-space-nowrap">@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>Cameron</td>
      <td class="white-space-nowrap">@twitter</td>
    </tr>
  </tbody>
</table>`;

  const headerDark = `<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th class="white-space-nowrap" scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Steven</td>
      <td>Speilberg</td>
      <td class="white-space-nowrap">@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Martin</td>
      <td>Scorsese</td>
      <td class="white-space-nowrap">@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>Cameron</td>
      <td class="white-space-nowrap">@twitter</td>
    </tr>
  </tbody>
</table>`;

  const headerLight = `<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th class="white-space-nowrap" scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Steven</td>
      <td>Speilberg</td>
      <td class="white-space-nowrap">@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Martin</td>
      <td>Scorsese</td>
      <td class="white-space-nowrap">@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>Cameron</td>
      <td class="white-space-nowrap">@twitter</td>
    </tr>
  </tbody>
</table>`;

  const tableStriped = `<table class="table table-striped">
  <thead class="undefined">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th class="white-space-nowrap" scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Steven</td>
      <td>Speilberg</td>
      <td class="white-space-nowrap">@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Martin</td>
      <td>Scorsese</td>
      <td class="white-space-nowrap">@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>Cameron</td>
      <td class="white-space-nowrap">@twitter</td>
    </tr>
  </tbody>
</table>`;

  const tableHover = `<table class="table table-hover">
  <thead class="undefined">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th class="white-space-nowrap" scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Steven</td>
      <td>Speilberg</td>
      <td class="white-space-nowrap">@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Martin</td>
      <td>Scorsese</td>
      <td class="white-space-nowrap">@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>Cameron</td>
      <td class="white-space-nowrap">@twitter</td>
    </tr>
  </tbody>
</table>`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Popovers"
              desc="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
              goto="POPOVERS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/popovers/"
            />
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <table>
                  <thead className="h-12 border-y-2">
                    <tr>
                      <th className=" text-center px-2">#</th>
                      <th>First </th>
                      <th>Last </th>
                      <th>Hndle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-12 border-y">
                      <td className="font-bold text-center px-2">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="h-12 border-y">
                      <td className="font-bold text-center px-2">2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td className="h-12 font-bold text-center">3</td>
                      <td>James</td>
                      <td>Cameron</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {exmaple}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Dark
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <table className="bg-darkdark">
                  <thead className="h-12  text-white ">
                    <tr className="border border-white">
                      <th className=" text-center px-2">#</th>
                      <th>First </th>
                      <th>Last </th>
                      <th>Hndle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-12 text-white  border-y">
                      <td className="font-bold text-center px-2">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="h-12 text-white border-y">
                      <td className="font-bold text-center px-2">2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr className="h-12 text-white">
                      <td className="font-bold text-center">3</td>
                      <td>James</td>
                      <td>Cameron</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {dark}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Header Dark
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <table className="">
                  <thead className="h-12 bg-darkdark  text-white ">
                    <tr className="">
                      <th className=" text-center px-2">#</th>
                      <th>First </th>
                      <th>Last </th>
                      <th>Hndle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-12   border-y">
                      <td className="font-bold text-center px-2">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="h-12  border-y">
                      <td className="font-bold text-center px-2">2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr className="h-12 ">
                      <td className="font-bold text-center">3</td>
                      <td>James</td>
                      <td>Cameron</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {headerDark}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Header Light
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <table className="">
                  <thead className="h-12 bg-[#EDF2F9]  text-black ">
                    <tr className="">
                      <th className=" text-center px-2">#</th>
                      <th>First </th>
                      <th>Last </th>
                      <th>Hndle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-12   border-y">
                      <td className="font-bold text-center px-2">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="h-12  border-y">
                      <td className="font-bold text-center px-2">2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr className="h-12 ">
                      <td className="font-bold text-center">3</td>
                      <td>James</td>
                      <td>Cameron</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {headerLight}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Table Striped
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <table className="">
                  <thead className="h-12 S">
                    <tr className="border-y ">
                      <th className=" text-center px-2">#</th>
                      <th>First </th>
                      <th>Last </th>
                      <th>Hndle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-12   border-y">
                      <td className="font-bold text-center px-2">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="h-12  border-y">
                      <td className="font-bold text-center px-2">2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr className="h-12 bg-[#ECEDF0] ">
                      <td className="font-bold text-center">3</td>
                      <td>James</td>
                      <td>Cameron</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {tableStriped}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Table Hover
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <table className="">
                  <thead className="h-12 S">
                    <tr className="border-y ">
                      <th className=" text-center px-2">#</th>
                      <th>First </th>
                      <th>Last </th>
                      <th>Hndle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-12   border-y hover:bg-[#ECEDF0]">
                      <td className="font-bold text-center px-2">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="h-12  border-y hover:bg-[#ECEDF0]">
                      <td className="font-bold text-center px-2">2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr className="h-12 hover:bg-[#ECEDF0] ">
                      <td className="font-bold text-center">3</td>
                      <td>James</td>
                      <td>Cameron</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {tableHover}
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

export default Tables;
