import React from 'react'
import  {useState,useEffect} from 'react'
import Employees from './Employees'
import {v4 as uuid} from "uuid"
import {Link,useNavigate}  from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import ImageLocalStorage from './ImageLocalStorage'; 





const Edit = () => {
    const [name,setName] = useState('')
    const [job,setJob] = useState('')
    const [id,setId] = useState('')
    const [image, setImage] = useState(null);


    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
          const reader = new FileReader();
          reader.onload = () => {
            const imageData = reader.result;
            localStorage.setItem('uploadedImage', imageData);
            setImage(imageData);
          };
          reader.readAsDataURL(selectedImage);
        }
      };

    let histroy= useNavigate();

    var index =Employees.map(function(e){
        return e.id         

 }).indexOf(id);

 const handleSubmit =(e) =>{
    e.preventDefault();

    let a=Employees[index];
    a.Name=name
    a.Job=job


    histroy("/")
}

const toggleback=(e)=>{

    histroy("/")

}


//image use effect
useEffect(() => {
  const storedImage = localStorage.getItem('uploadedImage');
  if (storedImage) {
    setImage(storedImage);
  }
}, []);

useEffect(() =>{
    setName(localStorage.getItem('Name'))
    setJob(localStorage.getItem('Job'))
    setId(localStorage.getItem('Id'))
},[])

  return (
    <div className='container'>

            <div className="image-local-storage-edit">
                
                <input
                type="file"
                id="image-input"
                accept="image/*"
                onChange={handleImageUpload}
                className='img-icon'
                />
                {image && <img  src={image} alt="Uploaded" className="circle-image" />}
            </div>

                 <form>


                    <div className='back-arrow'>
                        <FaArrowLeft   onClick={(e) => toggleback(e)}/>
                        {/* <button onClick={(e) => toggleback(e)}>Back</button> */}
                    </div>

                  <input 
                  type='text'
                  placeholder='Full Name:'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='input-field1-edit'
                  />

                  <input 
                  type="text" 
                  placeholder="Job Title:" 
                  required 
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  className='input-field2-edit'
                  />
            <button className='edit-member' onClick={(e) => handleSubmit(e)} type='submit'>Edit Member</button>
            </form>
      
    </div>
  )
}

export default Edit
