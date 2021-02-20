import React,{useState} from 'react'
import '../App.css';
 
function Accordeon() {
    const [isToggled,setIsToggled]=useState(false)

    const showMe=isToggled?(<h3 >Showing Togling</h3>):( <h3 >No Showing Togling</h3>  );

    return (
        <div>
            {showMe}
            <button 
//                className="btn-Component"
                className="btn btn-primary"
                onClick={()=>{
                    setIsToggled(!isToggled);
                    console.log(isToggled)
                }}
                >Toggle</button>
        </div>
    )
}

export default Accordeon
