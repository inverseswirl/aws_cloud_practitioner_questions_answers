import React from 'react';
import Question from './question';
import {data} from '../components/data';


const questionStyles = {
 
    listStyleType: "none",
    cursor: "pointer",
    padding: "12% 4% 5% 6%",
    textAlign: "left",

  }
  



const Cloudcard = ()=>{

   const questions = data.map( (card,index) => 
   
      <h2>Q{index + 1}: <strong>{card.question}</strong></h2>
    )

    const answers = data.map( (card,index) => 
       <p>{card.answer}</p>
      ) 



      
    return(
        <div style={questionStyles} class="card flip_card">
              <Question 
               questions = {questions}
               answers = {answers}
              
              />
        </div>


    )
}

export default Cloudcard;