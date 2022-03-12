import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('Should  have a button inscribed Create Employee', ()=>{
    render(<App />)

    const createEmployeeBtn = screen.getByRole('button', {name: /create employee/i })

    expect(createEmployeeBtn).toBeInTheDocument()

})

test('Should have a Form popup when Create Employee Button is clicked', async ()=>{
    render(<App />)

    const createEmployeeBtn = screen.getByRole('button', {name: /create employee/i })
    fireEvent.click(createEmployeeBtn)

    const formPopup = await screen.findByRole('form')
    expect(formPopup).toBeInTheDocument()
})