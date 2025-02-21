# 🚀 Full-Stack Todo App

A modern **Full-Stack Todo App** built using **Node.js, Express, MongoDB (Backend)** and **React, Tailwind CSS (Frontend)**. This app allows users to **create, edit, mark as complete, delete, and prioritize tasks** efficiently.

## **✨ Features**
✅ Add new tasks with title, description, and priority  
✅ Edit existing tasks  
✅ Mark tasks as completed  
✅ Delete tasks  
✅ Display all tasks in a clean UI  
✅ Responsive and modern UI built with Tailwind CSS  
✅ RESTful API with Express.js and MongoDB  

---

## **📂 Project Structure**
```
📦 fullstack-todo-app
 ┣ 📂 backend              # Node.js + Express Backend
 ┃ ┣ 📂 config             # Database configuration
 ┃ ┣ 📂 models             # Mongoose models
 ┃ ┣ 📂 routes             # API routes
 ┃ ┣ 📜 server.js          # Main Express server
 ┣ 📂 frontend             # React + Tailwind Frontend
 ┃ ┣ 📂 src                # React source files
 ┃ ┃ ┣ 📂 components       # UI Components
 ┃ ┃ ┣ 📜 App.jsx          # Main React component
 ┃ ┃ ┣ 📜 index.js         # React entry point
 ┃ ┃ ┣ 📜 tailwind.config.js # Tailwind CSS Config
 ┣ 📜 .gitignore           # Git Ignore file
 ┣ 📜 README.md            # Project Documentation
 ┣ 📜 package.json         # Dependencies & Scripts
```

---

## **🔧 Tech Stack**
### **Backend**
- ⚡ **Node.js** - JavaScript runtime for server-side logic
- 🔥 **Express.js** - Web framework for building RESTful APIs
- 🛢️ **MongoDB** - NoSQL Database for storing tasks
- 🎭 **Mongoose** - ODM for MongoDB  
- 🌍 **Cors** - Middleware for cross-origin requests  
- 📄 **dotenv** - Environment variable management  

### **Frontend**
- ⚛ **React.js** - UI Framework
- 🎨 **Tailwind CSS** - Utility-first CSS for styling
- 📡 **Fetch API** - Handling API requests
- 🎭 **React Icons** - Beautiful icons for UI  

---

## **🚀 Getting Started**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/fullstack-todo-app.git
cd fullstack-todo-app
```

---

## **🖥 Backend Setup (Node.js + Express + MongoDB)**

### **2️⃣ Navigate to the Backend Folder**
```sh
cd backend
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Create a `.env` file in `backend` folder**
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **5️⃣ Start the Server**
```sh
npm start
```
The server will run at **http://localhost:5000**

---

## **🌐 Frontend Setup (React + Tailwind CSS)**

### **6️⃣ Navigate to the Frontend Folder**
```sh
cd frontend
```

### **7️⃣ Install Dependencies**
```sh
npm install
```

### **8️⃣ Start the Frontend**
```sh
npm run dev
```
The frontend will be available at **http://localhost:5173**

---

## **🌍 API Endpoints (Backend)**
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| GET    | `/api/todos`   | Get all tasks          |
| POST   | `/api/todos`   | Create a new task      |
| PUT    | `/api/todos/:id` | Update a task        |
| DELETE | `/api/todos/:id` | Delete a task        |

---

## **🎨 Frontend UI Preview**
🔥 The UI is designed using **Tailwind CSS** with a **minimalist and clean design.**  
It supports **real-time updates, smooth animations, and a responsive layout.**  

![image](https://github.com/user-attachments/assets/df8661ec-17ae-43ca-a173-d375877d2ddb)


---

## **📌 Deployment**
You can deploy this project using:
- **Frontend**: Vercel, Netlify  
- **Backend**: Heroku, Render, Railway  
- **Database**: MongoDB Atlas  

---

## **📜 License**
This project is licensed under the **MIT License**.

---

## **❤️ Support & Contributions**
Feel free to **fork**, **star**, and **contribute** to this project! PRs are welcome. 🚀  

🔗 **Connect with me:**  
- GitHub: [YourUsername](https://github.com/rambedade)  
 

