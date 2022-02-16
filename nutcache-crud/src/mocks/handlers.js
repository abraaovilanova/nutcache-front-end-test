import { rest } from 'msw'

export const handlers = [
    rest.get("http://localhost:3030/employees", (req, res, ctx) => {
         return res(
             ctx.json([
                {
                    _id: "620a9aa001fc3630a3735d69",
                    name: "Ana Paula",
                    birthDate: "1995-10-21T00:00:00.000Z",
                    gender: "female",
                    email: "anapaula@email.com",
                    cpf: "123456789",
                    startDate: "fev/2022",
                    team: "backend",
                    __v: 0
                },
                {
                    _id: "620a9aa001fc3630a3735d68",
                    name: "Abraão Vila Nova",
                    birthDate: "1994-08-05T00:00:00.000Z",
                    gender: "male",
                    email: "abraao@email.com",
                    cpf: "123456789",
                    startDate: "mar/2021",
                    team: "frontend",
                    __v: 0
                },
            ])
         )
    })
]