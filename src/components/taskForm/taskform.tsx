import React,{ ReactElement,useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from "./TaskForm.module.css"
import iTask from '../interfaces/Task'
import { ITask } from '../../interfaces/Task'
import TaskList from '../taskList/taskList'

type Props = {
  btnText:string
  taskList:iTask[]
  setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>>
}

function Taskform({btnText,taskList,setTaskList}: Props):ReactElement {
  
  const [id,setId]= useState<number>(0);
  const [difficulty,setDifficulty]= useState<number>(0);
  const [title,setTitle]= useState<string>("")



  const addTaskHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const id = Math.floor(Math.random()*1000)

    const newTask: iTask ={id,difficulty,title}

    setTaskList!([...taskList,newTask])

    setTitle("");
    setDifficulty(0)

    console.log(taskList)

  }
  
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

  <label htmlFor='difficulty' className='label' >dificuty:</label>
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