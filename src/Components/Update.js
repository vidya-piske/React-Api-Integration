// Update.js
import React, { useEffect, useState } from 'react';
import API_URL from '../API/API_URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${API_URL}/${userData.id}`, userData);
            navigate('/read');
        } catch (error) {
            console.log("Error Occured!!!!", error);
        }
    };

    return (
        <div>
            <h1>Update Form</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type='text' name='fname' onChange={handleChange} value={userData.fname} /><br />
                <label>Last Name</label>
                <input type='text' name='lname' onChange={handleChange} value={userData.lname} /><br />
                <label>Email</label>
                <input type='email' name='email' onChange={handleChange} value={userData.email} /><br />
                <label>Phone Number</label>
                <input type='tel' name='phone' onChange={handleChange} value={userData.phone} /><br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
