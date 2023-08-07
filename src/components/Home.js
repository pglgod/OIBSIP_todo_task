import React, { useEffect, useState } from 'react';
import TblRow from './TblRow'

export default function Home(props) {

  const { status } = props;
   
  const [heading, setheading] = useState("")

  useEffect(()=>{
    handleHeading();
  })

  const handleHeading = ()=>{
    
    if (status === "" || status === null) {
      setheading("All Task")
    }else{
      setheading(status)
    }

  }

  return (
    <div>
        <h1 className='home-hadding'>{heading.toUpperCase()}</h1>
        <div className='table'>
            <ul  className='t-head flex align-c j-co-sr' >
                <li className='name'>Name</li>
                <li className='des'>Description</li>
                <li className='status'>Status</li>
                <li className='from'>From</li>
                <li className='to'>TO</li>
                <li className='todo-btns'>TODO Button</li>
            </ul>
            <TblRow status={status} />
            
        </div>
    </div>
  )
}
