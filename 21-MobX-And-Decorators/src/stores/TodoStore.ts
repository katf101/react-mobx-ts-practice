import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

class TodoStore {
  list: Todo[] = [];

  // constructor() {
  //   // 객체를 observable로 만드는 가장 기본적인 방법은 makeObservable를 사용하여 속성마다 주석을 지정하는 것
  //   // 프로퍼티, 객체, 배열 , map, set은 observable로 설정될 수 있음
  //   makeObservable(this, {
  //     // observable state 생성
  //     list: observable,
  //     // action 선언
  //     // action은 state를 수정하는 메서드를 표시
  //     add: action,
  //     toggle: action,
  //     remove: action,
  //   });
  // }

  constructor() {
    // 자동 관찰 가능
    // makeAutoObservable(this);
    //
  }

  add(title: string) {
    if (title.length < 3) {
      return;
    }

    this.list.push({
      id: Date.now(),
      title,
      isDone: false,
    });
  }

  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
  }

  remove(todo: Todo) {
    this.list = this.list.filter((t) => t.id !== todo.id);
  }
}

export default TodoStore;
