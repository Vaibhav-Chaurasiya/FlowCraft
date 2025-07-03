# ⚙️ FlowCraft - Visual Automation Builder

FlowCraft is a full-stack, no-code automation tool inspired by platforms like Zapier and n8n. It allows users to visually create, configure, and simulate workflows by connecting Trigger, API, and Condition nodes on a drag-and-drop canvas.

---

## 🚀 Features

- 🎨 **Drag-and-Drop Editor** – Build flows visually using nodes.
- ⚡ **Node Types**:
  - `Trigger`: Starts the flow
  - `API`: Makes external API requests
  - `Condition`: Checks logical expressions
- 🧠 **Node Configuration Panel** – Customize each node (event name, URL, method, headers, body, etc.).
- 📥 **Save / Load** – Store or retrieve flows via backend (Express + JSON).
- 📤 **Export** – Download flow as a `.json` file.
- 👀 **Preview Flow** – Simulate the flow step-by-step with a simulated log.
- 📐 **Auto Layout** – Automatically reposition nodes for readability.
- 🌓 **Responsive Design** – Mobile support with collapsible sidebars.

---

## 🏗️ Tech Stack

### Frontend
- ⚛️ React + Vite
- 🧰 Redux Toolkit
- 🖼️ React Flow (`@xyflow/react`)
- 💅 Tailwind CSS
- 🧩 Lucide Icons

### Backend
- 🚀 Node.js + Express
- 📄 `mock-db.json` as local database

---

## 📁 Folder Structure

```
flowcraft/
├── public/
├── src/
│   ├── components/
│   │   ├── FlowCanvas.jsx
│   │   ├── Sidebar.jsx
│   │   ├── NodeConfigPanel.jsx
│   ├── store/
│   │   ├── nodesSlice.js
│   │   ├── edgesSlice.js
│   │   ├── selectedNodeSlice.js
│   ├── utils/
│   │   ├── autoLayout.js
│   │   ├── validateFlow.js
│   ├── pages/
│   │   └── Editor.jsx
│   ├── api.js
│   ├── main.jsx
├── server.js
├── mock-db.json
```

---

## 🧪 How It Works

1. **Add a Trigger Node** – Provide an event name (e.g., `onFormSubmit`).
2. **Connect an API Node** – Provide API URL, method (GET/POST), headers, and body (if needed).
3. **Add a Condition Node** – Provide a logical expression (e.g., `response.status === 200`).
4. **Preview the flow** – Simulate and view step-by-step logs.
5. **Save or Export** – Store your workflow to backend or download locally.

---

## 🛠️ Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/flowcraft.git
cd flowcraft
```

### 2. Install dependencies:
```bash
# Frontend
cd client
npm install

# Backend
cd ../
npm install
```

### 3. Start the backend:
```bash
node server.js
# Runs at http://localhost:8000
```

### 4. Start the frontend:
```bash
cd client
npm run dev
# Runs at http://localhost:5173
```

---

## 🧾 Example Use Case

- Trigger Node: `onUserSignup`
- API Node: `https://jsonplaceholder.typicode.com/posts` (POST)
- Condition Node: `response.status === 201`
- Simulated Output:
  - ✅ Triggered: onUserSignup
  - 📡 API called: .../posts
  - ✔️ Result: true

---

## 📚 Future Enhancements

- 🧩 Custom Node Types (e.g., Delay, Formatter)
- 💾 Auth + Cloud Database Support
- 📊 Flow Analytics
- ♻️ Retry & Loop Nodes
- 🌙 Dark Mode

---

## 🤝 Contribution

Feel free to fork the project, make improvements, and submit pull requests. Bug reports and feature suggestions are welcome.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Acknowledgements

- [React Flow](https://reactflow.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)