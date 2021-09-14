import EditHandler from "../Actions/Edit";
import { useDispatch } from "react-redux";
import { useState } from "react";

const EditTodo = ({ todo }) => {
  const [newInput, setNewInput] = useState("");
  const [edit, setEdit] = useState(todo.edit);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(EditHandler(todo.id, newInput));
    setNewInput("");
    setEdit(false);
  };

  return (
    <div className='edit-panel'>
      <button className="btn-edit" onClick={() => setEdit(true)}>
        Edit
      </button>
      {edit === true ? (
        <div className="edit">
          <input
            className="input-edit"
            type="text"
            onChange={(e) => setNewInput(e.target.value)}
            autoFocus
          />
          <button className="btn-save" onClick={submitHandler}>
            Save
          </button>
          <button className="btn-cancel" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default EditTodo;
