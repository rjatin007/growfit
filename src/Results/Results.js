import React , { Component } from 'react';
import Result from'./Result/Result';
import './Results.css';
class Results extends Component{
    render(){
        const {questions}=this.props;
        const unAttempted=questions ? questions.filter(q=>q.action_taken==='SKIPPED'): [];
        const right=questions ? questions.filter(q=>q.action_taken==='RIGHT'):[];
        const wrong=questions ? questions.filter(q=>q.action_taken==='WRONG'):[];
        return(
            <div>
            <div>
                <h1>Results</h1>
            </div>
            <div className='results'>

                <div>
                    <Result key='1' status='u' result={unAttempted}/>
                </div>
                <div>
                    <Result key='2' status='r' result={right}/>
                </div>
                <div>
                    <Result key='3'status='w' result={wrong}/>
                </div>

                </div>
            </div>
        )
    }
}
export default Results;