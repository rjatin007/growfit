import {fetchQuestions} from '../Api';
export const action_types={
    SKIPPED:'SKIPPED',
    RIGHT: 'RIGHT' ,
    WRONG:'WRONG',
    FINISH:'FINISH',
    FETCH:'FETCH'
};

export const fetch_questions=()=>{

   return dispatch=>{
    fetchQuestions()
    .then(questions_fetched =>{

        const keys_questions = Object.keys(questions_fetched);
        const questions = keys_questions.map(key=>({
            ...questions_fetched[key],
            question_id: key,
            action_taken:'SKIPPED'
        }));
        dispatch({
            type:action_types.FETCH,
              questions
        })
    })
   }
}

export const skipQuestion=(id)=>
    dispatch=>dispatch({
                type:action_types.SKIPPED,
                id
            })
export const answeredRight=(id)=>
dispatch=>dispatch({
    type:action_types.RIGHT,
   id
})

export const answeredWrong=(id)=>
dispatch=>dispatch({
    type:action_types.WRONG,
   id
})

export const finishTest=()=>
dispatch=>dispatch({
    type:action_types.FINISH
})