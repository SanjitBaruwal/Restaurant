import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useLoading } from "../../contextapi/ReservationContext";
import { toast } from "react-toastify";

const Form = () => {
  const { loading, setLoading } = useLoading();

  const contactFormSchema = Yup.object({
    name: Yup.string().required("enter your name"),
    subject: Yup.string().required(
      "write particular topic you're having query"
    ),
    email: Yup.string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address.")
      .required("email can not left empty."),
    message: Yup.string()
      .min(20)
      .required("write message in atleast 20 words."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      const { name, subject, email, message } = values;

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/admin/message/send`,
          { name, subject, email, message },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success(response.data.message);
        console.log("message sent successfully:", response.data);

        resetForm();
      } catch (err) {
        toast.error(err.response.data.message);
        console.error("Error submitting message:", err);
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    },
    validationSchema: contactFormSchema,
  });

  return (
    <div className="py-[110px]   w-full bg-[#F9FAFD] px-10 lg:px-[5%] xl:px-[12.5%]">
      <div id="#form">
        <div className="space-y-3 flex flex-col items-center justify-center">
          <h3
            className="text-black md:text-3xl font-bold xs:text-2xl lg:text-4xl xs:text-center"
            style={{ fontFamily: "Merriweather,serif" }}
          >
            Feel free to drop us a line!
          </h3>
          <p className=" xs:w-full text-center lg:w-[60%] lg:px-6">
            Let's talk if you have any query or suggestion. We are open to learn
            from you. So don't hesitate to reach us anytime.
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="  mt-20 grid xs:grid-cols-1 md:grid-cols-2  gap-4 "
        >
          <div className="  grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formik.values.name}
                onChange={(e) => {
                  formik.setFieldValue("name", e.target.value);
                }}
                className="w-full bg-white px-8 py-2 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none  focus:ring-4 focus:ring-[#FBECD3]"
              />
              {formik.errors.name && formik.touched.name && (
                <p className="text-red-500 xs:col-span-2 md:col-span-1 pl-8">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                value={formik.values.subject}
                onChange={(e) => {
                  formik.setFieldValue("subject", e.target.value);
                }}
                className="w-full bg-white px-8 py-2 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
              />
              {formik.errors.subject && formik.touched.subject && (
                <p className="text-red-500 xs:col-span-2 md:col-span-1 pl-8">
                  {formik.errors.subject}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
                className="w-full bg-white px-8 py-2 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 xs:col-span-2 md:col-span-1 pl-8">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="flex items-center  w-fit  h-fit py-1  ">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center  rounded-full cursor-pointer"
                  htmlFor="ripple-on"
                  data-ripple-dark="true"
                >
                  <input
                    id="ripple-on"
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[[#D8E2EF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-transparent checked:bg-[#FFC554] focus:outline-none focus:ring-4 focus:ring-[#FBECD3] focus:border-transparent   hover:before:opacity-10"
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1S"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className=" ms-4  text-xl font-medium cursor-pointer select-none"
                  htmlFor="ripple-on"
                >
                  Send me a Copy
                </label>
              </div>
            </div>
          </div>
          <div
            className="
           grid grid-cols-1 grid-rows-4 gap-4 "
          >
            <div className="row-span-3">
              <textarea
                type="text"
                placeholder="Type your message here "
                value={formik.values.message}
                onChange={(e) => {
                  formik.setFieldValue("message", e.target.value);
                }}
                className="bg-white h-full w-full px-8 py-2 border-2 border-[#D8E2EF] rounded-lg resize-none focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3] "
              />
              {formik.errors.message && formik.touched.message && (
                <p className="text-red-500 xs:col-span-2 md:col-span-1 mb-2 pl-8 flex justify-end">
                  {formik.errors.message}
                </p>
              )}
            </div>
            <div className=" w-fit h-fit bg-[#0B1727] flex justify-center items-center rounded-[.375rem] text-white hover:bg-[#000] cursor-pointer transition duration-300 ease-linear z-20">
              <button
                type="submit"
                className="outline-none px-[3rem] py-[0.3125rem]  font-bold flex space-x-2"
              >
                GIVE US A SHOT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
