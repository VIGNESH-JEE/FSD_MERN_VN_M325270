export default function StudentList({ students, onEdit, onDelete }) {
  return (
    <ul>
      {students.map((s) => (
        <li key={s._id}>
          {s.name} - {s.age} - {s.city}
          <button onClick={() => onEdit(s)}>Edit</button>
          <button onClick={() => onDelete(s._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
