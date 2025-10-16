import React from 'react'
import { CategorySalesChart, OrdersStatusChart, OrdersSummary, Sales, TopProducts} from './components'

const page = () => {
    return (
        <main>
            <OrdersSummary />
            <OrdersStatusChart />
            <Sales />
            <TopProducts />
            <CategorySalesChart />
        </main>
    )
}

export default page