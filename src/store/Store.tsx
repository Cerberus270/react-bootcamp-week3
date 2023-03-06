import React from 'react'
import { create, StateCreator } from "zustand";
import { persist, devtools } from "zustand/middleware";


export interface Todo {
  id: number;
  title: string;
  description: string;
  responsible: string;
  date: string;
  done: boolean;
}


const addTodo = (todos: Todo[], title: string, description: string, responsible: string, date: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    title,
    description,
    responsible,
    date,
    done: false,
  },
];

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
todos.map((todo) => ({
  ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }
  ));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

// Zustand implementation
type Store = {
  todos: Todo[];
  todoTitle: string;
  todoDescription: string;
  todoResponsible: string;
  todoDate: string;
  addTodo: () => void;
  setNewTodo: (todoTitle: string, todoDescription: string, todoResponsible: string, todoDate: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  setTodos: (todos: Todo[]) => void;
};

const todoSlice: StateCreator<Store> = (set) => ({
  todos: [],
  todoTitle: "",
  todoDescription: "",
  todoResponsible: "",
  todoDate: "",
  setTodos: (todos: Todo[]) =>
    set((state) => ({
      ...state,
      todos,
    })),
  setNewTodo: (todoTitle: string, todoDescription: string, todoResponsible: string, todoDate: string) =>
    set((state) => ({
      ...state,
      todoTitle,
      todoDescription,
      todoResponsible,
      todoDate
    })),
  addTodo: () =>
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.todoTitle, state.todoDescription, state.todoResponsible, state.todoDate),
      todoTitle: "",
      todoDescription: "",
      todoResponsible: "",
      todoDate: "",
    })),
  toggleTodo: (id: number) =>
    set((state) => ({
      ...state,
      todos: toggleTodo(state.todos, id),
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      ...state,
      todos: removeTodo(state.todos, id)
    }))
});

const useStore = create<Store>()(
  persist(
    devtools((...a) => ({
      ...todoSlice(...a)
    })),
    { name: "todo-persist" }
  )
)

export default useStore;