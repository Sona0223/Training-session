import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.name} - {c.duration}</li>
        ))}
      </ul>
      <Link to="/add">Add Course</Link>
    </div>
  );
}
