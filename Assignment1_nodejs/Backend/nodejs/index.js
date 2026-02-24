import express from "express";
import cors from "cors";
import os from "os";

const app = express();
app.use(cors());

app.get("/api/system", (req, res) => {
  res.json({
    totalMemory: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
    freeMemory: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
    cpu: os.arch(),
    user: os.userInfo().username
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});