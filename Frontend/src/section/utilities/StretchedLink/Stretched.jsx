import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";

const Stretched = () => {
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="stretched link"
              desc="Make any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS."
              link="https://getbootstrap.com/docs/4.3/utilities/stretched-link/"
            />
          </div>
          <div className="col-span-2   shadow-md flex flex-col ">
            <div className="bg-white p-4">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Example
              </h2>
              <p className="my-2">
                Add <span className="text-red-500">.stretched-link</span> to a
                link to make its containing block clickable via a{" "}
                <span className="text-red-500">::after</span> pseudo element. In
                most cases, this means that an element with{" "}
                <span className="text-red-500">position: relative;</span> that
                contains a link with the{" "}
                <span className="text-red-500">.stretched-link</span> class is
                clickable.
              </p>
              <p className="mb-2">
                Cards have{" "}
                <span className="text-red-500">position: relative</span> by
                default in Bootstrap, so in this case you can safely add the{" "}
                <span className="text-red-500">.stretched-link</span> class to a
                link in the card without any other HTML changes.
              </p>
              <p>
                Multiple links and tap targets are not recommended with
                stretched links. However, some{" "}
                <span className="text-red-500">position</span> and{" "}
                <span className="text-red-500">z-index</span> styles can help
                should this be required.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4 ">
                <div className="max-w-sm rounded overflow-hidden shadow-md">
                  <img className="w-full" src="/card1.jpg" alt="Card image" />
                  <div className="px-6 py-4 relative">
                    <h5 className="font-bold text-xl mb-2">
                      Card with stretched link
                    </h5>
                    <p className=" text-base">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>

                    <a href="#" className="mt-2 w-fit  z-20">
                      <div className=" bg-bgLightYellow mt-2 w-fit flex justify-center items-center rounded-[.375rem]  text-[#4D5969] hover:bg-bgDarkYellow cursor-pointer transition duration-300 ease-linear ">
                        <button className="outline-none px-[1rem] py-[0.3125rem] font-bold">
                          GO SOMEWHERE
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="../assets/img/generic/1.jpg" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a class="btn btn-primary stretched-link" href="#">Go somewhere</a>
  </div>
</div>`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stretched;
