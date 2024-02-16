import React,{useState} from 'react'
import axios from 'axios'
import API_URL from '../API/API_URL'; 
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const[userData, setUserData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  })
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
        await axios.post(API_URL, userData)
        setUserData({
            fname: '',
            lname: '',
            email: '',
            phone: ''
        })
        navigate('/read')
    }
    catch(error){
        console.log("Error")
    }
  }
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name] : e.target.value})
  }
  return (
    <div>
        <h1>Create Form</h1>
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='text' name="fname" onChange={handleChange} value={userData.fname}/><br />
            <label>Last Name</label>
            <input type='text' name="lname" onChange={handleChange} value={userData.lname}/><br />
            <label>Email</label>
            <input type='email' name="email" onChange={handleChange} value={userData.email}/><br />
            <label>Phone Number</label>
            <input type='tel' name="phone" onChange={handleChange} value={userData.phone}/><br />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Create