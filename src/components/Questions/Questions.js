import React from 'react'
import { questions } from '../../mock/data'
import Question from './Question/Question'
import RegisterForm from '../RegisterForm/RegisterForm'
import styled from 'styled-components'
import './Questions.css'
function Questions() {

    return (

        <div className="questions">
            <div className="m-auto ">
                <h1 className="text-center q-title">Frequently Asked Questions</h1>

                {questions.map(x =>
                    <Question question={x} key={x.id} />)}
                <RegisterForm />

            </div>

        </div >

    )
}

export default Questions
