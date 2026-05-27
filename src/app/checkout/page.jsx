'use client'
import React, { useState } from 'react'
import { Actions, Payment, Send } from './components'

const page = () => {
    const [selectedMethod, setSelectedMethod] = useState('mercadopago');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [send, setSend] = useState(true);
    return (
        <div>
            <Send
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
                send={send}
                setSend={setSend}
            />
            <Payment
                setSelectedMethod={setSelectedMethod}
                selectedMethod={selectedMethod}
            />
            <Actions
                selectedMethod={selectedMethod}
                selectedAddress={selectedAddress}
                send={send}
                setSend={setSend}
            />
        </div>
    )
}

export default page