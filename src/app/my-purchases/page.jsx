import React from 'react'
import { PurchasesManager } from './components'
import './page.scss'
const purchasesMock = [
    {
        "id": "compra-001",
        "fecha": "2025-07-06",
        "total": 157.50,
        "productos": [
            {
                "id": "prod-01",
                "nombre": "Zapatillas Deportivas",
                "precio": 80.00,
                "cantidad": 1,
                "imagen": "https://via.placeholder.com/100x100?text=Zapatillas"
            },
            {
                "id": "prod-02",
                "nombre": "Remera Dry Fit",
                "precio": 25.00,
                "cantidad": 2,
                "imagen": "https://via.placeholder.com/100x100?text=Remera"
            },
            {
                "id": "prod-03",
                "nombre": "Short Deportivo",
                "precio": 27.50,
                "cantidad": 1,
                "imagen": "https://via.placeholder.com/100x100?text=Short"
            }
        ]
        },
        {
        "id": "compra-002",
        "fecha": "2025-07-05",
        "total": 60.00,
        "productos": [
            {
                "id": "prod-04",
                "nombre": "Guantes de Boxeo",
                "precio": 60.00,
                "cantidad": 1,
                "imagen": "https://via.placeholder.com/100x100?text=Guantes"
            }
        ]
    }
]

const page = () => {
    return (
        <main className='main'>
            <h2>Mis compras</h2>
            <PurchasesManager purchasesMock={purchasesMock}/>
        </main>
    )
}

export default page