import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';


export default function Navbar() {
  const usenavigate = useNavigate()

  const location = useLocation();

  const addTaskForm = ()=>{
    usenavigate('/add_task')
  }
  return (
    <>
        <nav className="navbar flex align-c j-co-sr">
            <div className="logo">
                {/* Logo Here! */}
                <h1>TODO USER</h1>
            </div>
            <div className="nav-links">
              <ul className='flex align-c '>
                <li><Link className={ location.pathname === "/" ? "active": "inactive"} to="/" >All Tasks</Link></li>
                <li><Link className={ location.pathname === "/pending-task" ? "active": "inactive"} to="/pending-task" >Pending Tasks</Link></li>
                <li><Link className={ location.pathname === "/complete-task" ? "active": "inactive"} to="/complete-task" >complete Tasks</Link></li>
              </ul>
            </div>
            <div className="nav-item">
                <button onClick={addTaskForm}>Add Task</button>
            </div>
        </nav> 
    </>
  )
}


