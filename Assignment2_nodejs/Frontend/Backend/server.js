const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let courses = [
  { id: 1, name: "React Basics", duration: "4 weeks" },
  { id: 2, name: "Node.js", duration: "3 weeks" }
];

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false });
});

// Get courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// Add course
app.post("/courses", (req, res) => {
  const course = { id: Date.now(), ...req.body };
  courses.push(course);
  res.json(course);
});

app.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
