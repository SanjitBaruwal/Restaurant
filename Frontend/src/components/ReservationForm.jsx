import * as Yup from "yup";
import { useFormik } from "formik";
import { IoMdTime } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../contextapi/ReservationContext";

const ReservationForm = () => {
  const { loading, setLoading } = useLoading();
  const reservationSchema = Yup.object({
    time: Yup.string().required("please choose a time."),
    date: Yup.date()
      .required("Please select a date.")
      .min(new Date(), "Date cannot be in the past."),
    name: Yup.string().required("please enter your name"),
    phone: Yup.number().required("please enter your number"),
    person: Yup.string().required("required."),
    email: Yup.string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address.")
      .required("email can not left empty."),
  });
  const formik = useFormik({
    initialValues: {
      time: "",
      date: "",
      name: "",
      phone: "",
      person: "",
      email: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      const { time, date, name, phone, email, person } = values;
      try {
        const response = await axios.post(
          `${
            import.meta.env.VITE_SERVER_URL
          }/api/v1/reservation/make-reservation`,
          { time, date, name, phone, email, person },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success(response.data.message);
        console.log("Form data submitted successfully:", response.data);

        resetForm();
      } catch (err) {
        toast.error(err.response.data.message);
        console.error("Error submitting form data:", err);
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    },
    validationSchema: reservationSchema,
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-3 grid xs:grid-cols-1 gap-4 "
      >
        <div className="grid grid-cols-2 xs:gap-0 lg:gap-4 px-8">
          <div className="xs:col-span-2 md:col-span-1">
            <div className="custom-select flex items-center">
              <span className="select-icon py-2">
                <IoMdTime />
              </span>
              <select
                id="exampleFormControlSelect1"
                className="block bg-white col-span-2 font-medium w-full pl-8 py-2 border-2 border-[#D8E2EF] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent text-sm"
                onChange={(e) => formik.setFieldValue("time", e.target.value)}
                value={formik.values.time}
                name="time"
              >
                <option value="" disabled hidden>
                  Time
                </option>
                <option>09:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
                <option>06:00 PM</option>
                <option>07:00 PM</option>
                <option>08:00 PM</option>
                <option>09:00 PM</option>
              </select>
            </div>
            {formik.errors.time && formik.touched.time && (
              <p className="text-red-500 xs:col-span-2 md:col-span-1">
                {formik.errors.time}
              </p>
            )}
          </div>
          <div className="xs:col-span-2 md:col-span-1 w-full">
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              name="date"
              value={formik.values.date}
              onChange={(e) => formik.setFieldValue("date", e.target.value)}
              className="xs:mt-3 w-full lg:mt-0 bg-white pl-[18px] py-1 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            {formik.errors.date && formik.touched.date && (
              <p className="text-red-500">{formik.errors.date}</p>
            )}
          </div>
          <div className="xs:col-span-2 md:col-span-1 w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={(e) => formik.setFieldValue("name", e.target.value)}
              className="xs:mt-3 lg:mt-0 w-full bg-white pl-[18px] py-1 border-2 border-[#D8E2EF] h-fit rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}
          </div>
          <div className="xs:col-span-2 md:col-span-1 w-full">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={(e) => formik.setFieldValue("phone", e.target.value)}
              className="xs:mt-3 lg:mt-0 w-full bg-white pl-[18px] py-1 h-fit border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500">{formik.errors.phone}</p>
            )}
          </div>
          <div className="col-span-2 w-full">
            <select
              id="exampleFormControlSelect1"
              name="person"
              value={formik.values.person}
              onChange={(e) => formik.setFieldValue("person", e.target.value)}
              className="xs:mt-3 lg:mt-0 block bg-white col-span-2 font-medium w-full px-3 py-2 border-2 border-[#D8E2EF] rounded focus:outline-none focus:ring-4 focus:ring-[#FBEED3] focus:border-transparent text-sm"
            >
              <option value="" disabled hidden>
                Person
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>10+</option>
            </select>
            {formik.errors.person && formik.touched.person && (
              <p className="text-red-500">{formik.errors.person}</p>
            )}
          </div>
          <div className="col-span-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              className="xs:mt-3 w-full lg:mt-0 bg-white col-span-2 pl-[18px] py-1 border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>
        </div>
        {/* <button type="submit">Submit</button> */}
        <div className="bg-bgDarkYellow px-8 py-4 ">
          <p>
            Apparently we had reached a great height in the atmos, for the sky
            was a dead black, and the stars had twinkle. By which lifts the
            light.
          </p>
          <Button
            variant="secondary"
            className="border-none mt-2 uppercase bg-white text-darklight text-md font-semibold w-full hover:text-darklight"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Spinner animation="border" variant="warning" />
            ) : (
              "submit"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
