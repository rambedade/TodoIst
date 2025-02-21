import { useState, useEffect } from "react";

const API_URL = "http://localhost:8080";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [editingTodo, setEditingTodo] = useState(null);

  // Fetch all todos
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  };

  // Add or update a todo
  const handleSubmit = () => {
    if (!title.trim()) return alert("Title is required");

    if (editingTodo) {
      // Edit existing todo
      fetch(`${API_URL}/${editingTodo._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, priority }),
      })
        .then((response) => response.json())
        .then(() => {
          fetchTodos();
          resetForm();
        })
        .catch((error) => console.error("Error updating todo:", error));
    } else {
      // Add new todo
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, priority }),
      })
        .then((response) => response.json())
        .then((newTodo) => {
          setTodos([...todos, newTodo]);
          resetForm();
        })
        .catch((error) => console.error("Error adding todo:", error));
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };

  // Prepare todo for editing
  const editTodo = (todo) => {
    setEditingTodo(todo);
    setTitle(todo.title);
    setDescription(todo.description);
    setPriority(todo.priority);
  };

  // Reset form
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("medium");
    setEditingTodo(null);
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* Form */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleSubmit}>{editingTodo ? "Update" : "Add"} Todo</button>
      {editingTodo && <button onClick={resetForm}>Cancel</button>}

      {/* Todo List */}
      <h2>Todo List</h2>
      <ul>
        {todos.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          todos.map((todo) => (
            <li key={todo._id}>
              <strong>{todo.title}</strong>: {todo.description} ({todo.priority})
              <button onClick={() => editTodo(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
