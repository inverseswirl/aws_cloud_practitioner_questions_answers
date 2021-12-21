import React, { useState } from 'react';


const Question = ({questions,answers})=>{

    const [count,counter]= useState(0)
   
// const handleClick  = e => {return console.log(e)};

   

    return(
        <div onClick={()=>counter(count + 1) }>
            
         {questions[1]}
         <br/>
         {answers[1]}
         {count}

         </div>
    )
}


export default Question;