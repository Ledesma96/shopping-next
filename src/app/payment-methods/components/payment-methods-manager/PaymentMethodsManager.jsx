'use client';
import { useState } from 'react';
import Modal from '../../../components/modules/modal/Modal';
import { PaymentMethodCard } from './components';
import './paymentMethodsManager.scss';

export default function PaymentMethodsManager({ paymentMethods }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMethodId, setSelectedMethodId] = useState(null);

    const handleRequestDelete = (methodId) => {
        setSelectedMethodId(methodId);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedMethodId(null);
    };

    const handleConfirm = () => {
        console.log('Confirmaste eliminar la tarjeta:', selectedMethodId);
        setIsModalOpen(false);
        setSelectedMethodId(null);
    };

    return (
        <>
        <div className="paymentList">
            {paymentMethods.map((method, index) => (
                <PaymentMethodCard
                    key={index}
                    index={index}
                    method={method}
                    onRequestDelete={handleRequestDelete}
                    setIsModalOpen={setIsModalOpen}
                />
            ))}
        </div>

        <Modal
            isOpen={isModalOpen}
            title="¿Estás seguro?"
            description="Esta acción no se puede deshacer."
            onConfirm={handleConfirm}
            onCancel={handleCancel}
        />
        </>
    );
}
