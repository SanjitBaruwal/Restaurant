import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Modals = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modals = `<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal">Launch demo modal</button>
<!-- Modal-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span class="font-weight-light" aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <p>Woohoo, you're reading this text in a modal!</p>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Close</button><button class="btn btn-primary btn-sm" type="button">Save changes</button></div>
    </div>
  </div>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Modals"
              desc="List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."
              goto="MODAL ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/modal/"
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
                <div>
                  <Button
                    variant="warning"
                    className="px-4 text-[16px] text-darklight hover:text-darklight font-bold uppercase"
                    onClick={handleShow}
                  >
                    Launch demo modal
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Woohoo, you are reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        className="px-4 text-white font-bold text-md"
                        onClick={handleClose}
                      >
                        Close
                      </Button>
                      <Button
                        variant="warning"
                        className="px-4 text-darklight hover:text-primary text-md font-bold"
                        onClick={handleClose}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {modals}
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

export default Modals;
