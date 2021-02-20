import React,{useRef} from 'react'

function Form() {

    const inputRef=useRef(null)

    return (
        <div>
                        <br/>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(inputRef.current.value)
            }}>
                <input className="form-control" ref={inputRef}/>
                <button className="btn btn-primary">Form Button</button>            
            </form> 
            <br/>
        </div>
    )
}

export default Form
