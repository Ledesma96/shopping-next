'use client';
import './modal.scss';

export default function Modal({
    isOpen,
    title,
    description,
    onConfirm,
    onCancel,
}) {
    if (!isOpen) return null;
    console.log(isOpen);
    
    return (
        <div className="universal-modal-overlay" onClick={onCancel}>
            <div className="universal-modal" onClick={e => e.stopPropagation()}>
                <h2 className="universal-modal__title">{title}</h2>
                <p className="universal-modal__description">{description}</p>
                <div className="universal-modal__buttons">
                <button
                    onClick={onCancel}
                    className="universal-modal__button universal-modal__button--cancel"
                >
                    Cancelar
                </button>
                <button
                    onClick={onConfirm}
                    className="universal-modal__button universal-modal__button--confirm"
                >
                    Confirmar
                </button>
                </div>
            </div>
        </div>
    );
}
