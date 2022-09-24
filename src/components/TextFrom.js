import React,{useState} from 'react'


export default function TextFrom(props) {
    const handleupclick = () => {
        console.log("UpperCase clicked" + text)

        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("ONchange Case");
        setText(event.target.value);
    }
    const[text,setText] = useState("Enter Text Here");
    // setText("New Text");
    return (
        <div>
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
            <button className='btn btn-primary my-4' onClick={handleupclick}> convertTo uppperCase</button>
        </div>
    )
}
