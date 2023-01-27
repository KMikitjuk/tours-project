import { makeAutoObservable } from 'mobx';

class FavoriteTodos {
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(todo) {
    if (!this.list.find((item) => item.id === todo.id)) {
      this.list.push(todo);
    }
  }

  get count() {
    return this.list.length;
    // return ((this.list.length > 0) ? this.list.length : 0);
  }
}

export default new FavoriteTodos();
