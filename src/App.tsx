import React,{useState} from 'react';
import Header from './components/header/header';
import 'bulma/css/bulma.min.css';

import Footer from './components/footer/footer';
import styles from './App.module.css'

import Taskform from './components/taskForm/taskForm';
import TaskList from './components/taskList/taskList';


import { ITask } from "./interfaces/Task";
import Modal from './components/modal/modal';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate,setTaskToUpdate]= useState<ITask | null>(null)


  const deleteTask = (id:number)=>{
    setTaskList(
      taskList.filter((task)=>{
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

   const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };
  



  return (
    <div>
      <Modal
        
        children={
          <Taskform
            btnText="Editar"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header/>
      <div className='main'>
      
      <main className={styles.main}>
      <div >
        <h1 className='title'>Oque voce vai fazer?</h1>
        <Taskform btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div >
      <h1 className='subtitle'>Suas tarefas</h1>
      <TaskList  taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}  />
      </div>
      
      </main>
      </div>
      
      <Footer/>
    </div>
   
  );  
}

export default App;
