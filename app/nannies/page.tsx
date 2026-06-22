import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import "../globals.css";
import Modal from "@/components/Modal/Modal";
import LoginForm from "@/components/LoginForm/LoginForm";

const Nannies = () => {
  return (
    <div className="container">
      <Filter />
      <Card />
      {/* <Modal>
        <LoginForm />
      </Modal> */}
    </div>
  );
};

export default Nannies;
