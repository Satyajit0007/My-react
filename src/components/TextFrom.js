import React,{useState} from 'react'


export default function TextFrom(props) {
    const handleupclick = () => {
        console.log("UpperCase clicked" + text)

        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowclick = () => {
        console.log("UpperCase clicked" + text)

        let newText = text.toLowerCase();
        setText(newText);
    }
    const revText = () => {
        
   let revText ="";
        for(let i =text.length-1; i >=0 ; i--){
           revText += text[i];
        }    
   
        setText(revText);
    }
    const handleOnChange = (event) => {
        console.log("ONchange Case");
        setText(event.target.value);
    }
    
    const[text,setText] = useState("");
    // setText("New Text");
    return (
        <>
        <div className='container'>
           <h1>{props.heading} </h1>
            <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                <div className="mb-3">
                    <textarea  className="form-control" value = {text} onChange ={handleOnChange}  id='myBox' rows="8" />
                </div>
            </div>
            <button className='btn btn-primary my-4 mx-3' onClick={handleupclick}> Convert To uppperCase</button>
            <button className='btn btn-primary my-4 mx-3' onClick={handleLowclick}> Convert To LowerCase </button>
            <button className='btn btn-primary my-4 mx-3' onClick={revText}> Reverse Your Text </button>

        </div>
        <div className ="container my-3"></div>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} character</p>
        <p>{0.008 * text.split(' ').length} MINUTES READ</p>
        <h2>{text}</h2>
        </>
    )
}
