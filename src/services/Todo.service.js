const todoTypes = {
  HOME: 'Home',
  WORK: 'Work',
};

const todos = [
  {
    id: '1',
    type: todoTypes.HOME,
    title: 'Wash dishes',
  },
  {
    id: '2',
    type: todoTypes.WORK,
    title: 'Complete important task',
  },
  {
    id: '3',
    type: todoTypes.HOME,
    title: 'Cook dinner',
  },
  {
    id: '4',
    type: todoTypes.WORK,
    title: 'Do an interview',
  },
];

class TodoService {
  static getTodos(type) {
    return type === 'All' ? todos : todos.filter((todo) => type === todo.type);
  }

  static getTodoTypes() {
    return Object.values(todoTypes);
  }

  static getTodoById(id) {
    return todos.find((todo) => todo.id === id);
  }
}

export default TodoService;
