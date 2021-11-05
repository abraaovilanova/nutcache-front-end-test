import React, { useState } from 'react'
import axios from 'axios'



export default ({ selectedEmployee, hendleCancel }) => {
    const base_url = ' http://localhost:3001/employees'
    const [name, setName] = useState(selectedEmployee? selectedEmployee.name : '')
    const [email, setEmail] = useState(selectedEmployee? selectedEmployee.email : '')
    const [cpf, setCpf] = useState(selectedEmployee? selectedEmployee.cpf : '')
    const [startDate, setStartDate] = useState(selectedEmployee? selectedEmployee.startDate : '')
    const [birthDate, setBirthDate] = useState(selectedEmployee? selectedEmployee.birthDate.split('T')[0] : '')
    const [gender, setGender] = useState(selectedEmployee? selectedEmployee.gender : '')
    const [team, setTeam] = useState(selectedEmployee? selectedEmployee.team : '')


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const body = {
            name,
            birthDate,
            email,
            cpf,
            startDate,
            gender,
            team
        }
        console.log(body)

        await axios.post(base_url, body)
        setName('')
        setEmail('')
        setCpf('')
        setStartDate('')
        setBirthDate('')
        setGender('')
        setTeam('')
    }

    const handleEditEmployee = async (e) =>{
        e.preventDefault();
        const body = {
            name,
            birthDate,
            email,
            cpf,
            startDate,
            gender,
            team
        }

        await axios.put(base_url + '/' + selectedEmployee._id, body)
        setName('')
        setEmail('')
        setCpf('')
        setStartDate('')
        setBirthDate('')
        setGender('')
        setTeam('')


    }

    return (
        <form action="">
            <label for="fname">Employee name*:</label><br/>
            <input type="text" id="fname" name="fname" value={name} onChange={(e) => setName(e.target.value)} /><br/>

            <label for="fdate" >Birth Date*:</label><br />
            <input type="date" id="fdate" name="fdate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}  /><br />


            <label for="fgender">Gender*:</label><br />
            <select name="fgender" id="fgender" value={gender} onChange={(e) =>setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <br />
            
            <label for="femal" >Email*:</label><br />
            <input type="text" id="femail" name="femail" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>

            <label for="fcpf" >CPF*:</label><br />
            <input type="text" id="fcpf" name="fcpf" value={cpf} onChange={(e) => setCpf(e.target.value)} /><br/>

            <label for="fdate" >Start Date*</label><br />
            <input type="text" id="fdate" name="fdate" value={startDate} onChange={(e) => setStartDate(e.target.value)}  /><br />
            
            <label for="fteam" >Team:</label><br />
            <select name="fteam" id="fteam" value={team} onChange={(e) => setTeam(e.target.value)}>
                <option value=" "></option>
                <option value="mobile">Mobile</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
            </select>

            <br />
            <p>Data with * are required</p>

            {selectedEmployee?
            <input type="submit" value="Edit" onClick={(e)=> handleEditEmployee(e)} />
            :<input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />}
            <button onClick={(e)=> hendleCancel(e)}>Cancel</button>
        </form>     
    )
}