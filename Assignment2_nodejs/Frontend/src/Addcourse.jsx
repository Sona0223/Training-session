import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const addCourse = async () => {
    await fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, duration })
    });
    navigate("/courses");
  };
  
  return (
    <div>
      <h2>Add Course</h2>
      <input placeholder="Course Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Duration" onChange={e => setDuration(e.target.value)} />
      <button onClick={addCourse}>Save</button>
    </div>
  );
}
