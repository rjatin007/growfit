import React, { Component } from 'react';
import './App.css';
import Questions from './Questions/Questions';
import Results from './Results/Results';
import { connect } from 'react-redux';
class App extends Component {

  render() {
    const {attempting , questions}=this.props;
    return (
      <div className="App">
      {attempting ?<Questions/>
          : <Results questions={questions}/>}
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    attempting: state.attempting,
    questions: state.questions
  }
}
export default connect(mapStateToProps)(App);
