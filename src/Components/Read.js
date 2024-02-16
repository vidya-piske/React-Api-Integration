// Read.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_URL from '../API/API_URL';
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const [getData, setGetData] = useState([]);
    const navigate = useNavigate()
    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setGetData(response?.data);
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const Remove = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            fetchData()
        }
        catch (error) {
            console.log("Error Occured")
        }
    }

    const Update = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/update');
    }

    return (
        <div>
            <h1>Read Form</h1>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>First Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Phone Number</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getData.map((item) => {
                        const { id, fname, lname, email, phone } = item;
                        return (
                            <tr key={id}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{fname}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{lname}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{email}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{phone}</td>
                                <td style={{ border: '1px solid black', padding: '8px', display: 'flex', gap: '10px' }}>
                                    <button onClick={() => Remove(id)}>Remove</button>
                                    <button onClick={() => Update(item)}>Update</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Read;
