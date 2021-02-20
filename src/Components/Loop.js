import React,{useState,useRef,useEffect} from 'react'
import "../App.css"
import Filter from './Filter'
import ListItem from './ListItem'

const URL="https://api.themoviedb.org/3/discover/movie?api_key=40c432e4dea1ea50718a0416a2bf27cf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const confURL="https://api.themoviedb.org/3/configuration?api_key="
    

function Loop({data}) {
    
    const [filter,setFilter]=useState("")
    const [movies,setMovies]=useState([])
    const [config,setConfig]=useState({})

    const ulRef=useRef(null)

    const getMovies=async()=>{
        try{
            const res= await fetch(URL)
            const mov=await res.json()
            setMovies(mov.results)
            console.log(mov.results,movies)
        }catch (e){
            console.error(e)
        }
    }

    const getConfig=async()=>{
        try{
            console.log("API",process.env.REACT_APP_API)
            const res= await fetch(confURL+process.env.REACT_APP_API)
            const con=await res.json()
            setConfig(con)
        }catch (e){
            console.error("ConfigError",e)
        }
    }

    //IN this case, every single time a render gets update -> effect's fired
    //we can tell useEffect, when to run
     
    useEffect(()=>{
        getMovies();
    },[]);

    useEffect(()=>{
        getConfig();
    },[])

    //this array is the efect dependency, tell when to run
    //As empty, it will run only at first render
    //usinf ',[filter]', will run when filter is updated    

    return (
        <div ref={ulRef}> 
         
         <Filter filter={filter} setFilter={setFilter}/>
            <ul className={"movies-list"}>
            {
                //Filtering with input, for each time array filter a contins, those
                //will pass to the map function
                movies.filter((item)=>{
                    return item.title.toLowerCase().includes(filter.toLowerCase())
                }).map((item)=>{
                   return( <ListItem key={item.id} id={item.id} title={item.title} config={config} poster_path={item.poster_path}/>)
              //     return(  <li key={item}>{item}</li>)
                })
            }
            </ul>
        </div>
    )
}

export default Loop


//RE-RENDER A COMPONENT
//a state change, a props change

//useEffect(): trigger side effects,