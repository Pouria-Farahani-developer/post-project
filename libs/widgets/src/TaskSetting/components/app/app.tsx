import { useState } from "react";
import { useTr } from "@myapp/libs/translation";
import { Button, Input } from "antd";
import { toast } from "react-toastify";
import { Todo } from "../../types";



const App = () => {
  const [t] = useTr();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    const value = inputValue.trim();
    if (!value) {
      toast('لطفا تسک خود را وارد کنید', { type: 'error' })
      return ''
    };

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
        id: Date.now(),
        text: value,
      };
      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    }
  };

  const handleEdit = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    toast(`رکورد ${todo.text} در حال ویرایش`,{type:'warning'})
    setEditingId(id);
    setInputValue(todo.text);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{t('todo_list')}</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: 'center' }}>
        <Input
          type="text"
          value={inputValue}
          placeholder={t('input_placeholder')}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleAddOrUpdate} 
          style={{ flex: 1, padding: 8 }}
        />
        <Button size="large"  onClick={handleAddOrUpdate}>
          {editingId !== null ? t('update') : t('add')}
        </Button>
      </div>

      {todos.length === 0 ? (
        <p>{t('empty_box_message')}</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
                padding: 8,
                border: "1px solid #ddd",
                borderRadius: 4,
              }}
            >
              <span>{todo.text}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <Button onClick={() => handleEdit(todo.id)}>ادیت</Button>
                <Button onClick={() => handleDelete(todo.id)}>حذف</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
