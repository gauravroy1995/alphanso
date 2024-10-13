import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ListWrapper } from "./components/List/ListWrapper";
import { TodoContextProvider } from "./context/todoContext";
import { CategoryContexProvider } from "./context/categoryContext";

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
