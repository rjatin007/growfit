import React from 'react';
import Options from '../../Options/Options';
import './Question.css';
const Question=({question, prev, skip , index , next})=>{

    return(
        <div className='question'>
            <div className='text'>
                <p>{question.title}</p>
                <p>{question.text}</p>
            </div>
            <div>

                <Options options={question.options}
               ans={question.answer_id}
               q_id={question.question_id}/>

            </div>
            <div className='nav'>
                <button className='nav-button' onClick={()=>skip(question.question_id)}>Attempt Later</button>
                <button className='nav-button' onClick={prev}>Previous</button>
                <button className='nav-button' onClick={next}>Next</button>
            </div>

        </div>
    )
}

export default Question;