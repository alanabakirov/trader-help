import { useEffect, useState } from 'react';
import './TaskTracker.css';
import { useForm } from 'react-hook-form';

type TaskFormValues = {
  name: string;
  description: string;
  status: 'Todo' | 'In Progress' | 'Done';
};

type Task = {
  id: number;
  name: string;
  description: string;
  status: 'Todo' | 'In Progress' | 'Done';
};

export default function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const LS = localStorage;

  useEffect(()=>{
    setLS();
    setTasks(JSON.parse(LS.getItem("tasks") || "[]"));
  }, []);

  const {register, handleSubmit, reset, formState: { errors }} = useForm<TaskFormValues>({
    defaultValues: {
      name: '',
      description: '',
      status: 'Todo',
    },
  });

  function onSubmit(data: TaskFormValues){
    if (data.name.trim()==="") return;
    if (data.description.trim()==="") return;

    let currentLS = JSON.parse(LS.getItem("tasks") || "0");

    if(currentLS===0){
        LS.setItem("tasks", JSON.stringify([]));
        return;
    }

    const id = Date.now();
    currentLS.push({...data, "id": id});
    LS.setItem("tasks", JSON.stringify(currentLS));
    setTasks(currentLS);
    reset();
  };

  function setLS(){
    if(!LS.getItem("tasks")) LS.setItem("tasks", JSON.stringify([]));
  }

  function defineTaskStatus(taskStatus: string){
    if(taskStatus==="Todo") return "todo";
    else if(taskStatus==="In Progress") return "in-progress";
    else if(taskStatus==="Done") return "done";
    return "";
  }

  function changeTaskStatus(idOfClickedTask: number) {
    const updatedTasks = tasks.map((item) => {
        if (item.id !== idOfClickedTask) return item;

        let nextStatus;
        if(item.status==="Todo") item.status="In Progress";
        else if(item.status==="In Progress") item.status="Done";
        else if(item.status==="Done") item.status="Todo";
        return item;
    });
    setTasks(updatedTasks);
    LS.setItem("tasks", JSON.stringify(updatedTasks));
    }


  function deleteTask(idOfClickedTask: number){
    let currentTasks = [...tasks];
    let indexOfTask = currentTasks.findIndex((item)=>{
        return item.id===idOfClickedTask;
    });
    currentTasks.splice(indexOfTask, 1);
    console.log(currentTasks);
    setTasks(currentTasks);
    LS.setItem("tasks", JSON.stringify(currentTasks));
  }


  return (
    <main className="taskTracker">
        
      <div className="taskTracker_container">

        <div className="taskTracker_intro">
          <h1 className="taskTracker_mainTitle">Task tracker</h1>
          <p className="taskTracker_introDescription">Here you can document your goals and tasks.</p>
        </div>

        <div className="taskTracker_formContainer">
          <form id="taskTracker_form" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Write name of task" className="taskTracker_input" type="text" {...register('name', { required: true })}/>
            {errors.name && (<p className="taskTracker_error">Task name is required</p>)}

            <input placeholder="Write short description for task" className="taskTracker_input" type="text" {...register('description', {required: true})}/>
            {errors.description && (<p className="taskTracker_error">Task description is required</p>)}

            <select className="taskTracker_select"{...register('status')}>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>

            <button className="taskTracker_button" type="submit">Add task</button>
          </form>
        </div>

        <div className='taskTracker_tasks'>
            <p className='taskTracker_tasksTitle'>Your tasks:</p>
            {tasks.length === 0 && (<p className="taskTracker_error">Sorry, in current moment you have no tasks yet. Follow instructions to add new tasks.</p>)}
            {tasks.map((task, index) => (
                <div onClick={(e) => {changeTaskStatus(task.id)}} key={task.id} className={`taskTracker_task ${defineTaskStatus(task.status)}`}>
                    <h3 className="taskTracker_taskText">{index+1}. Task name: {task.name}</h3>
                    <p className="taskTracker_taskText">Task description: {task.description}</p>
                    <p className="taskTracker_taskText">Task status: {task.status}</p>
                    <button className="taskTracker_deleteTask" onClick={(e)=>{e.stopPropagation(); deleteTask(task.id)} }>Delete task</button>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
