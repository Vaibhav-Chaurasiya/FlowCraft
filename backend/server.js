const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// 📤 Get saved flow
app.get("/api/flow", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./mock-db.json", "utf-8"));
  res.json(db.flow);
});

// 💾 Save flow
app.post("/api/flow", (req, res) => {
  const { nodes, edges } = req.body;
  const db = JSON.parse(fs.readFileSync("./mock-db.json", "utf-8"));
  db.flow = { nodes, edges };
  fs.writeFileSync("./mock-db.json", JSON.stringify(db, null, 2));
  res.json({ status: "success" });
});

// 🧪 Run a simulated flow
app.post("/api/run-flow", (req, res) => {
  const { nodes, edges } = req.body;

  const log = [];

  // 🔁 Simulate flow execution
  for (const node of nodes) {
    const type = node.data?.type;

    if (type === "trigger") {
      log.push(`✅ Triggered: ${node.data.label}`);
    }

    if (type === "api") {
      log.push(`📡 API called: ${node.data.url || "https://mock.api"}`);
      log.push(`🔁 Response: { "status": 200, "message": "Success" }`);
    }

    if (type === "condition") {
      const result = node.data.condition === 'response.status === 200';
      log.push(`🧠 Condition checked: ${node.data.condition}`);
      log.push(`✔️ Result: ${result}`);
    }
  }

  res.json({ status: "ok", log });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
