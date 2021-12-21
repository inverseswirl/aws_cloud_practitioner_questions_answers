import React from 'react';



const questionStyles = {
    color: "#1E2F97",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    listStyleType: "none",
    backgroundColor: "rgba(249,249,249,0.4)",
    cursor: "pointer",
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

   const question = data.map( (card,index) => 
   
      <h1>Q{index + 1}: {card.question} </h1>
    )

    const answer = data.map( (card,index) => 
       <p>A: {card.answer}</p>
      ) 



      
    return(
        <div style={questionStyles} onClick={}>
           { question }
           {/* {answer} */}

      </div>

    )
}

export default Cloudcard;