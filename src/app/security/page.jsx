import React from 'react'
import { Authentication, Logout, Password } from './components'

const page = () => {
    return (
        <main>
            <Password />
            <Authentication />
            <Logout />
        </main>
    )
}

export default page