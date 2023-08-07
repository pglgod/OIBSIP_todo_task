import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function EditPanle() {
    const taskId = sessionStorage.getItem('taskId')

    const usenavigate = useNavigate();

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [status, setstatus] = useState('')
    const [from, setfrom] = useState('')
    // const [to, setTo] = useState('')


    useEffect(()=>{
        loadData();
        // eslint-disable-next-line
    }, [])

    const loadData = ()=>{

        

        fetch(`http://localhost:8000/task/${taskId}`, {method: "GET", redirect:"follow"}).then((res)=>{
            return res.json()
        }).then((resp)=>{
            setname(resp.name)
            setdescription(resp.description)
            setstatus(resp.status)
            setfrom(resp.from)
            // setTo(resp.to)
        });
    }

    const handleUpdate = (e)=>{
        e.preventDefault();


        
        const sOption = document.getElementById('editStatus');
        const ss = sOption.options[sOption.selectedIndex].value;

        let eDate;

        if (ss === "complete") {
            eDate = new Date().toLocaleDateString()
        }else{
            eDate = "pending"
        }


        if (ss === "" || ss === null) {
            alert('please select status')
        }else{
            let updatedData = {
                name: name,
                description: description,
                status: ss,
                from: from,
                to: eDate
            }
    
            fetch(`http://localhost:8000/task/${taskId}`,{
                method: 'PUT',
                headers:{'Content-Type': 'application/json', 'Accept':'application/json'},
                body: JSON.stringify(updatedData),
            }).then(()=>{
                usenavigate('/')
            })
        }

        
    }


  return (
    
    <div className="container flex align-c j-co-c">
        <form className="add-user-form" action="" onSubmit={handleUpdate} >
            
            
            <div className="input-field flex align-c j-co-c">
              <label htmlFor="name">Name : </label>
              <input type="text" id="name" placeholder="Enter Name" value={name} onChange={e=>setname(e.target.value)}  required/>
            </div>
            <div className="input-field flex align-c j-co-c">
              <label htmlFor="description">description : </label>
              <input type="description" id="description"placeholder="Enter description Id" value={description} onChange={e=>setdescription(e.target.value)} required/>
            </div>
            <div className="input-field flex align-c j-co-c">
              <label htmlFor="status">status : </label>
              <select name="status" id="editStatus">
                <option value={status}>{status}</option>
                <option value={ status === "pending" ? "complete" : "pending" } >{ status === "pending" ? "complete" : "pending" }</option>
              </select>
            </div>
            <div className="input-field flex align-c j-co-c">
                <input type="submit" value="Update Task" />
            </div>
        </form>
    </div>
  )
}
