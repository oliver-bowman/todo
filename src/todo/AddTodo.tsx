import React, { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TodoItem } from "../utils";

export interface AddTodoProps {
  addTodo: (newTodo: TodoItem) => void;
}

function AddTodo(props: AddTodoProps) {
  const [name, setName] = useState<string>('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    props.addTodo({
      completed: false,
      id: +new Date(),
      name
    });
  }

  return (
    <div>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Button type="submit" variant="primary">Add item</Button>
      </Form>
    </div>
  )
}

export default AddTodo;
