'use client'
import { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import './paymentMethodsCard.scss';


export default function PaymentMethodCard({index, method, onRequestDelete, setIsModalOpen }) {
    const detectedClass = `card${method.type}`;
    const fallbackClass = 'cardDefault';
    const [deleteCard, setDeleteCard] = useState(false);

    const onClick = () => {
        setDeleteCard(!deleteCard)
    }

    return (
        <div key={index} className={`card ${detectedClass || fallbackClass}`} onClick={onClick}>
            <img
                src={`/images/${method.type.toLowerCase()}.png`}
                alt={method.type}
                className="cardLogo"
            />

            <div className="cardNumber">{method.cardNumber}</div>
            <div className="cardHolder">{method.holder}</div>
            <div className="cardExpiry">{method.expiry}</div>
            {deleteCard && (
                <div className='container-delete' onClick={() => setIsModalOpen(true)}>
                    <div className='container-trash'>
                        <FaRegTrashCan />
                    </div>
                </div>
            )}
        </div>
    );
}
