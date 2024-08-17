import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Alerts = () => {
  const [dismiss, setDismiss] = useState(false);
  const handleClickDismiss = () => {
    setDismiss(true);
  };

  const alert = `<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
<div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
<div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
<div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
<div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
<div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
<div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
<div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>`;
  const additionalContent = `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading font-weight-semi-bold">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>`;

  return (
    <div className="  bg-[#F9FAFD] py-[110px]   w-full  px-10 lg:px-[5%] xl:px-[12.5%] ">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1  gap-4">
          <ResuableHeader
            title="Alerts"
            desc="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
            goto="ALERTS ON BOOTSTRAP"
            link="https://getbootstrap.com/docs/4.3/components/alerts/"
          />

          <div
            className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white">Examples</h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <h2 className="bg-primary text-[#85662C] p-4 rounded-lg">
                A simple primary alert—check it out!
              </h2>
              <h2 className="bg-secondary text-[#3C434D] p-4 rounded-lg">
                A simple secondary alert—check it out!
              </h2>
              <h2 className="bg-success text-[#287134] p-4 rounded-lg">
                A simple success alert—check it out!
              </h2>
              <h2 className="bg-danger text-[#854339] p-4 rounded-lg">
                A simple danger alert—check it out!
              </h2>
              <h2 className="bg-warning text-[#856A00] p-4 rounded-lg">
                A simple warning alert—check it out!
              </h2>
              <h2 className="bg-info text-[#2F6882] p-4 rounded-lg">
                A simple info alert—check it out!
              </h2>
              <h2 className="bg-light text-[#818284] p-4 rounded-lg">
                A simple light alert—check it out!
              </h2>
              <h2 className="bg-dark text-[#060C14] p-4 rounded-lg">
                A simple dark alert—check it out!
              </h2>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {alert}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white">Additional Content</h2>
            <div className="bg-[#F9FAFD] p-4 flex flex-col gap-4">
              <div className="bg-success text-[#287134] px-4 py-2 flex flex-col gap-4 rounded-lg">
                <h1 className="text-3xl font-bold">Well done!</h1>
                <h5>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </h5>
                <hr className="border-1 border-green-300 " />
                <h5>
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </h5>
              </div>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {additionalContent}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-4  rounded-lg overflow-hidden shadow-md "
            style={{ fontFamily: "Merriweather, sans-serif" }}
          >
            <h2 className="p-4 text-2xl bg-white">Dismissing</h2>
            <div className="bg-[#F9FAFD] px-4 py-2 flex flex-col gap-2">
              <AnimatePresence>
                {!dismiss && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" bg-warning text-[#856A00] p-4  text-xl flex justify-between rounded-lg"
                  >
                    <h2>
                      <strong>Holy guacamole!</strong> You should check in on
                      some of those fields below.
                    </h2>
                    <button
                      className="cursor-pointer"
                      onClick={handleClickDismiss}
                    >
                      <IoClose />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div layout className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {additionalContent}
                </SyntaxHighlighter>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border  xs:hidden md:flex"></div>
      </div>
    </div>
  );
};

export default Alerts;
