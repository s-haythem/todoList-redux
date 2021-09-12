import Modal from "react-modal";
import EditHandler from "../Actions/Edit";
import { useDispatch } from "react-redux";
import { useState } from "react";

const EditTodo = ({ todo }) => {
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      backgroundColor: "rgba(253, 251, 251, 0.712)",
      border: "solid 1px gray",
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "500px",
    },
  };

  const [show, setshow] = useState(false);
  const toggle = () => {
    setshow(!show);
  };

  const [newInput, setNewInput] = useState(todo.text);

  const dispatch = useDispatch();
  const submissionHandler = (e) => {
    e.preventDefault();
    dispatch(EditHandler(todo.id, newInput));
    toggle();
  };

  return (
    <div>
      <button onClick={toggle} className="toggle">
        edit
      </button>
      <Modal isOpen={show} style={customStyles}>
        <h1 className="title"> Edit your task </h1>
        <form>
          <input
            id="edit"
            type="text"
            value={newInput}
            autoFocus
            onChange={(e) => setNewInput(e.target.value)}
          />
          <div className="btns-edit">
            <button onClick={submissionHandler}>Submit</button>
            <button onClick={toggle}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditTodo;
