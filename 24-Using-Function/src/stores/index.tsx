import { createContext, useContext } from "react";
import TodoStore from "./TodoStore";

const store = {
  todos: TodoStore(),
};

// context 생성
export const StoreContext = createContext(store);

// 컴포넌트 마다 스토어를 사용하기 위해 생성
export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
