const url= "https://s3-ap-southeast-1.amazonaws.com/grow-fit-stage/uploads/quizapp/quiz.json"
const headers={
    'Accept':'application/json'
}

export const fetchQuestions=()=>
    fetch( url, headers )
    .then(res=>res.json())
    .then(res=> res)