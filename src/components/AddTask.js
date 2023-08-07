import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


export default function AddTask() {

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    // const [status, setstatus] = useState()

    const usenavigate = useNavigate()

    

    const handleAddTask = (e)=>{
        e.preventDefault();
        
      const sOption = document.getElementById('addStatus');
      const status = sOption.options[sOption.selectedIndex].value;



      
      let toDate; 
      if (status === "pending") {
        toDate = 'pending'
      }
      else{
        toDate = new Date().toLocaleDateString()
      }

      if (status === "" || status === null) {
        alert('please Select task status')
      }else{
        
      const newTask = {
        name : name,
        description : description,
        status: status,
        from: new Date().toLocaleDateString(),
        to: toDate
      }

        fetch(`http://localhost:8000/task`, {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
        }).then((res)=>{
            res.json().then(()=>{
                usenavigate("/");
            })
        })

      }



        
    }

  return (
    <div className="container flex align-c j-co-c">
        <form className="add-user-form" action="" onSubmit={handleAddTask} >
            
            <div className="input-field flex align-c j-co-c">
              <label htmlFor="name">Name : </label>
              <input type="text" id="name" placeholder="Enter Name" value={name} onChange={e=>setname(e.target.value)}  required/>
            </div>
            <div className="input-field flex align-c j-co-c">
              <label htmlFor="description">description : </label>
              <input type="text" id="description"placeholder="Enter description Id" value={description} onChange={e=>setdescription(e.target.value)} required/>
            </div>
            <div className="input-field flex align-c j-co-c">
              <label htmlFor="status">Status : </label>
              <select name="status" id="addStatus">
                <option value="">Select Status of Task</option>
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div className="input-field flex align-c j-co-c">
                <input type="submit" value="Add Task" />
            </div>
        </form>
    </div>
  );
}
