import "./App.css";
import { Header } from "./components/Header/Header";
import { ListWrapper } from "./components/List/ListWrapper";
import { CategoryContexProvider } from "./context/categoryContext";
import { TodoContextProvider } from "./context/todoContext";

function App() {
  return (
    <>
      <CategoryContexProvider>
        <TodoContextProvider>
          <Header />
          <ListWrapper />
        </TodoContextProvider>
      </CategoryContexProvider>
    </>
  );
}

export default App;
