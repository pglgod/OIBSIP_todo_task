import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TblRow(props) {

  const usenavigate = useNavigate();


  const { status } = props;
  
  const [task, setTask] = useState();

  useEffect(() => {
    loadTask();
    // eslint-disable-next-line
  }, [status]);


  const loadTask = () => {
    
    let category = "";
    if (status=== "" || status === null) {
      category = "";
    }else{
      category=`?status=${status}`
    }

    const url = `http://localhost:8000/task/${category}`
    fetch(url , {
      method: "GET",
      redirect: "follow",
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
          setTask(resp);
      });
  };




  function deleteTask(id) {
    fetch(`http://localhost:8000/task/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then(() => {
        loadTask();

      });
    });
  }




  function openEditPanle(id){
    sessionStorage.setItem("taskId", id);
    usenavigate('/edit_task')
  }

  return (
    <>
      {

        task?.map((element) => {
          return <ul className="t-row flex align-c j-co-sr">
                    <li className="name">{element.name}</li>
                    <li className="des">{element.description}</li>
                    <li className="status">{element.status}</li>
                    <li className="from">{element.from}</li>
                    <li className="to">{element.to}</li>
                    <li className="todo-btns flex align-c j-co-c">
                      <button onClick={()=>openEditPanle(element.id)}>Edit</button>
                      <button onClick={()=>deleteTask(element.id)}>Delete</button>
                    </li>
                  </ul>

        })
      }
    </>
  );
}
