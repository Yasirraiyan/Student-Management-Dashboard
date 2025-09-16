import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Arif", class: "10", marks: 85 },
    { id: 2, name: "Nusrat", class: "9", marks: 90 },
  ]);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
