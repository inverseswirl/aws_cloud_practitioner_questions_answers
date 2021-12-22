import * as React from "react"
import '../sass/style.scss';
import Cloudcard from "../components/cloud_card";



// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "black",
}
const pageStyles_light = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundImage: "url(https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  backgroundRepeat:"no-repeat",
 
}




// Index page...............
const IndexPage = () => {
  return (
    <main className="pagestyle">
        <h1 className="headline">AWS</h1>
      <Cloudcard/>
   
    
    
    {/* <footer><span>&copy;</span> Shriya dhar 2021</footer> */}
    </main>
  )
}

export default IndexPage
