import { render, screen } from '@testing-library/react'

import Table from './Table'

test('Display information for each employee', async () => {
    render(<Table handleEdit={jest.fn()} />)

    const tableRow = await screen.findByText(/email/i)
    expect(tableRow).toBeInTheDocument()

})