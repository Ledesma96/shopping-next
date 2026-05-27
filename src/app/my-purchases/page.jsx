import React from 'react'
import { PurchasesManager } from './components'
import './page.scss'

const page = () => {
    return (
        <main className='main'>
            <h2>Mis compras</h2>
            <PurchasesManager />
        </main>
    )
}

export default page