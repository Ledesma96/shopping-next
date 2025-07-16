'use client'
import React, { useState } from 'react'
import './question.scss'

const Question = () => {
    const [question, setQuestion] = useState('')
    return (
        <div className="container-question">
            <h4 className="container-question__title">Realiza tu consulta</h4>
            <div className="container-question__form-wrapper">
                <form className="container-question__form-wrapper__form">
                    <textarea className="container-question__form-wrapper__form__textarea" placeholder="Preguntar..." />
                </form>
                <button className="container-question__form-wrapper__button">Preguntar</button>
            </div>
        </div>
    )
}

export default Question