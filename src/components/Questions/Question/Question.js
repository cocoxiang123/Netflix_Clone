import React, { useState } from 'react'
import plus from '../../../img/plus.png'

function Question(props) {
    const { Q, A, A2 } = props.question;
    const [click, setClick] = useState(false);
    const onClickQuestion = () => {
        setClick(!click);
    }
    return (
        <div className="question">
            <div className="question-title" onClick={onClickQuestion}>
                <div>{Q}</div>
                <img src={plus} alt="plus" className={click ? "plus rotateplus" : "plus"} />
            </div>

            <div className={click ? "question-subtitle isClick" : "question-subtitle isClose"}>
                <p>{A}</p>
                <p>{A2}</p>
            </div>

        </div>
    )
}

export default Question
