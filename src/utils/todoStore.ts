const localStorageKey = "todos";

export interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
}

let todos: TodoItem[];

function readStore() {
  if (!todos) {
    try {
      const itemsJson = localStorage.getItem(localStorageKey);
      todos = JSON.parse(itemsJson as string);
    } catch {
      todos = [];
    }
  }

  return todos;
}

function updateStore() {
  localStorage.setItem(localStorageKey, JSON.stringify(todos));
}

export function addTodo(item: string) {
  todos = [
    ...todos,
    { 
      completed: false,
      name: item,
      id: +new Date(),
    },
  ];

  updateStore();
}

export function updateTodo(todo: TodoItem) {
  todos = todos.map(i => {
    if (i.id === todo.id) {
      i = todo;
    }

    return i;
  });

  updateStore();
}

export function deleteTodo(todo: TodoItem) {
  todos = todos.filter(i => i.id !== todo.id);
  updateStore();
}

export function getTodos() {
  readStore();
  return todos;
}
