import React, { useState } from 'react'  // <-- 5. yahn hum ne Hook ki madad se react k aik feature state ko call krain ge from react.
//    ( Hooks react k features hoty han jin ko hum import kra k different kam krty han)



export default function TextFrom(props) {

    const handleUpperCaseClick = () => {           // <-- 6. yahan hum ne function banaya hai 
        // console.log("Uppercase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlertsss("Converted To UpperCase","success");
    }


    const handleLowerCaseClick = () => {        

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlertsss("Converted To LowerCase","success");
    }

  

    const clearText =() =>{

        let newText="";
        setText(newText)
        props.showAlertsss("Cleared Text","success");
       
       
 
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlertsss("Copied Text","success");

    }

    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlertsss("Removed Extra Spaces","success");
    }


    const handleOnChange = (event) => {         // <--   6. by default react me jub hum event listen krainge to hume yahan                                                 function me aik free ka event object bhi mil jaye ga 
        // console.log("On Change");
        setText(event.target.value)          // 6.  <-- is statement ko hum mostly used krain ge tb jub hum inputs  or                                           textarea ka istemal kraine ge . to isme jub jub change aye ge textarea                                  k under to wo event ibject k through function me pass kare ga
    }






    const [text, setText] = useState("");       // <-- 5. yahan humne state ka istemal kia hai 
    //  state aik array destructing ki tarhan kam krta hai , jis  k zero index  variable pass hota hai or 1st index me function pass hota hai value hum variavle me rakhty han lkn jub bhi hume variable ki value change ya update krni hoti hai to hum function k through krain ge. or usestate me hum jo bhi value ya data rakhe ge wo us variable k under chalaa jaye ga.
    
    // IMPORTANT Note: hume jub bhi variable ko ki value update ya change krni hogi to hum isi karhan state ka istemal krain ge  text value direct change nhi hogi            
   
    //    For EXAMPLE : text = " change value "  <-- to is tarhan variable ki value change nhi hgi

let countTime = 0.008 * text.split(/[ ]+/).length;
let countWord =text.split(/[ ]+/).length;
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'? 'white' :'black' }}>


                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'? 'gray' :'white', color: props.mode === 'dark'? 'white' :'black' }} id="myBox" rows="8"></textarea>

                        {/* 5. yahan hum state k variable ko call karay hai textarea k value me  */}



                        <button className="btn btn-primary mt-3" onClick={handleUpperCaseClick}>Convert To UpperCase</button>
                        <button className="btn btn-primary mt-3 ms-3" onClick={handleLowerCaseClick}>Convert To LowerCase</button>
                        <button className="btn btn-primary mt-3 ms-3" onClick={clearText}>Clear</button>
                        <button className="btn btn-primary mt-3 ms-3" onClick={handleCopy}>Copy ClipBoard</button>
                        <button className="btn btn-primary mt-3 ms-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    </div>

                </div>
            </div>

            
            <div className="contianer my-3" style={{color: props.mode === 'dark'? 'white' :'black'}}>
                <h1 className='border-bottom' >Your Text Summary</h1>
                <p>{countWord===1 ? countWord = 0 : countWord -=1 } Words and {text.replace(/\s/g, "").length} Characters</p>
                <p>{countTime.length > 0? 0 :countTime - 0.008} Minutes Read</p>
                <h2 className='border-bottom' >Preview</h2>
                <p>{text.length> 0 ? text: "Enter SomeThing In The Text Box Above To Preview It Here " }</p>
            </div>




            </>
            )

      
    
}
