import { useState } from "react";

export default function StudentForm({ onSubmit, editingStudent }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    city: "",
  });

  // Pre-fill form when editing
  if (editingStudent && form.name === "" && form.age === "" && form.city === "") {
    setForm(editingStudent);
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", age: "", city: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
      <button type="submit">{editingStudent ? "Update Student" : "Add Student"}</button>
    </form>
  );
}
