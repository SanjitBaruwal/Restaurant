import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../contextapi/ReservationContext";

const ResuableOrderModel = ({ show, onHide, item }) => {
  const { loading, setLoading } = useLoading();

  const orderSchema = Yup.object({
    name: Yup.string().required("enter your name"),
    contact: Yup.number().required("fill your contact info."),
    address: Yup.string().required(
      "enter your relevant place to pick up your order."
    ),
    quantity: Yup.number().required("required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      address: "",
      item: item.item,
      quantity: 1,
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      const { name, contact, address, item, quantity } = values;
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/order/createOrder`,
          { name, contact, address, item, quantity },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success(response.data.message);
        console.log("Order placed successfully:", response.data);

        resetForm();
      } catch (err) {
        toast.error(err.response.data.message);
        console.error("Error submitting order:", err);
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    },
    validationSchema: orderSchema,
  });

  if (!item) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="flex px-8">
          <div className="pl-7 py-2 border-l-[3px] border-bgDarkYellow flex gap-3">
            <h2
              className="text-black uppercase text-xl font-bold"
              style={{ fontFamily: "Merriweather" }}
            >
              {item.item.toUpperCase()}
            </h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <form className="grid grid-cols-2 " onSubmit={formik.handleSubmit}>
          <div className="mb-1 px-4 xs:col-span-2 lg:col-span-1">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={(e) => {
                formik.setFieldValue("name", e.target.value);
              }}
              className=" form-control text-[#FF806E] font-bold border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 xs:col-span-2 md:col-span-1">
                {formik.errors.name}
              </p>
            )}
          </div>
          <div className="mb-1 px-4 xs:col-span-2 lg:col-span-1">
            <label htmlFor="contact" className="form-label">
              contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formik.values.contact}
              onChange={(e) => {
                formik.setFieldValue("contact", e.target.value);
              }}
              className=" form-control text-[#FF806E] font-bold border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            {formik.errors.contact && formik.touched.contact && (
              <p className="text-red-500 xs:col-span-2 md:col-span-1">
                {formik.errors.contact}
              </p>
            )}
          </div>
          <div className="mb-1 px-4 xs:col-span-2 lg:col-span-1">
            <label htmlFor="address" className="form-label">
              address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={(e) => {
                formik.setFieldValue("address", e.target.value);
              }}
              className=" form-control text-[#FF806E] font-bold border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
            />
            {formik.errors.address && formik.touched.address && (
              <p className="text-red-500 xs:col-span-2 md:col-span-1">
                {formik.errors.address}
              </p>
            )}
          </div>
          <div className="mb-1 px-4 ">
            <label htmlFor="unitPrice" className="form-label ">
              Unit Price
            </label>
            <input
              type="text"
              id="unitPrice"
              name="unitPrice"
              className=" form-control text-[#FF806E] font-bold border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
              readOnly
              value={item.price}
            />
          </div>
          <div className="mb-1 px-4">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className=" form-control text-[#FF806E] font-bold border-2 border-[#D8E2EF] rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#FBECD3]"
              min="1"
              onChange={(e) => {
                formik.setFieldValue("quantity", e.target.value);
              }}
              value={formik.values.quantity}
            />
            {formik.errors.quantity && formik.touched.quantity && (
              <p className="text-red-500 xs:col-span-2 md:col-span-1">
                {formik.errors.quantity}
              </p>
            )}
          </div>

          <p className="bg-[#F9FAFD] p-4 col-span-2 mt-2">{item.description}</p>

          <div className="flex w-full justify-center  col-span-2">
            <div className="my-4 w-fit   border-2 col-span-2 border-[#ffc554] flex justify-center items-center rounded-[.375rem] bg-[#ffc554] text-[#4D5969] hover:bg-[#FFB82E] cursor-pointer transition duration-300 ease-linear ">
              <button
                type="submit"
                className="outline-none px-[3rem] py-[0.3125rem] font-bold flex space-x-2 "
                disabled={loading}
              >
                {loading ? (
                  <Spinner animation="border" variant="warning" />
                ) : (
                  "ORDER ONLINE"
                )}
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ResuableOrderModel;
