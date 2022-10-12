import React from 'react'

const Task = (tasks,onDelete) => {
  return (
    <>
     {tasks.map((task,index) => (
     <Task key={index} task={task} onDelete={onDelete} />))} 
    </>
  )
}

export default Task
