import React,{ ReactElement,useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from "./TaskForm.module.css"
import iTask from '../interfaces/Task'
import { ITask } from '../../interfaces/Task'
import TaskList from '../taskList/taskList'

type Props = {
  btnText:string
  taskList:iTask[]
  setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>>
  task?: iTask |null
  handleUpdate?(id: number, title: string, difficulty: number):void
}

function Taskform({btnText,taskList,setTaskList,task,handleUpdate}: Props):ReactElement {
  
  const [id,setId]= useState<number>(0);
  const [difficulty,setDifficulty]= useState<number>(0);
  const [title,setTitle]= useState<string>("")

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);


  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(handleUpdate);
    if (taskList) {
      if (handleUpdate) {
        console.log(title);
        console.log(difficulty);
        handleUpdate(id, title, difficulty);
      } else {
        const id = Math.floor(Math.random() * 1000);

        const newTask: ITask = { id, title, difficulty };

        setTaskList!([...taskList, newTask]);

        setTitle("");
        setDifficulty(0);
      }
    }
  };
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
 if(e.target.name === "title"){
  setTitle(e.target.value)
 }else{
  setDifficulty(parseInt(e.target.value))
 }
 
  }
  
  
  
  
  
  return (
  
  <form onSubmit={addTaskHandler} className={styles.form}>
    <div> 
      <div className={styles.input_container}>

    <label htmlFor='title' className='label'>Titulo:</label>
    <input type="text" name= "title" placeholder="titulo da tarefa" className='input' onChange={handleChange}value={title}/>
     
    </div>
  <div className={styles.input_container}>

  <label htmlFor='difficulty' className='label' >Dificuldade:</label>
  <input type="text" name= "difficulty" placeholder="Dificuldade da tarefa" className='input' onChange={handleChange} value={difficulty}/>

  </div>
  <div className="control">
    <input className="button is-link  is-rounded" type="submit" value={btnText}/>
  </div>
</div>
  </form>
    
    
  
  )
}

export default Taskform