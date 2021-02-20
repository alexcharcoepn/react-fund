import React,{useState} from 'react'

function Input() {
    const [input,setInput]=useState("")

    return (
        <div>
     
        {
            input ?
            <h3>{input}</h3>:
            <h4>--Empty--</h4>
        }

            <label className="label" >Text: </label>
            <input 
                value={input} 
                type="text"
                onChange={(e)=>{
                    //Avoid t in input
                    if(!e.target.value.includes("t")){
                        setInput(e.target.value)}
                    }
                }
                ></input>
        </div>
    )
}

export default Input
