import { useEffect, useState } from "react";
import { getStudents, addStudent, updateStudent, deleteStudent } from "./api";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

export default function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadStudents = async () => {
    const { data } = await getStudents();
    setStudents(data);
  };

  useEffect(() => { loadStudents(); }, []);

  const handleAdd = async (student) => {
    await addStudent(student);
    loadStudents();
  };

  const handleUpdate = async (student) => {
    await updateStudent(editing._id, student);
    setEditing(null);
    loadStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div>
      <h1>Students</h1>
      <StudentForm onSubmit={editing ? handleUpdate : handleAdd} editingStudent={editing} />
      <StudentList students={students} onEdit={setEditing} onDelete={handleDelete} />
      {editing && <button onClick={() => setEditing(null)}>Cancel Edit</button>}
    </div>
  );
}
