import React,{ ReactElement } from 'react'
import iTask from '../interfaces/Task'
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from './TaskList.module.css'

type Props = {
  taskList:iTask[]
  handleDelete(id:number):void
  handleEdit(task: iTask):void
  task?: iTask |null
}

function TaskList({taskList,handleDelete,handleEdit}: Props):ReactElement  {
  return (
    <div>
      {taskList.length > 0 ?(
        taskList.map((task)=>(
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4 className='subtitle'>{task.title}</h4>
              <p className='text'>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
            <i className="bi bi-pencil" onClick={()=>{handleEdit(task)}}></i>
            <i
              className="bi bi-trash"
              onClick={()=>{handleDelete(task.id)}}
            ></i>
          </div>
          </div>
        ))
      ):(
        <p>nao ha tarefas cadastradas</p>
      )}

      
    </div>
  )
}

export default TaskList