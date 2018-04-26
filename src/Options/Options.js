import React , { Component } from 'react';
import Option from './Option/Option';
import {connect} from 'react-redux';
import {answeredRight , answeredWrong} from '../Store/Actions';
import './Options.css';
class Options extends Component{
state={
    choice : ""
}
updateChoice=(choice)=>{
    this.setState({choice});
    const {q_id , right , wrong , ans}=this.props;
    if(choice===ans){
       right(q_id);

    }else{
        wrong(q_id);
    }
}
    render(){
        const {options }=this.props;
        return(

            <div className='options'>
                {options && options.map(option=>(
                    <Option option={option}
                    key={option.id}
                    clicked={this.updateChoice}/>
                ))}

            </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>({
    right:(id)=>dispatch(answeredRight(id)),
    wrong:(id)=>dispatch(answeredWrong(id))
})
export default connect(null,mapDispatchToProps)(Options);