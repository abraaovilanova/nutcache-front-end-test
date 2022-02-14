import React, { useState } from 'react'
import './App.css';

import Table from './components/Table/Table'
import Form from './components/Form/Form'
import Popup from './components/Popup/Popup'

function App() {
  const [showCreatePop, setShowCreatePop ] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState(undefined)


  const hendleCancel = (e) => {
    e.preventDefault();
    setShowCreatePop(!showCreatePop)

  }

  const handleEdit = (employee) => {
    setShowCreatePop(!showCreatePop)
    setSelectedEmployee(employee)

  }

  return (
    <div className="App">
      <h1>Nutemployees</h1>
      <Popup trigger={showCreatePop} title="Create a naw employee">
        <Form hendleCancel={hendleCancel} selectedEmployee={selectedEmployee?selectedEmployee:''}/>
      </Popup>
      <button onClick={() =>{
        setShowCreatePop(!showCreatePop)
        setSelectedEmployee(undefined)
        } }> Create employee </button>
      <Table handleEdit={handleEdit} />
    </div>
  );
}

export default App;
