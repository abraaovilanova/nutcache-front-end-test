import React, { useState } from 'react'
import './App.css';

// components
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
      <h1><i className="fa fa-users" aria-hidden="true" /> Nutemployees</h1>
      <Popup 
        trigger={showCreatePop} 
        title={selectedEmployee? "Edit Employee" : "Create a new employee"} icon={'fa fa-user-plus'}
      >
        <Form 
          hendleCancel={hendleCancel} 
          selectedEmployee={selectedEmployee? selectedEmployee : '' }
        />
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
