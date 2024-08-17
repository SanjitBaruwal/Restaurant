import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const ListGroups = () => {
  const basicExample = `<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`;
  const activeItem = `<div class="list-group"><a class="list-group-item list-group-item-action active" href="#">Cras justo odio</a>
  <a class="list-group-item list-group-item-action" href="#">Dapibus ac facilisis in</a>
  <a class="list-group-item list-group-item-action" href="#">Morbi leo risus</a>
  <a class="list-group-item list-group-item-action" href="#">Porta ac consectetur ac</a>
  <a class="list-group-item list-group-item-action disabled" href="#">Vestibulum at eros</a>
</div>`;

  const listGroupFlush = `<ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
</ul>`;

  const listGroupwithBadge = `<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span class="badge badge-soft-primary badge-pill">14</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-soft-primary badge-pill">2</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus<span class="badge badge-soft-primary badge-pill">1</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-soft-primary badge-pill">9</span></li>
</ul>`;

  const listGroupbg = `<ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>`;

  const listlink = `<div class="list-group"><a class="list-group-item list-group-item-action flex-column align-items-start active" href="#">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 text-white">List group item heading</h5><small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small>Donec id elit non mi porta.</small>
  </a><a class="list-group-item list-group-item-action flex-column align-items-start" href="#">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5><small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small class="text-muted">Donec id elit non mi porta.</small>
  </a><a class="list-group-item list-group-item-action flex-column align-items-start" href="#">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5><small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small class="text-muted">Donec id elit non mi porta.</small>
  </a></div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="List Group"
              desc="List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."
              goto="LIST ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/dropdown/"
            />
          </div>
          <div className="col-span-2 lg:col-span-1  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Basic Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {basicExample}
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
              Active Item
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ListGroup>
                  <ListGroup.Item action active variant="warning">
                    <p className="text-white">Cras justo odio</p>
                  </ListGroup.Item>

                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {activeItem}
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
              List group flush
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {listGroupFlush}
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
              List group with badge
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ListGroup as="ol">
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge bg="danger" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge bg="warning" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge bg="info" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {listGroupwithBadge}
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
              List group background
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ul className=" border bg-white rounded-md">
                  <li className="border-b px-4 py-2 ">
                    Dapibus ac facilisis in
                  </li>
                  <li className="border-b px-4 py-2 bg-[#FFEFCF">
                    A simple primary list group item
                  </li>
                  <li className="border-b px-4 py-2 bg-[#D8DCE1]">
                    A simple secondary list group item
                  </li>
                  <li className="border-b px-4 py-2 bg-[#CDF4D4]">
                    A simple success list group item
                  </li>
                  <li className="border-b px-4 py-2 bg-[#FFDBD6]">
                    A simple danger list group item
                  </li>
                  <li className="border-b px-4 py-2 bg-[#FFF1B8]">
                    A simple warning list group item
                  </li>
                  <li className="border-b px-4 py-2 bg-[#D1F0FE]">
                    A simple info list group item
                  </li>
                  <li className="border-b px-4 py-2 ">
                    A simple light list group item
                  </li>
                  <li className="border-b px-4 py-2 bg-[#BBBEC3]">
                    A simple dark list group item
                  </li>
                </ul>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {listGroupbg}
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
              List group background
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ul className=" border bg-white rounded-md">
                  <li className="border-b px-4 py-2 bg-bgLightYellow text-white flex flex-col gap-2 ">
                    <div>
                      <div className="flex justify-between">
                        <h1
                          className="text-lg font-semibold"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          List group item heading
                        </h1>
                        <p className="text-[12px] ">3 days ago</p>
                      </div>
                      <p className="text-md ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aspernatur aliquid ex libero tempora sunt quo nemo
                        voluptate quis cupiditate ratione.
                      </p>
                    </div>
                    <p className="text-[12px] ">Donec id elit non mi porta.</p>
                  </li>
                  <li className="border-b px-4 py-2 flex flex-col gap-2 ">
                    <div>
                      <div className="flex justify-between">
                        <h1
                          className="text-lg font-semibold text-black"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          List group item heading
                        </h1>
                        <p className="text-[12px] text-gray-300">3 days ago</p>
                      </div>
                      <p className="text-md text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aspernatur aliquid ex libero tempora sunt quo nemo
                        voluptate quis cupiditate ratione.
                      </p>
                    </div>
                    <p className="text-[12px] text-gray-300">
                      Donec id elit non mi porta.
                    </p>
                  </li>
                  <li className=" px-4 py-2 flex flex-col gap-2 ">
                    <div>
                      <div className="flex justify-between">
                        <h1
                          className="text-lg font-semibold text-black"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          List group item heading
                        </h1>
                        <p className="text-[12px] text-gray-300">3 days ago</p>
                      </div>
                      <p className="text-md text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aspernatur aliquid ex libero tempora sunt quo nemo
                        voluptate quis cupiditate ratione.
                      </p>
                    </div>
                    <p className="text-[12px] text-gray-300">
                      Donec id elit non mi porta.
                    </p>
                  </li>
                </ul>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {listlink}
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

export default ListGroups;
