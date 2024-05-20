import React, { useReducer } from "react";
import ToDoList from './ToDoList'

export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}

const todosInitialState = {
  todos: [
    { id: 1, text: "finishing writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "read bible" },
  ],
};

function todosReducer(state, action) {
  switch (action.type) {
    default:
      return todosInitialState;
  }
}

export default App;
