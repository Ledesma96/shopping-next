import React from 'react';
import './answer.scss';
const questionsAndAnswers = [
    {
        id: 1,
        question: "¿Cuánto tarda el envío a Buenos Aires?",
        answer: "El envío estándar tarda entre 3 y 5 días hábiles."
    },
    {
        id: 2,
        question: "¿Viene con garantía?",
        answer: "Sí, tiene garantía oficial de 6 meses."
    },
    {
        id: 3,
        question: "¿La remera es de algodón 100%?",
        answer: "Sí, es 100% algodón premium."
    },
    {
        id: 4,
        question: "¿Tienen más talles disponibles?",
        answer: "Actualmente tenemos stock en S, M y L."
    },
    {
        id: 5,
        question: "¿Puedo cambiar el producto si no me queda bien?",
        answer: "Sí, aceptamos cambios dentro de los 30 días posteriores a la compra."
    },
];
const Answer = () => {
    return (
        <div className='container-answer'>
            {questionsAndAnswers.map((item, index) => (
                <div className='container-answer__item' key={index}>
                    <h5>{item.question}</h5>
                    <p>{item.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default Answer