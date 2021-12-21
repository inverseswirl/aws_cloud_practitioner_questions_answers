import React from 'react';
import Question from './question';



const questionStyles = {
    color: "#051094",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    listStyleType: "none",
    backgroundImage: "linear-gradient(35deg,rgba(250,250,250,0.6),transparent 100%)",
    cursor: "pointer",
    padding: "1rem 2rem 1rem",
    textAlign: "left",
  }
  

const data = [
    {
      question: "What is Availability Zone?",
      answer:"An Availability Zone is a single data center or a group of data centers within a Region.",
    },
    {
      question:"What is an edge location?",
      answer:"An edge location is a site that Amazon CloudFront uses to store cached copies of your content closer to your customers for faster delivery.",
    },
    
    
    {
      question:"Factors to choose Global regions?",
      answer:"The four important factors are Compliance, Proximity, Feature availability, Pricing",
    },
  ]

const Cloudcard = ()=>{

   const questions = data.map( (card,index) => 
   
      <h2>Q{index + 1}: {card.question} </h2>
    )

    const answers = data.map( (card,index) => 
       <p> {card.answer}</p>
      ) 



      
    return(
        <div style={questionStyles} class="card">
              <Question 
               questions = {questions}
               answers = {answers}
              
              />
        </div>


    )
}

export default Cloudcard;