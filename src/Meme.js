import memesData from "./memesData.js"
export default function Meme() {
  
  function getMemeImage() {
    
    const parsedData = JSON.parse(JSON.stringify(memesData)); 
    
    const memesArray = parsedData.data.memes
    
    console.log(memesArray);
}
  return (
    <main>
      
      <div className= "form">
        
        <input type= "text" placeholder = "top text" className= "form-input"></input>
        
        <input type = "text" placeholder = "bottom text" className= "form-input"></input>
        
        <button className= "form-btn" onClick = {getMemeImage} >Get a new meme image</button>
      
      </div>
    
    </main>

)
}   