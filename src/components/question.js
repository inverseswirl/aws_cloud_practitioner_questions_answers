import React, { useState } from 'react';


const Question = ({questions,answers})=>{

    const [index,counter]= useState(0)
    const [animate,animationStart]= useState("none")
   
   
// const handleClick  = e => {return console.log(e)};

   

    return(
        <div onClick={()=>  counter(index + 1)}>
         
            {questions[index]}
            <br/>
            {answers[index]}

      

         </div>
    )
}


export default Question;