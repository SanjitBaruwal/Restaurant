import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import ResuableCard from "../../../components/ResuableCard";
import cardDecks from "./cardDeck";
import cardGroups from "./cardGroups";
import { FaCrown } from "react-icons/fa";

const Card = () => {
  const basicExample = `<div class="card" style="width: 20rem;">
  <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/1.jpg" alt="Card image cap" /></div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a class="btn btn-primary btn-sm" href="#!">Go somewhere</a>
  </div>
</div>
`;

  const cardwithList = `<div class="bg-white rounded-soft py-2">
  <a class="dropdown-item font-weight-bold text-warning" href="#!"><span class="fas fa-crown mr-1"></span><span>Go Pro</span></a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#!">Set status</a>
  <a class="dropdown-item" href="../pages/profile.html">Profile &amp; account</a>
  <a class="dropdown-item" href="#!">Feedback</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="../pages/settings.html">Settings</a>
  <a class="dropdown-item" href="../authentication/log-out.html">Logout</a>
</div>`;

  const cardwithImage = `<div class="card" style="width: 20rem;">
  <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/3.jpg" alt="Card image cap" /></div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body"><a class="card-link" href="#!">Card link</a><a class="card-link" href="#!">Another link</a></div>
</div>`;

  const background = `<div class="card bg-dark text-white" style="max-width: 30rem;">
  <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/3.jpg" alt="Card image" /></div>
  <div class="card-img-overlay d-flex align-items-end">
    <div>
      <h5 class="card-title text-white">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>`;

  const cardGroup = `<div class="card-group">
  <div class="card">
    <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/10.jpg" alt="Card image cap" /></div>
    <div class="card-body">
      <h5 class="card-title">First card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 45 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/11.jpg" alt="Card image cap" /></div>
    <div class="card-body">
      <h5 class="card-title">Second card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated an hour ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/12.jpg" alt="Card image cap" /></div>
    <div class="card-body">
      <h5 class="card-title">Yet another card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated yesterday</small></p>
    </div>
  </div>
</div>`;

  const cardDeck = `<div class="card-deck">
  <div class="card">
    <div class="card-img-top"><img class="img-fluid" src="../assets/img/food/6.jpg" alt="Card image cap" /></div>
    <div class="card-body">
      <h5 class="card-title">Awesome card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 22 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/7.jpg" alt="Card image cap" /></div>
    <div class="card-body">
      <h5 class="card-title">Beautiful card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 hours ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img-top"><img class="img-fluid" src="../assets/img/generic/8.jpg" alt="Card image cap" /></div>
    <div class="card-body">
      <h5 class="card-title">Gorgeous card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated on Monday</small></p>
    </div>
  </div>
</div>`;

  const cardStyle = `<div class="row">
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card text-white bg-secondary">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card text-white bg-success">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card text-white bg-danger">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card text-white bg-warning">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card text-white bg-info">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card bg-light">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card text-white bg-dark">
      <div class="card-body">
        <div class="card-title">Primary card title</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Card"
              desc="Falcon’s cards provide a flexible and extensible content
                container with multiple variants and options."
              goto="CARD ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/card/"
            />
          </div>
          <div className="col-span-2 md:col-span-1  shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Basic Example
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className=" w-[20rem]">
                  <div className="w-full h-fit">
                    <img
                      src="/card1.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white flex flex-col gap-4 p-4">
                    <div className="flex flex-col gap-4">
                      <h3
                        className="text-2xl text-black"
                        style={{ fontFamily: "Merriweather" }}
                      >
                        Card Title
                      </h3>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                    <div className=" border-2 border-[#ffc554] rounded-[.375rem] bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear w-fit z-[1]">
                      <button className="outline-none px-[3rem] py-[0.3125rem] font-bold ">
                        GO SOMEWHERE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {basicExample}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1  shadow-md flex flex-col h-fit ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Card with lists
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="bg-white flex flex-col gap-1  py-2">
                  <div className="text-[#FFC554] font-bold flex  items-center gap-2 border-b py-2 px-4">
                    <FaCrown /> <span>Go Pro</span>
                  </div>
                  <ul className="border-t border-b border-[#F6F8FC] py-1">
                    <li className="border-b py-2 px-4">Set Staus</li>
                    <li className="border-b py-2 px-4">Profile & account</li>
                    <li className="border-b py-2 px-4">Feedback</li>
                  </ul>
                  <ul>
                    <li className="border-b py-2 px-4">Settings</li>
                    <li className="border-b py-2 px-4">Logout</li>
                  </ul>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {cardwithList}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Card with Image
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="xs:w-full sm:w-[20rem]">
                  <div className="w-full h-fit">
                    <img
                      src="/card2.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white flex flex-col gap-4 py-4">
                    <div className="flex flex-col gap-4">
                      <div className="px-4 ">
                        <h3
                          className="text-2xl text-black"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          Card Title
                        </h3>
                        <p>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                      <ul className="border-t">
                        <li className="border-b px-4 py-3">Cars justo odio</li>
                        <li className="border-b px-4 py-3">
                          Dapibus ac facilisis in
                        </li>
                        <li className="border-b px-4 py-3">
                          Vestibulum at eros
                        </li>
                      </ul>

                      <div className="flex gap-4 px-4">
                        <a
                          href="#"
                          className=" flex  text-md leading-[24px]  items-center text-[#FFAB08]"
                        >
                          Card link
                        </a>
                        <a
                          href="#"
                          className=" flex  text-md leading-[24px]  items-center text-[#FFAB08]"
                        >
                          Another link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {cardwithImage}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-md flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Background
            </h2>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-2 ">
                <div className="max-w-full sm:max-w-[30rem] bg-gray-800 text-white">
                  <div className="relative">
                    <img
                      className="w-full h-auto"
                      src="/card2.jpg"
                      alt="Card image"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-800 via-transparent">
                      <div className="p-4">
                        <h5 className="text-white text-lg font-semibold">
                          Card title
                        </h5>
                        <p className="text-white">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {background}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-md flex flex-col">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Card Groups
            </h2>
            <div className="flex flex-col bg-[#F9FAFD] gap-4 p-4  ">
              <div className="   grid xs:grid-cols-1 sm:grid-cols-3 ">
                {cardGroups.map((item) => (
                  <div className=" bg-white  " key={item.id}>
                    <div className="w-full h-[160px]">
                      <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className=" flex flex-col gap-4 p-4">
                      <div className="flex  flex-col gap-4 ">
                        <h3
                          className="text-2xl text-black"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          {item.title}
                        </h3>
                        <p>
                          {item.desc.length > 120
                            ? item.desc.slice(0, 120) + "..."
                            : item.desc}
                        </p>
                        <p className="text-xs font-medium text-[#CBD1DB]">
                          Last Updated on {item.updated}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#F9FAFD]">
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {cardGroup}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-md flex flex-col">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Card Decks
            </h2>
            <div className="flex flex-col bg-[#F9FAFD] gap-4 p-4  ">
              <div className="   grid xs:grid-cols-1 sm:grid-cols-3 gap-4">
                {cardDecks.map((item) => (
                  <div className=" bg-white  " key={item.id}>
                    <div className="w-full h-[160px]">
                      <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className=" flex flex-col gap-4 p-4">
                      <div className="flex  flex-col gap-4 ">
                        <h3
                          className="text-2xl text-black"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          {item.title}
                        </h3>
                        <p>
                          {item.desc.length > 120
                            ? item.desc.slice(0, 120) + "..."
                            : item.desc}
                        </p>
                        <p className="text-xs font-medium text-[#CBD1DB]">
                          Last Updated on {item.updated}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#F9FAFD]">
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {cardDeck}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-md flex flex-col">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Card styles
            </h2>
            <div className="flex flex-col bg-[#F9FAFD] gap-4 p-4  ">
              <div className="   grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ResuableCard bg="#FFC554" />
                <ResuableCard bg="#748194" />
                <ResuableCard bg="#4CD964" />
                <ResuableCard bg="#FF806E" />
                <ResuableCard bg="#FFCC00" />
                <ResuableCard bg="#5AC8FA" />
                <ResuableCard bg="#fff" color="#5E6E82" />
                <ResuableCard bg="#0B1727" />
              </div>
              <div className="bg-[#F9FAFD]">
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {cardStyle}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 border"></div>
      </div>
    </div>
  );
};

export default Card;
