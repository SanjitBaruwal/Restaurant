import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";

import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
const Toasts = () => {
  const [position, setPosition] = useState("top-start");
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);
  const [showD, setShowD] = useState(true);
  const [showE, setShowE] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
  const toggleShowD = () => setShowD(!showD);

  const Basic = `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button class="ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button></div>
  <div class="toast-body">Hello, world! This is a toast message.</div>
</div>`;
  const stacking = `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">just now
    </small><button class="ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span></button>
  </div>
  <div class="toast-body">See? Just like this.</div>
</div>
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header"><strong class="mr-auto">Bootstrap</strong><small class="text-muted">2 seconds ago</small><button class="ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">×</span></button></div>
  <div class="toast-body">Heads up, toasts will stack automatically</div>
</div>`;

  const placement = `<div aria-live="polite" aria-atomic="true" className="relative min-h-[240px]">
    <ToastContainer position={position}>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
          Hello, world! This is a toast message.
        </Toast.Body>
      </Toast>
     </ToastContainer>
</div>`;
  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-2  gap-4">
          <div className="col-span-2 ">
            <ResuableHeader
              title="Toasts"
              desc="Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."
              goto="POPOVERS ON BOOTSTRAP"
              link="https://getbootstrap.com/docs/4.3/components/toasts/"
            />
          </div>
          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <h2
              className="text-2xl bg-white p-4 text-black"
              style={{ fontFamily: "Merriweather" }}
            >
              Basic Example
            </h2>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {Basic}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4 flex flex-col gap-1">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Stacking
              </h2>
              <p>
                When you have multiple toasts, we default to vertically stacking
                them in a readable manner.
              </p>
            </div>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Toast show={showB} onBlose={toggleShowB}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>just now</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <Toast show={showC} onClose={toggleShowC}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>2 sec ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>

                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {stacking}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2   shadow-md h-fit flex flex-col ">
            <div className="bg-white p-4 flex flex-col gap-1">
              <h2
                className="text-2xl  text-black"
                style={{ fontFamily: "Merriweather" }}
              >
                Placement
              </h2>
              <p>
                Place toasts with the helper classes as you need them. The top
                right is often used for notifications, as is the top middle. If
                you’re only ever going to show one toast at a time, put the
                positioning styles right on the .toast.
              </p>
            </div>
            <div className=" h-fit flex flex-col gap-2 ">
              <div className="bg-[#F9FAFD] p-4  flex flex-col gap-2 ">
                <Card className="w-full ">
                  <List className="flex flex-row gap-3 flex-wrap">
                    <ListItem className="p-0 w-fit ">
                      <label
                        htmlFor="horizontal-list-react"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="top-start"
                            name="radio"
                            onChange={(e) => setPosition(e.target.value)}
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Top Start
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-vue"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="top-center"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Top Center
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="top-end"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Top End
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="middle-start"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Middle Start
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="middle-center"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Middle Center
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="middle-end"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Middle End
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="bottom-start"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Bottom Start
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="bottom-center"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Bottom Center
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0 w-fit">
                      <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <input
                            type="radio"
                            className="h-4 w-4"
                            value="bottom-end"
                            onChange={(e) => setPosition(e.target.value)}
                            name="radio"
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="font-medium text-blue-gray-400"
                        >
                          Bottom End
                        </Typography>
                      </label>
                    </ListItem>
                  </List>
                </Card>
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="relative min-h-[240px]"
                >
                  <ToastContainer position={position}>
                    <Toast show={showA} onClose={toggleShowA}>
                      <Toast.Header>
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                  </ToastContainer>
                </div>
                <div className="select-text">
                  <SyntaxHighlighter language="html" style={dracula}>
                    {placement}
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

export default Toasts;
