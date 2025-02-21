import { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const API_URL = "https://todoist-1.onrender.com/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleSubmit = async () => {
    if (!title.trim()) return alert("Title is required");

    const taskData = { title, description, priority };

    try {
      if (editingTodo) {
        await fetch(`${API_URL}/${editingTodo._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(taskData),
        });
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(taskData),
        });
      }

      fetchTodos();
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const updatedTodos = todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);

      const todo = updatedTodos.find((t) => t._id === id);
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
    } catch (error) {
      console.error("Error toggling complete:", error);
    }
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
    setTitle(todo.title);
    setDescription(todo.description);
    setPriority(todo.priority);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("medium");
    setEditingTodo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0d121e] via-[#071922] to-[#130e31] flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-2xl relative">
        <div className="absolute -top-10 -left-10 bg-gradient-to-tr from-pink-300 to-purple-500 w-20 h-20 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute -bottom-10 -right-10 bg-gradient-to-bl from-blue-300 to-indigo-500 w-24 h-24 rounded-full blur-2xl opacity-60"></div>

        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
         Task Manager
        </h1>

        <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg focus:ring-4 focus:ring-indigo-400 transition-shadow outline-none text-lg"
          />
          <input
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-3 rounded-lg focus:ring-4 focus:ring-indigo-400 transition-shadow outline-none"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border p-3 rounded-lg focus:ring-4 focus:ring-indigo-400 transition-shadow"
          >
            <option value="low">Low </option>
            <option value="medium">Medium </option>
            <option value="high">High </option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-purple-700 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform hover:shadow-xl"
          >
            {editingTodo ? "Update Task" : "Add Task"} <FaPlus />
          </button>
          {editingTodo && (
            <button
              onClick={resetForm}
              className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Task List */}
        <h2 className="text-2xl font-bold text-gray-700 mt-8">Your Tasks</h2>
        <ul className="mt-4 space-y-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks available.</p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo._id}
                className={`flex justify-between items-center p-4 border rounded-lg shadow-md bg-green transform transition hover:scale-105 hover:shadow-lg ${
                  todo.completed ? "opacity-60" : ""
                }`}
              >
                <div>
                  <h3 className={`font-bold ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                    {todo.title}
                  </h3>
                  <p className="text-gray-600">{todo.description}</p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded ${
                      todo.priority === "high"
                        ? "bg-red-500 text-white"
                        : todo.priority === "medium"
                        ? "bg-yellow-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {todo.priority.toUpperCase()}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleComplete(todo._id)}
                    className="p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => editTodo(todo)}
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
