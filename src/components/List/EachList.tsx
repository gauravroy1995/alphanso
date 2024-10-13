import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Todo, useTodoContext } from "../../context/todoContext";
import "./list.css";

type EachListProps = {
  todo: Todo;
};

export const EachList = (props: EachListProps) => {
  const { todo } = props || {};
  const context = useTodoContext();
  const { updateTodo, deleteTodo } = context || {};
  const [isExiting, setIsExiting] = useState(false);

  if (!todo) return null;

  const { title, completed, id } = todo;

  const updateTodoHandler = () => {
    if (updateTodo) {
      updateTodo(id);
    }
  };

  const onDeleteHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsExiting(true);

    setTimeout(() => {
      if (deleteTodo) {
        deleteTodo(id);
      }
    }, 500);
  };

  return (
    <>
      <div
        className={`eachList ${completed ? "active" : ""} ${
          isExiting ? "exit" : ""
        }`}
        key={id}
        onClick={updateTodoHandler}
      >
        <div className="leftItem">
          <>
            {!completed && <FaRegCircle className="checkCircle" size="23px" />}
            {completed && <CiCircleCheck className="check" size="25px" />}
          </>
          <p className="itemText">{title}</p>
        </div>

        <IoMdClose onClick={onDeleteHandler} className="delete" size="23px" />
      </div>
    </>
  );
};
