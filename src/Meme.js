import React from "react"
import memesData from "./memesData.js"
export default function Meme() {

  const [memeImage, setMemeImage] = React.useState("")
  
  function getMemeImage() {
    
    const parsedData = JSON.parse(JSON.stringify(memesData)); 
    
    const memesArray = parsedData.data.memes;

    const randomNumber = Math.floor(Math.random() * memesArray.length);
    
    const {url} = memesArray[randomNumber];

    setMemeImage(url);
}
  return (
    <main>
      
      <div className= "form">
        
        <input type= "text" placeholder = "top text" className= "form-input"></input>
        
        <input type = "text" placeholder = "bottom text" className= "form-input"></input>
        
        <button className= "form-btn" onClick = {getMemeImage} >Get a new meme image</button>
      
      </div>

      <img src = {memeImage} className= "meme-img"></img>
    
    </main>

)
}   