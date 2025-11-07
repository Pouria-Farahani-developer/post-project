import React, { useState } from "react";
import { Button, Input } from "antd";
import { toast } from "react-toastify";

import { useTr } from "@myapp/libs/translation";

import { Todo } from "../../types";

import * as S from "./app.style";

const App: React.FC = () => {
  const [t] = useTr();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddOrUpdate = (): void => {
    const value = inputValue.trim();

    if (!value) {
      toast(t("alert.insert_task"), { type: "error" });
      return;
    }

    if (editingId !== null) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, text: value } : item
        )
      );
      setEditingId(null);
      setInputValue("");
    } else {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: value,
      };
      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    }
  };

  const handleEdit = (id: string): void => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    toast(
      t("alert.edit_task", {
        record: todo.text,
      }),
      { type: "info" }
    );

    setEditingId(id);
    setInputValue(todo.text);
  };

  const handleDelete = (id: string): void => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setInputValue("");
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <S.Header>{t("todo_list")}</S.Header>

      <S.Filter>
        <Input
          type="text"
          value={inputValue}
          placeholder={t("input_placeholder")}
          onChange={handleChangeInput}
          onPressEnter={handleAddOrUpdate}
        />
        <Button size="large" onClick={handleAddOrUpdate}>
          {editingId !== null ? t("update") : t("add")}
        </Button>
      </S.Filter>

      {todos.length === 0 ? (
        <p>{t("empty_box_message")}</p>
      ) : (
        <S.List>
          {todos.map((todo: Todo) => (
            <li className="list-item" key={todo.id}>
              <span>{todo.text}</span>
              <div className="action-btn">
                <Button onClick={() => handleEdit(todo.id)}>
                  {t("update")}
                </Button>
                <Button onClick={() => handleDelete(todo.id)}>
                  {t("delete")}
                </Button>
              </div>
            </li>
          ))}
        </S.List>
      )}
    </div>
  );
};

export default App;
