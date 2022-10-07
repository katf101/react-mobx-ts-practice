import { createContext, useContext } from "react";
import TodoStore from "./TodoStore";

const store = {
  todos: new TodoStore(),
};

// context 생성
export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
