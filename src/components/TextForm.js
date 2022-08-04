import React, {useState} from 'react'

export default function TextForm(props) {

    const DoUpercase = () => {
    //    console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const clearText = () => {
        //    console.log("clear the text");
            let newText2 = ("");
            setText(newText2)
            props.showAlert("Clear The Text", "success");
        }

    const Dolowercase = () => {
        //    console.log("lowercae clicked");
            let newText1 = text.toLowerCase();  
            setText(newText1)
            props.showAlert("Converted To Lowercase!", "success");
        }

        const capitalizeFirst = () => {
            let newText5 = text.charAt(0).toUpperCase() + text.slice(1);
            setText(newText5)
            props.showAlert("First Letter Capitalize", "success");
            };

    const handleOnChange = (event) => {
 //       console.log("On Change");
        setText(event.target.value)
    }

    const [text,setText] = useState('');

    // text = "new text"  // wrong way
    // settext = ("new text")  //wright way

  return ( 
    <>
    <div className="container" style={{Color: props.mode==='dark'?'white':'#3d6046'}}>
        <h1>{props.heading}</h1>
<div className="mb-3" style={{backgroundColor: props.mode==='dark'?'white':'light'}}>
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',
  color: props.mode==='dark'?'white':'#3d6046'}} 
  id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="7"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={DoUpercase}>Convert To UpperText</button>
<button type="button" className="btn btn-danger mx-2" onClick={Dolowercase}>Convert to LowerText</button>
<button type="button" className="btn btn-success mx-2" onClick={clearText}>Clear The Text</button>
<button type="button" className="btn btn-dark mx-2" onClick={capitalizeFirst}>Capitalize First Letter</button>
    </div>
    <div className="container my-3" >                                    
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something in the textbo above to previw it here"}</p>
    </div>
    </>
  )
}
