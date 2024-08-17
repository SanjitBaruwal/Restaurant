import Modal from "react-bootstrap/Modal";
import ReservationForm from "./ReservationForm";
import { useLoading } from "../contextapi/ReservationContext";

const ResuableReservationModel = ({ show, onHide }) => {
  const { loading } = useLoading();
  return (
    <Modal
      show={show}
      onHide={loading ? null : onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="flex px-8">
          <div className=" pl-7 py-2  border-l-[3px] border-bgDarkYellow flex gap-3">
            <h2
              className="text-black capitalize text-xl font-bold "
              style={{ fontFamily: "Merriweather" }}
            >
              Make A <br /> reservation
            </h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className=" p-0">
        <ReservationForm />
      </Modal.Body>
    </Modal>
  );
};

export default ResuableReservationModel;
