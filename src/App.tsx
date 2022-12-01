import React,{useState} from 'react';
import Header from './components/header/header';
import 'bulma/css/bulma.min.css';

import Footer from './components/footer/footer';
import styles from './App.module.css'

import Taskform from './components/taskForm/taskForm';
import TaskList from './components/taskList/taskList';


import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);


  return (
    <div>
      <Header/>
      <div className='main'>
      
      <main className={styles.main}>
      <div className='section'>
        <h1 className='title'>Oque voce vai fazer?</h1>
        <Taskform btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div className='section'>
      <h1 className='subtitle'>Suas tarefas</h1>
      <TaskList/>
      </div>
      </main>
      </div>
      
      <Footer/>
    </div>
   
  );  
}

export default App;
