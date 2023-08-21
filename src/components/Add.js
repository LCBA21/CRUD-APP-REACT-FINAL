import React, {useState,useEffect} from 'react'
import Employees from './Employees'
import {v4 as uuid} from "uuid"
import {Link,useNavigate}  from 'react-router-dom'
// ImageLocalStorage component
import ImageLocalStorage from './ImageLocalStorage'; 
import {FaArrowLeft} from 'react-icons/fa'



const Add = () => {

    const [name,setName] = useState('')
    const [job,setJob] = useState('')

    let histroy= useNavigate();

    const handleSubmit =(e) =>{
            e.preventDefault();

            const ids =uuid();
            let uniqueId=ids.slice(0,8)

            let a = name;
            let b=job;
            Employees.push({id:uniqueId,Name:a,Job:b});

            histroy("/")
    }

    const toggleback=(e)=>{
        histroy("/")
    
    }


  return (
    <div className='container'>
              <ImageLocalStorage />

              <div className='back-arrow-add'>
                        <FaArrowLeft   onClick={(e) => toggleback(e)}/>
                        {/* <button onClick={(e) => toggleback(e)}>Back</button> */}
                    </div>
            <form>
                  <input 
                  type='text'
                  placeholder='Full Name:'
                  required
                  onChange={(e) => setName(e.target.value)}
                  className='input-field1'
                  />

                  <input 
                  type="text" 
                  placeholder="Job Title:" 
                  required 
                  onChange={(e) => setJob(e.target.value)}
                  className='input-field2'
                  />

            <button className='btnAdd' onClick={(e) => handleSubmit(e)} type='submit'>Add Member</button>
           
            </form>


    </div>
  )
}

export default Add
