import React, { useState } from 'react'
export default function Textform(props) {
    const habdleUpClick = () => {

        let Newtext = text.toUpperCase();
        setText(Newtext);
    }
    const habdleLpClick = () => {

        let Newtext = text.toLowerCase();
        setText(Newtext);
    }
    const clearText = () => {
        setText("");
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    return (
        <>
        <div className={`text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                    boxShadow:`2px 0px 15px 2px ${props.mode==='light'?'green':'red'}`,border:`1px solid ${props.mode==='light'?'green':'red'}`,borderRadius:`10px`
                }} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button className='btn btn-primary' onClick={habdleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-5' onClick={habdleLpClick}>Convert to Lowercase</button>
            <button className='btn btn-primary ' onClick={clearText}>Clear Text</button>

        </div>

        <div className={`container text-${props.mode==='light'?'dark':'light'} my-5`}>
            <h2>
                Your Text Summary
            </h2>
            <p>{text.replace(" ","").length } words and { text.replace(" ","").length} characters</p>
            <p> You can read this in {0.08*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
        </div>

        </>

    )
}
