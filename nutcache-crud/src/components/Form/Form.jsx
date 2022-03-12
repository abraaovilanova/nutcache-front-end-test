import React, { useState } from 'react'
import axios from 'axios'
import './Form.css'

function formataCPF(cpf){
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");

    //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }


const Form = ({ selectedEmployee, hendleCancel }) => {
    const base_url = process.env.REACT_APP_BASE_URL


    const [name, setName] = useState(selectedEmployee? selectedEmployee.name : '')
    const [email, setEmail] = useState(selectedEmployee? selectedEmployee.email : '')
    const [cpf, setCpf] = useState(selectedEmployee? formataCPF(selectedEmployee.cpf) : '')
    const [startDate, setStartDate] = useState(selectedEmployee? selectedEmployee.startDate : '')
    const [birthDate, setBirthDate] = useState(selectedEmployee? selectedEmployee.birthDate.split('T')[0] : '')
    const [gender, setGender] = useState(selectedEmployee? selectedEmployee.gender : '')
    const [team, setTeam] = useState(selectedEmployee? selectedEmployee.team : '')
    const [showAlert, setShowAlert] = useState(false)
    
    

    
    const handleValidation = () => {

        let formIsValid = false

        if(name && birthDate && email && cpf && startDate && gender){
            if(startDate.match(/[0-9]{2}\/[0-9]{4}/)){
                formIsValid = true
            }
        }

        return formIsValid
        
    }

    const validationColor = (stateValue, inputName='default') => {
        const SUCCESS_BORDER_COLOR = 'green'
        const FAIL_BORDER_COLOR = showAlert ? 'red' : 'none' 

        if(inputName==='start-date'){
            if(stateValue.match(/[0-9]{2}\/[0-9]{4}/)){
                return SUCCESS_BORDER_COLOR

            }else {
                return FAIL_BORDER_COLOR
            }
        }

        if(stateValue){
            return SUCCESS_BORDER_COLOR
        }else{
            return FAIL_BORDER_COLOR
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!handleValidation()){
            setShowAlert(true)
            return 
        }

        const body = {
            name,
            birthDate,
            email,
            cpf,
            startDate,
            gender,
            team
        }

        await axios.post(base_url, body)
        setName('')
        setEmail('')
        setCpf('')
        setStartDate('')
        setBirthDate('')
        setGender('')
        setTeam('')
        hendleCancel(e)
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

        if(!handleValidation()){
            setShowAlert(true)
            return 
        }

        await axios.put(base_url + '/' + selectedEmployee._id, body)
        setName('')
        setEmail('')
        setCpf('')
        setStartDate('')
        setBirthDate('')
        setGender('')
        setTeam('')
        hendleCancel(e)
    }

      

    return (
        <div className="Form">
            <form role="form" action="">
                {showAlert ? <p style={{color:'red'}}>Data with * are required</p> : '' }
                
                <div className="form-group">
                    <label htmlFor="fname"> Employee name*:</label>
                    <input 
                        type="text" 
                        id="fname" 
                        name="fname" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{border: `1px solid ${validationColor(name)}`}}
                        required 
                    />

                    {showAlert & validationColor(name) === 'red' ?  <p style={{color: validationColor(name)}}>Please provide a valid name.</p> : ''}
                   
                </div>
                <div className="form-group">
                    <label htmlFor="fdate" >Birth Date*:</label>
                    <input 
                        type="date" 
                        id="fdate" 
                        name="fdate" 
                        value={birthDate} 
                        onChange={(e) => setBirthDate(e.target.value)} 
                        style={{border: `1px solid ${validationColor(birthDate)}`}}  
                        required
                    />
                     {showAlert & validationColor(birthDate) === 'red' ?  <p style={{color: validationColor(birthDate), fontSize:'small'}}>Please provide a valid birth date.</p> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="fgender">Gender*:</label>
                    <select 
                        name="fgender" 
                        id="fgender" 
                        value={gender} 
                        onChange={(e) =>setGender(e.target.value)} 
                        style={{border: `1px solid ${validationColor(gender)}`}}  
                        required
                    >
                        <option value=''></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {showAlert & validationColor(gender) === 'red' ?  <p style={{color: validationColor(gender), fontSize:'small'}}>Please provide a valid gender</p> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="femail" >Email*:</label>
                    <input 
                        type="text" 
                        id="femail" 
                        name="femail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        style={{border: `1px solid ${validationColor(email)}`}} 
                        required 
                />
                {showAlert & validationColor(email) === 'red' ?  <p style={{color: validationColor(email), fontSize:'small'}}>Please provide a valid gender</p> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="fcpf" >CPF*:</label>
                    <input 
                        type="text" 
                        id="fcpf" 
                        name="fcpf" 
                        value={cpf} 
                        onChange={(e) => setCpf(formataCPF(e.target.value))} 
                        style={{border: `1px solid ${validationColor(cpf)}`}} 
                        required 
                    />
                    {showAlert & validationColor(cpf) === 'red' ?  <p style={{color: validationColor(cpf), fontSize:'small'}}>Please provide a valid gender</p> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="fstartdate" >Start Date (MM/YYYY)*</label>
                    <input 
                        type="text" 
                        id="fstartdate" 
                        name="fstartdate" 
                        value={startDate}
                        placeholder="MM/YYYY" 
                        onChange={(e) => setStartDate(e.target.value)} 
                        style={{border: `1px solid ${validationColor(startDate, 'start-date')}`}}
                        required 
                    />
                     {showAlert & validationColor(startDate, 'start-date') === 'red'  ? <p style={{color: validationColor(startDate, 'start-date'), fontSize:'small'}}>Please provide a valid gender</p> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="fteam" >Team:</label>
                    <select name="fteam" id="fteam" value={team} onChange={(e) => setTeam(e.target.value)}>
                        <option value=" "></option>
                        <option value="mobile">Mobile</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                    </select>
                    
                </div>


                
                {selectedEmployee?
                <input type="submit" value="Edit" onClick={(e)=> handleEditEmployee(e)} />
                :<input type="submit" value="Create" onClick={(e) => handleSubmit(e)} />}
                <button onClick={(e)=> hendleCancel(e)}>Cancel</button>
            </form>     
        </div>
    )
}

export default Form