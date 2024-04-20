import React, { useState } from "react";
import NoteIcon from "../assets/notes.png";
import DoubleTick from "../assets/double-tick.png";
import PlusIcon from "../assets/plus.png";
import { useDispatch } from "react-redux";
import { addTodo, completeAll, completeClear } from "../redux/todo/action";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(addTodo(input));
      setInput("");
    } else {
      alert("Please enter a todo");
    }
  };

  const allComplete = () => {
    dispatch(completeAll());
  };
  const clearComplete = () => {
    dispatch(completeClear());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={NoteIcon} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={handleInputChange}
        />
        <button type="submit" className={`appearance-none w-8 h-8 `}>
          <img src={PlusIcon} alt="+" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={allComplete}>
          <img className="w-4 h-4" src={DoubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearComplete} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
