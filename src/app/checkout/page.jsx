import React from 'react'
import { Actions, Payment, Send } from './components'

const page = () => {
    return (
        <div>
            <Send />
            <Payment />
            <Actions />
        </div>
    )
}

export default page