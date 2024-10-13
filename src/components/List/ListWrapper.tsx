import { Category, useCategoryContex } from "../../context/categoryContext";
import { useTodoContext } from "../../context/todoContext";
import { EachList } from "./EachList";
import { ListFooter } from "./ListFooter";
import "./list.css";

export const ListWrapper = () => {
  const todoContext = useTodoContext();
  const categoryContext = useCategoryContex();

  const selectedCategory = categoryContext?.categorySelected || Category.All;
  const searchString = categoryContext?.searchString || "";

  const { todos = [] } = todoContext || {};

  const filteredTodos = todos.filter((todo) => {
    if (selectedCategory === Category.All) {
      return todo.title.includes(searchString);
    } else if (selectedCategory === Category.Active) {
      return !todo.completed && todo.title.includes(searchString);
    } else if (selectedCategory === Category.Completed) {
      return todo.completed && todo.title.includes(searchString);
    }
    return false;
  });

  return (
    <div className="listWrapper">
      {filteredTodos.map((todo) => (
        <EachList todo={todo} key={todo.id} />
      ))}
      <ListFooter />
    </div>
  );
};
