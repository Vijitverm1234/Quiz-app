import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div style={{color:"black" ,fontWeight:"600" ,fontSize:"50px",marginTop:"100px"}}>
     Your score : {props.score}<br/>
     Total score :{props.totalScore}
    
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
</>
  )
}

export default QuizResult
