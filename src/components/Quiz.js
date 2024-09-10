import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
export default function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false)
    const changeQuestion=()=>{
        updateScore();
        if(currentQuestion<QuizData.length-1){
        setCurrentQuestion(currentQuestion+1);
        setClickedOption(0);
    }
    else{
setShowResult(true)
    }
    }
    const updateScore=()=>{
if(clickedOption===QuizData[currentQuestion].answer){
    setScore(score+1)
}
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    const changeQuestionprev=()=>{
  if(currentQuestion>0){
    setCurrentQuestion(currentQuestion-1);
  }
    }
  return (
    <div>
    <p className="heading-txt">
        Quiz App
    </p>
    <div className="container">
        {showResult? (
            <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
        ):(
            <>
        <div className="question">
            <span id="question-number">{currentQuestion+1}.</span>
            <span id="question-txt">{QuizData[currentQuestion].question}</span>
        </div>
        <div className="option-container">
{QuizData[currentQuestion].options.map((option,i)=>{
    return (
        <button className={`option-btn ${
            clickedOption==i+1?"checked":null
        }`}  onClick={()=>setClickedOption(i+1)}   key={i} >
        {option}
        </button>
    )
})}
        </div>
        <div style={{display:'flex',justifyContent:"space-around"}} >
        <input type="button" value="Previous" id="next-button" onClick={changeQuestionprev}/>
        <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>

        </div>
    </>)}
    </div>
    </div>
  )
}
