import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTodos } from '../services/api';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li<{ completed: boolean }>`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => (props.completed ? '#e6ffe6' : '#fff0f0')};
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const About: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data.slice(0, 10)); // Get only first 10 todos
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our Vite React TypeScript application.</p>
      <h2>Todo List</h2>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <Checkbox type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </TodoItem>
        ))}
      </TodoList>
    </div>
  );
};

export default About;