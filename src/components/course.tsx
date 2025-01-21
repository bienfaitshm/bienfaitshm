"use client";

import React from "react";
import { TypographyH1, TypographyH3 } from "./ui/typography";
import { Button } from "@/components/ui/button";

interface TodoInputProps {
  onSubmit: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = (props) => {
  const [value, setValue] = React.useState<string>("");
  const handlerSubmit = () => {
    props.onSubmit(value);
    setValue("");
  };
  return (
    <div className="flex items-center gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-primary h-10 px-2"
      />
      <Button onClick={handlerSubmit}>Submit</Button>
    </div>
  );
};

interface TodoItemProps {
  title: string;
}
const TodoItem: React.FC<TodoItemProps> = ({ title }) => {
  return (
    <div>
      <TypographyH3>{title}</TypographyH3>
    </div>
  );
};

type TodoListProps = {
  todos: string[];
};
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo} title={todo} />
      ))}
    </div>
  );
};

const Course = () => {
  const { todos, onSubmit } = useTodoList<string>();
  return (
    <div>
      <TypographyH1>Course main</TypographyH1>
      <TodoInput onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
};

function useTodoList<T>() {
  const [todos, setTodo] = React.useState<T[]>([]);
  const onSubmit = (value: T) => {
    setTodo((oldTodos) => [...oldTodos, value]);
  };

  return {
    todos,
    onSubmit,
  };
}
export default Course;
