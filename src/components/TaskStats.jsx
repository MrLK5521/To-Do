export default function TaskStats({ tasks }) {
  const pendingCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-stats">
      <p>Tareas pendientes: <strong>{pendingCount}</strong></p>
    </div>
  );
}