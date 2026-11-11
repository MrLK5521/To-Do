export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <div className="task-left">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTask(task.id)} 
        />
        <span 
          onClick={() => toggleTask(task.id)}
          onDoubleClick={() => deleteTask(task.id)}
          className={task.completed ? 'completed' : ''}
        >
          {task.text}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Eliminar
      </button>
    </li>
  );
}