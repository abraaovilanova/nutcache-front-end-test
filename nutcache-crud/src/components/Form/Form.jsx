import React, { useState } from 'react'
import axios from 'axios'
import './Form.css'



const Form = ({ selectedEmployee, hendleCancel }) => {
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

    function formataCPF(cpf){
        //retira os caracteres indesejados...
        cpf = cpf.replace(/[^\d]/g, "");
        
        //realizar a formatação...
          return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
      

    return (
        <div className="Form">
            <form action="">
                <div className="form-group">
                    <label for="fname">Employee name*:</label>
                    <input type="text" id="fname" name="fname" value={name} onChange={(e) => setName(e.target.value)} required /><br/>
                </div>
                <div className="form-group">
                    <label for="fdate" >Birth Date*:</label>
                    <input type="date" id="fdate" name="fdate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required /><br />
                </div>
                <div className="form-group">
                    <label for="fgender">Gender*:</label>
                    <select name="fgender" id="fgender" value={gender} onChange={(e) =>setGender(e.target.value)} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="femail" >Email*:</label>
                    <input type="text" id="femail" name="femail" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
                </div>
                <div className="form-group">
                    <label for="fcpf" >CPF*:</label>
                    <input type="text" id="fcpf" name="fcpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required /><br/>
                </div>
                <div className="form-group">
                    <label for="fstartdate" >Start Date*</label>
                    <input type="text" id="fstartdate" name="fstartdate" value={startDate} onChange={(e) => setStartDate(e.target.value)}  required /><br />
                </div>
                <div className="form-group">
                    <label for="fteam" >Team:</label>
                    <select name="fteam" id="fteam" value={team} onChange={(e) => setTeam(e.target.value)}>
                        <option value=" "></option>
                        <option value="mobile">Mobile</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                    </select>
                </div>

                <p>Data with * are required</p>
                
                {selectedEmployee?
                <input type="submit" value="Edit" onClick={(e)=> handleEditEmployee(e)} />
                :<input type="submit" value="Create" onClick={(e) => handleSubmit(e)} />}
                <button onClick={(e)=> hendleCancel(e)}>Cancel</button>
            </form>     
        </div>
    )
}

export default Form