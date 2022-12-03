import React from "react"
import memesData from "./memesData.js"
export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)


  
  function getMemeImage() {
    
    const parsedData = JSON.parse(JSON.stringify(allMemeImages)); 
    
    const memesArray = parsedData.data.memes;

    const randomNumber = Math.floor(Math.random() * memesArray.length);
    
    const {url} = memesArray[randomNumber];

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }));
}
  return (
    <main>
      
      <div className= "form">
        
        <input type= "text" placeholder = "top text" className= "form-input"></input>
        
        <input type = "text" placeholder = "bottom text" className= "form-input"></input>
        
        <button className= "form-btn" onClick = {getMemeImage} >Get a new meme image</button>
      
      </div>

      <img src = {meme.randomImg} className= "meme-img"></img>
    
    </main>

)
}   