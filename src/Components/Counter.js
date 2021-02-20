import React,{useState} from 'react'
import '../App.css';

function Counter(props) {
    const [count,setCount]=useState(0)
    return (
        <div>
            <p>{count}</p>
            <button className="btn-Component">
                {props.btnContent}
            </button>
            <button onClick={()=>setCount(count+1)} className="btn-Component">Increase</button>
            <button onClick={()=>setCount(count-1)} className="btn-Component">Decrease</button>
      
        </div>
    )
}

export default Counter;
