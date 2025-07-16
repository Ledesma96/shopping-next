import React from 'react'
import './answerAndQuestion.scss'
import { Answer, Question } from './components'

const AnswerAndQuestion = () => {
    return (
        <section className='answer-and-question-container'>
            <Question />
            <Answer />
        </section>
    )
}

export default AnswerAndQuestion