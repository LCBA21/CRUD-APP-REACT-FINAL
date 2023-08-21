import React from 'react'
import Employees from './Employees'
import {Link,useNavigate}  from 'react-router-dom'
import {FaPen} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import  {  useState,useEffect } from 'react';




const Home = () => {
    const [image, setImage] = useState(null);


    let histroy = useNavigate();

    const handleDelete = (id) =>{
        var index =Employees.map(function(e){
               return e.id         

        }).indexOf(id);
        Employees.splice(index,1)

        histroy('/')
    }

    const handleEdit= (id,name,job) =>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Job',job)
        localStorage.setItem('Id',id)

    }

    useEffect(() => {
      const storedImage = localStorage.getItem('uploadedImage');
      if (storedImage) {
        setImage(storedImage);
      }
    }, []);


  return (                     
                <div>
                   
                <div className='display-member'>
                
                            {
                                 Employees && Employees.length >0   
                                ? 
                                Employees.map((item) =>{
                                    return(
                                           <tr>
                                            <div className='smaller-img'>
                                            {image && <img src={image} alt="Uploaded" className="circle-image-smaller" />}
                                            </div>
                                            <div className='Members-Added'>
                                                <div>
                                            
                                                    {item.Name}
                                                
                                                </div>
                                           
                                               
                                            <div>
                                            
                                                    {item.Job}
                                                
                                            </div>
                                        
                                                </div>

                                                
                                              
                                              <div className='edit-icon'>
                                            
                                                    &nbsp;
                                                    &nbsp;
                                                    {/* <Link to={`/edit`}>
                                                    <button onClick={()=> handleEdit(item.id,item.Name,item.Job)}>Edit</button>
                                                    </Link> */}

                                                    <Link to={`/edit`}>
                                                    <FaPen
                                                    onClick={()=> handleEdit(item.id,item.Name,item.Job)}
                                                    />
                                                    </Link>
                                                    &nbsp;
                                                    &nbsp;
                                                
                                              </div>
                                               


                                                <div className='delete-icon'>
                                            
                                                    <FaTrash
                                                    onClick={()=> handleDelete(item.id)}
                                                    />
                                                {/* <button onClick={()=> handleDelete(item.id)}>DELETE</button> */}
                                                
                                                 </div>      
                                                
                                           </tr>     
                                    )
                                })
                                :
                                "No Memebers Entered"

                            }

                        <br></br>
                    <Link to="/create">
                        <button className='btn'>Add Member</button>
                    </Link>
                </div>
                </div>
                        
                   
  )
}

export default Home
