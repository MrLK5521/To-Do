import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id}
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
}