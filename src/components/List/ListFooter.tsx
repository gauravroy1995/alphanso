import { useTodoContext } from "../../context/todoContext";
import "./listFooter.css";
export const ListFooter = () => {
  const context = useTodoContext();
  const { addTodo } = context || {};

  const handleClick = () => {
    const input = document.querySelector(".footerInput") as HTMLInputElement;
    if (input.value) {
      if (addTodo) addTodo(input.value);
      input.value = "";
    }
  };

  return (
    <>
      <input type="text" placeholder="Type something" className="footerInput" />
      <button className="addButton" onClick={handleClick}>
        Add Task
      </button>
    </>
  );
};
