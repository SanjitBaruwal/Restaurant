import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import CollapsibleItems from "./collapse";
import { useState } from "react";

const Collapse = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const AccordinExample = `<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header border-bottom" id="headingOne">
      <h5 class="mb-0"><button class="btn btn-link p-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #1</button></h5>
    </div>
    <div class="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header border-bottom" id="headingTwo">
      <h5 class="mb-0"><button class="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapsible Group Item #2</button></h5>
    </div>
    <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header border-bottom" id="headingThree">
      <h5 class="mb-0"><button class="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Collapsible Group Item #3</button></h5>
    </div>
    <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
    </div>
  </div>
</div>

`;

  return (
    <div className="bg-[#F9FAFD] py-[110px] w-full px-10 lg:px-[5%] xl:px-[12.5%]">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1 gap-4">
          <ResuableHeader
            title="Collapse"
            desc="Toggle the visibility of content with a few classes and Bootstrap's JavaScript plugins."
            goto="COLLAPSE ON BOOTSTRAP"
            link="https://getbootstrap.com/docs/4.3/components/collapse/"
          />
          <div className="flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Examples
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col ">
              {CollapsibleItems.map((item, index) => (
                <div key={index} className="bg-white  rounded-md ">
                  <button className="w-full text-left p-4 border-b border-gray-300  ">
                    <h5
                      className=" w-fit text-lg font-semibold text-[#FFAB08] uppercase hover:underline"
                      onClick={() => toggleItem(index)}
                    >
                      {item.title}
                    </h5>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 linear ${
                      activeIndex === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-4">{item.desc}</div>
                  </div>
                </div>
              ))}
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {AccordinExample}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
