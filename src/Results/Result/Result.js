import React from 'react';
import './Result.css';
const Result=({result , status })=>{

    let text=''
    switch(status){
        case 'u':
            text=`Total Un-attempted Questions : ${result.length}`
            break;
        case 'r':
            text=`Total Correct Answers : ${result.length}`
            break;
        case 'w':
            text=`Total Incorrect Answers : ${result.length}`
            break;
        default:
            text='Test not Attempted!'

    }
    return(
        <div className='result'>
            <h2>{text}</h2>
            {result && result.map(res=>(
                <div key={res.question_id}>
                    <p>{res.title}</p>
                    <p>{res.text}</p>
                    {res.options.map(o=>(
                        <li key={o.id}>{o.text} </li>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Result;