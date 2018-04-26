import {action_types} from  './Actions'

const State={
    attempting:true,
    questions:[]
}

const reducer=(state=State,action)=>{
    switch(action.type){
        case action_types.FETCH:
           State.questions=[...action.questions]
            return {
                ...State,
                questions:[...State.questions]
            };

        case action_types.SKIPPED:

            return attemptHandler(action.id,action_types.SKIPPED);

        case action_types.RIGHT:

            return attemptHandler(action.id,action_types.RIGHT);

        case action_types.WRONG:

            return attemptHandler(action.id,action_types.WRONG);

        case action_types.FINISH:
            let attempting=false;
            return {
                ...State,
                attempting
            }

        default:
            return state
    }

}
const attemptHandler=(id,type)=>{
            const newQuestions=[...State.questions];
            const index=newQuestions.findIndex(q=>q.question_id===id)
            const newQuestion=newQuestions[index];
            newQuestion.action_taken=type;
            newQuestions[index]=newQuestion;
            return {
                ...State,
                questions:[...newQuestions]
            }
}


export default reducer;