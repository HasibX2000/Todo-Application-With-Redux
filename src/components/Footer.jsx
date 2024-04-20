import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus, toggleColor } from "../redux/filter/action";
const taskCounter = (todoLength) => {
  switch (todoLength) {
    case 0:
      return "No task";

    case 1:
      return "1 task";

    default:
      return `${todoLength} tasks`;
  }
};
const Footer = () => {
  const todos = useSelector((state) => state.todos);

  const filters = useSelector((state) => state.filters);

  const taskRemaining = todos.filter((todo) => !todo.completed).length;

  const dispatch = useDispatch();
  const { status, colors } = filters;
  const handleStatusChange = (status) => {
    dispatch(toggleStatus(status));
  };
  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(toggleColor(color, "removed"));
    } else {
      dispatch(toggleColor(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{taskCounter(taskRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:yellow:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
