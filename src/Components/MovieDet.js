import React,{useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import '../App.css'


const URL="https://api.themoviedb.org/3/movie/"
const API="?api_key=40c432e4dea1ea50718a0416a2bf27cf"

const IMG_URL="http://image.tmdb.org/t/p/"
const POSTER_SIZE ="w342"
const BACKDROP_SIZE ="original/"

function MovieDet() {

    const {id}=useParams();
    const[movie,setMovie]=useState({})

    const getMovie=async()=>{
        try{
            const res= await fetch(URL+id+API)
            const mov=await res.json()
            console.log(mov)
            setMovie(mov)
        }catch (e){
            console.error(e)
        }
    }

    useEffect(()=>{
        getMovie()
    },[id])

    if(!movie.title) return null 
    
 //   console.log(movie)
    return (

        <div>
            <img 
                className="backdrop"
            src={IMG_URL+BACKDROP_SIZE+movie.poster_path} alt={movie.title+"Backdrop"}/>

            <div className="detail-details">
            <img 
                className="poster"
            src={IMG_URL+POSTER_SIZE+movie.poster_path} alt={movie.title+"Backdrop"}/>
            <div>
            <h3>{movie.title}</h3>
            <h4>{movie.overview }</h4>
        <ul>
            {
                movie.genres.map((item)=>{
                    <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
        </div>
        </div>
            
        </div>
    )
}

export default MovieDet
