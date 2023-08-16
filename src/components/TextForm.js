import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked " + text)
        let new_text = text.toUpperCase()
        setText(new_text)
        props.showAlert('Text was converted to uppercase','success')
    }
    const handleLoClick = ()=>{
        console.log("UpperCase was Clicked " + text)
        let new_text = text.toLowerCase()
        setText(new_text)
        props.showAlert('Text was converted to lowercase','success')
    }
    const handleClearClick = ()=>{
        console.log('Clear text button was clicked')
        let newText = ''
        setText(newText)
        props.showAlert('Text has been cleared','success')
    }
    const handleSentenceClick = ()=>{
        console.log('Sentence Case button clicked')
        let newText = text.split(". ")
        let finalArr = []
        for(let i=0;i<newText.length;i++){
            finalArr.push(newText[i].charAt(0).toUpperCase() + newText[i].slice(1))
        }
        setText(finalArr.join(". "))
        props.showAlert('Text was converted to sentence case','success')
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra spaces were removed from the text','success')
    }
    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        if(text.length>0)
            props.showAlert('Text is being spoken','success')
    }
    const handleOnChange = (event) =>{
        console.log("OnChange")
        setText(event.target.value)
    }
    const [text, setText] = useState('') 
    // style={{backgroundColor: props.mode==="dark"?"#292929":"white"}}
    return (
        <>
        <div className="container" style={{backgroundColor: props.mode==="dark"?"#292929":"white"}}>
            <h3 style={{color: props.mode==="light"?"black":"white"}}>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#292929":"white", color: props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="6"/>
            </div>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleUpClick}>Convert to uppercase</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleLoClick}>Convert to lowercase</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleSentenceClick}>Sentence Case</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleSpeakClick}>Listen</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
            <h3 >Your Text summary is : </h3>
            <p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
            <p>You can read in {text.split(" ").length * 0.008} minutes</p>
        </div>
        <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
            <h3>Preview</h3>
            <p>{text.length===0?'Enter text above to preview...':text}</p>
        </div>
        </>
    )
}
