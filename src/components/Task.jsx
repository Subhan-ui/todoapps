import React, { useEffect, useState } from 'react'

function Task() {
    const [tasks, setTasks]=useState([])
    const [newInput, setNewInput]=useState('')
    const handleChange = e =>{
        setNewInput(e.target.value)
    }
    useEffect(()=>{
        loadTasksFromLocalStorage();
    },[]);
    
    function deleteTask(id) {
        setTasks(prev=>prev.filter(task => task.id !== id));
        const storedData =JSON.parse(localStorage.getItem('tasks'))
        const filteredData = storedData.filter(item=>item.id !== id);
        localStorage.setItem('tasks', JSON.stringify(filteredData));
        console.log(storedData)
    }
    function addTask(){
        // e.preventDefault();
        if(newInput.trim()!==''){
            let textInput = newInput.trim();
            const newId = tasks.length+1;
            
            //   setTasks(prev=>prev.push({id: newId, data: textInput}));
            setTasks(prev=>[...prev,{id: newId, data: textInput}])
            localStorage.setItem('tasks', JSON.stringify([...tasks,{id: newId, data: textInput}]));
            console.log('addtask run')
            setNewInput('');
      

        }
      }
      console.log(tasks)
      function loadTasksFromLocalStorage() {
        const tasksList = JSON.parse(localStorage.getItem('tasks')); 
        if(tasksList){
          setTasks(tasksList);
        }
      }
  return (
    <div className='content2'>
       <h1 className="topHeading">Your Tasks here</h1>
    <div className="cards">
{ tasks&&tasks.map((task) => {
          return (
          <div className="card" key={task.id}>
              <div id="textoftask">{task.id}---> {task.data}</div>
              <button className="iconCross" onClick={()=>deleteTask(task.id)}><i className="fa fa-close"></i></button>
           </div>
        )
        })}
    </div>
    <div className="container">
      <input onChange={handleChange} value={newInput} required type="text" name="text" className="input" />
      <label className="label">Type Your tasks here...</label>
      <button onClick={addTask} type="submit"><i className="fa fa-plus"></i></button>
    </div>
    </div>
  )
}

export default Task
