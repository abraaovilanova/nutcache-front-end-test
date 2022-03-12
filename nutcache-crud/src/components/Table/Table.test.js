import { render, screen, waitFor } from '@testing-library/react'

import Table from './Table'

const mockemployee = {
    _id: "620a9aa001fc3630a3735d69",
    name: "Ana Paula",
    birthDate: "1995-10-21T00:00:00.000Z",
    gender: "female",
    email: "anapaula@email.com",
    cpf: "123456789",
    startDate: "05/2022",
    team: "backend",
    __v: 0
}

test('Display information for each employee', async () => {
    render(<Table handleEdit={jest.fn()} />)

    // Employee name
    const employeeName = await screen.findByText(mockemployee.name)
    expect(employeeName).toBeInTheDocument()

    const employeeemail = await screen.findByText(mockemployee.email)
    expect(employeeemail).toBeInTheDocument()
})