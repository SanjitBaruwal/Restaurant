import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import object from "./object";
const MediaObject = () => {
  const example = `<div class="media"><img class="mr-3" src="../assets/img/generic/2.jpg" alt="..." width="40" />
  <div class="media-body">
    <h5 class="mt-0">Media Heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <br /><br />Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>`;

  const mediatop = `<div class="media"><img class="mr-3 align-self-start" src="../assets/img/generic/2.jpg" alt="..." width="40" />
  <div class="media-body">
    <h5 class="mt-0">media top</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <br /><br />Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>`;
  const mediacenter = `<div class="card-body bg-light">
  <div class="media"><img class="mr-3 align-self-center" src="../assets/img/generic/2.jpg" alt="..." width="40" />
    <div class="media-body">
      <h5 class="mt-0">media center</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      <br /><br />Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>
  </div>
</div>`;

  const mediaend = `<div class="card-body bg-light">
  <div class="media"><img class="mr-3 align-self-end" src="../assets/img/generic/2.jpg" alt="..." width="40" />
    <div class="media-body">
      <h5 class="mt-0">media end</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      <br /><br />Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>
  </div>
</div>`;
  const medialist = `<ul class="list-unstyled">
  <li class="media">
    <img class="mr-3 rounded" src="../assets/img/generic/4.jpg" alt="Generic placeholder image" width="70" />
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
  </li>
  <li class="media my-4"><img class="mr-3 rounded" src="../assets/img/generic/5.jpg" alt="Generic placeholder image" width="70" />
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
  </li>
  <li class="media"><img class="mr-3 rounded" src="../assets/img/generic/6.jpg" alt="Generic placeholder image" width="70" />
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
  </li>
</ul>`;

  const nesting = `<div class="media"><img class="mr-3" src="../assets/img/generic/6.jpg" alt="..." width="35" />
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.<div class="media mt-3"><a class="mr-3" href="#"><img class="mr-3" src="../assets/img/generic/5.jpg" alt="..." width="40" /></a>
      <div class="media-body">
        <h5 class="mt-0">Media heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Media Object"
              desc="Documentation and examples for Falcon's' media object to construct highly repetitive components like blog comments, tweets, and the like"
              goto="MEDIA-OBJECT ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/media-object/"
            />
          </div>
          <div className="col-span-2  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3  items-start">
                  <div>
                    <div className="w-12 h-8">
                      <img
                        src="/card3.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1
                      className="text-lg text-black"
                      style={{ fontFamily: "Merriweather" }}
                    >
                      Media Heading
                    </h1>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla.
                      <br /> Donec lacinia congue felis in faucibus. Donec sed
                      odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {example}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Alignment
            </h2>
            <div className=" flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3  items-start">
                  <div>
                    <div className="w-12 h-8">
                      <img
                        src="/card3.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1
                      className="text-lg text-black"
                      style={{ fontFamily: "Merriweather" }}
                    >
                      Media Top
                    </h1>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla.
                      <br /> Donec lacinia congue felis in faucibus. Donec sed
                      odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {mediatop}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3  items-center">
                  <div>
                    <div className="w-12 h-8">
                      <img
                        src="/card3.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1
                      className="text-lg text-black"
                      style={{ fontFamily: "Merriweather" }}
                    >
                      Media Top
                    </h1>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla.
                      <br /> Donec lacinia congue felis in faucibus. Donec sed
                      odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {mediacenter}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3  items-end">
                  <div>
                    <div className="w-12 h-8">
                      <img
                        src="/card3.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1
                      className="text-lg text-black"
                      style={{ fontFamily: "Merriweather" }}
                    >
                      Media End
                    </h1>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla.
                      <br /> Donec lacinia congue felis in faucibus. Donec sed
                      odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {mediaend}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Media List
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <ul className="flex flex-col gap-4">
                  {object.map((item) => (
                    <li key={item.id} className="flex gap-3  items-start ">
                      <div>
                        <div className="w-12 h-8">
                          <img
                            src={item.img}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1
                          className="text-lg text-black"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          {item.heading}
                        </h1>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {medialist}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Nesting
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <div className="flex gap-3  items-start">
                  <div>
                    <div className="w-12 h-8">
                      <img
                        src="/deck0.jpg"
                        alt=""
                        className="rounded h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1
                      className="text-lg text-black"
                      style={{ fontFamily: "Merriweather" }}
                    >
                      Media Heading
                    </h1>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla.
                    </p>
                    <div className="flex gap-3  items-start">
                      <div>
                        <div className="w-12 h-8">
                          <img
                            src="/list2.jpg"
                            alt=""
                            className="rounded h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1
                          className="text-lg text-black"
                          style={{ fontFamily: "Merriweather" }}
                        >
                          Media Heading
                        </h1>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {nesting}
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

export default MediaObject;
