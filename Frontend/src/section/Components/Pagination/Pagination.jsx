import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Pagination from "react-bootstrap/Pagination";
import ResuableHeader from "../../../components/ResuableHeader";
import { PageItem } from "react-bootstrap";
const Paginations = () => {
  const textExample = `<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>`;

  const iconExample = `<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>
  </ul>
</nav>`;

  const sizing = `<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active"><a class="page-link" href="#" tabindex="-1">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item active"><a class="page-link" href="#" tabindex="-1">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active"><a class="page-link" href="#" tabindex="-1">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Pagination"
              desc="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
              goto="PAGINATION ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/pagination/"
            />
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Example with Icons
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Pagination>
                  <Pagination.Prev linkClassName="ipagination">
                    Previous
                  </Pagination.Prev>

                  <Pagination.Item active linkClassName="active">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {2}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {3}
                  </Pagination.Item>
                  <Pagination.Next linkClassName="ipagination">
                    Next
                  </Pagination.Next>
                </Pagination>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {iconExample}
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
              Example with Icons
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Pagination>
                  <Pagination.First linkClassName="ipagination" />

                  <Pagination.Item active linkClassName="active">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {2}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {3}
                  </Pagination.Item>

                  <Pagination.Last linkClassName="ipagination" />
                </Pagination>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {iconExample}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <div className=" bg-white p-4 flex flex-col gap-2">
              <h2
                className="text-2xl text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Sizing
              </h2>
              <p>
                Fancy larger or smaller pagination add
                <span className="text-red-500">.pagination-lg </span>
                or <span className="text-red-500">.pagination-sm</span> for
                additional sizes.
              </p>
            </div>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Pagination size="lg">
                  <Pagination.Item active linkClassName="active">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {2}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {3}
                  </Pagination.Item>
                </Pagination>
                <Pagination size="md">
                  <Pagination.Item active linkClassName="active">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {2}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {3}
                  </Pagination.Item>
                </Pagination>
                <Pagination size="sm">
                  <Pagination.Item active linkClassName="active">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {2}
                  </Pagination.Item>
                  <Pagination.Item linkClassName="ipagination">
                    {3}
                  </Pagination.Item>
                </Pagination>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {sizing}
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

export default Paginations;
