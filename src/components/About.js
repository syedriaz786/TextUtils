import React from 'react';
// import useState from 'react';
export default function About(props) {
 
    // const [myStyle, setMyStyle]= useState({

    //     color: "black",
    //     backgroundColor: "white",
    //     transition: "all 1s ease"
    // })  

    const myStyle ={

        color: props.mode === 'dark'? 'white':'#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)':'white'
    }

    // const [btnText, setBtnText] = useState  ("Enable Dark Mode")
    // const toggleStyle = () =>{

    //     if(myStyle.color === "black"){

    //             setMyStyle({
    //                 color: "white",
    //                 background: "black",
    //                 transition: "all 1s ease"
    //             })
    //             setBtnText("Enter Light Mode")
    //     }
        
    //     else{
    //         setMyStyle({
    //             color: "black",
    //             background: "white",
    //             transition: "all 1s ease"
    //         })
    //         setBtnText("Enter Black Mode")
    //     }
    // }
    return (
        
        
        <div className='container' >
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample"  >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne"  style={myStyle}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                         <strong>Analyze Your Text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           Text Utils Give You a Way to Analyze your text quickly and efficiently, be it word  count, character count, text capital and Small, copy text 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo"  style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                         <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">

                    <button type='button' onClick={toggleStyle} className='btn btn-primary' >{btnText}</button>
            </div> */}
        </div>
    )
}
