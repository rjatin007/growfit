import React , { Component } from 'react';
import {connect} from 'react-redux';
import Question from './Question/Question';
import * as actions from '../Store/Actions'
import './Questions.css';
class Questions extends Component{
state={
        counter:0
}

componentDidMount=()=>{
    this.props.fetchAll();
}
questionSkipHandler=(id)=>{
    this.props.skip(id);
    this.setState(state=>({
        ...state,
        counter: state.counter >= (this.props.questions.length-1) ? 9 : state.counter+1
    }))

}

prevQuestion=()=>{
    this.setState(state=>({
        ...state,
        counter: state.counter <= 0 ? 0 : state.counter- 1
    }))
}
nextQuestion=(index,ACTION)=>{
    this.setState(state=>({
        ...state,
        counter: state.counter >= (this.props.questions.length-1) ? 9 : state.counter+1
    }))
}
    render(){
        const { counter }=this.state;
        const {questions}=this.props;


        return(
            <div className="questions">
               <div>
                    {questions.length>0 &&
                        <Question question={questions[counter]}
                     index={counter}
                     skip={this.questionSkipHandler}
                     prev={this.prevQuestion}
                     next={this.nextQuestion}/>
                    }
               </div>
                <button className='finish' onClick={this.props.finish}> Finish Test</button>

            </div>
        )
    }
}
const mapStateToProps=(state)=>({
        questions:state.questions
})


const mapDispatchToProps=(dispatch)=>({
    fetchAll: ()=>dispatch(actions.fetch_questions()),
    skip : (id)=>dispatch(actions.skipQuestion(id)),
    finish:()=>dispatch(actions.finishTest())
})
export default connect(mapStateToProps,mapDispatchToProps)(Questions);