import React, {useState} from 'react'


export default function TextForm(props) { 
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)  
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    } 

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
    }
    
    //   for totitleCase
      function totitleCase(value) {
        let myValue = value.toLowerCase()
        let newValue = myValue.split(" ")
        let newarray = []
        for(let i = 0; i< newValue.length; i++){
            let arrayValue = newValue[i][0].toUpperCase() + newValue[i].slice(1)
            newarray.push(arrayValue)
    }
        return newarray.join(" ")
    }

    const buttonClick = () => {
        let newText = totitleCase(text)
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      } 
    
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
      };
    // to italic
    const  handleitalic = ()=>{
        console.log("italic"+ text);
        var mtext = document.getElementById('myBox');
       mtext.style.fontStyle= 'italic';
      }
      

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className='container' style={{ color:props.mode === 'dark'?'white':'black'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode === 'dark'?'gray':'white', color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1"  onClick={handleLowClick}>Convert to Lowercase</button> 
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1"  onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1"  onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1"  onClick={handleExtraSpace}>Remove space</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={buttonClick}>Convert to TitleCase</button>
            <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-info mx-1 my-1">Speak</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleReverse}>Reverse</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleitalic}>italic</button>
            {/* mx-1 my-1 is bootstrap class for margin in x */}

        </div>
        <div className="container my-3 style = {{color:props.mode === 'dark'?'white':'black'}}">
            <h3 style={{backgroundColor: 'blue', alignSelf: 'flex-start'}}>Text summary</h3>
            {/* optimised */}
            <p> Words <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b></p> 
            <p>Characters <b>{text.length}</b></p>
            <p>Time taken to read  <b>{ 0.008 * text.split(" ").length }</b></p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter your text in textbox to preview it here' }</p>
        </div>
        </>
    )
}

