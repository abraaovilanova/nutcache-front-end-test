import { render, screen, waitFor } from '@testing-library/react'

import Table from './Table'

test('Display information for each employee', async () => {
    render(<Table handleEdit={jest.fn()} />)

    const employeeName = await screen.findByText(/ana paula/i)

    expect(employeeName).toBeInTheDocument()

    // await waitFor(() => screen.findByText(/ana Paula/i), {timeout:3000} )

})