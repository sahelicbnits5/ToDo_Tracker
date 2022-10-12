import React from 'react'
import {useState} from 'react'

const Header = ({onAdd}) => {
    const [text,setText] = useState('')
    const onSubmit = (e) =>
    {
      e.preventDefault()
      if(!text){
        alert('Please add a task')
        return
      }
      onAdd({text})
      setText('')

    }
  return (
    <div onSubmit={onSubmit}>
    
    <header >
           <input className='todo-input' placeholder="What's need to be done?" autoFocus
            value={text} 
onChange={(e)=> setText(e.target.value)}></input>
       </header>
      
       </div>
  )
}

export default Header
