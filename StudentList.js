import React, { useContext, useState } from "react";
//import { StudentContext } from "./StudentContext";
// যদি StudentContext.js থাকে components/context/ folder এ
import { StudentContext } from "./context/StudentContext";

const StudentList = () => {
  const { students, addStudent, deleteStudent } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [marks, setMarks] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    addStudent({ name, class: className, marks: Number(marks) });
    setName("");
    setClassName("");
    setMarks("");
  };

  return (
    <div>
      <h2>Student List</h2>
      <form onSubmit={handleAdd}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <input
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.class} - {s.marks}{" "}
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
