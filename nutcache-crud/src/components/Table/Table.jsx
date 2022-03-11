import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Table.css'
import Popup from '../Popup/Popup'

const Table =  ({ handleEdit }) => {
    const [nutemployees, setNutemployees] = useState([])
    const [showDeletPopup, setShowDeletPopup] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState('')
    

    const handleShowDeletPopup = (employee) => {
        setShowDeletPopup(true)
        setSelectedEmployee(employee)
    }

    const handleDelet = () => {
        axios.delete('http://localhost:3001/employees/' + selectedEmployee._id)
            .then(console.log) 
            .catch(err => console.log(err))
        setShowDeletPopup(!showDeletPopup)
    }

    useEffect(()=>{
        axios.get('http://localhost:3001/employees')
            .then(res =>{
                setNutemployees([...res.data.employee])
            }) 
            .catch(err => console.log(err))
    },[])

    // Usar método quando for testar os dados completos
    useEffect(()=>{
        axios.get('http://localhost:3001/employees')
            .then(res =>{
                setNutemployees([...res.data.employee])
            }) 
            .catch(err => console.log(err))
    },[handleEdit, handleDelet])



    return (
        <div className="Table">
        <Popup trigger={showDeletPopup}>
            <p>Are you sure you want to delete this employee?</p>
            <div className="btn-group">
                <button className="confirmation-btn" onClick={(e)=>handleDelet(e)}>Yes</button>
                <button className="cancel-btn" onClick={(e)=>setShowDeletPopup(!showDeletPopup)}>No</button>
            </div>
        </Popup>

        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Start Date</th>
                    <th>Team</th>
                    <th>Actions</th>
                </tr>
            {nutemployees?.map((employee,idx) => {
                return (
                    <tr key={`${employee}-${idx}`}>
                        <td>{ employee.name }</td>
                        <td>{ employee.email }</td>
                        <td>{ employee.startDate }</td>
                        <td>{ employee.team }</td>
                        <td>
                            <button onClick={(e)=> handleEdit(employee) }><i className="fa fa-pencil" aria-hidden="true"></i></button> 
                            <button onClick={(e)=> handleShowDeletPopup(employee)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </td>    
                    </tr>
                )
            })}
            </table>
        </div>
        </div>
    )
}

export default Table