import PropTypes from 'prop-types'; 
import {  Link } from 'react-router-dom'


function ListItem({id,title,config,poster_path}) {

    //Effect takes place when it is render in the DOM, not UPDATED
   /* useEffect(()=>{
        console.log("Effect item")
    },[]);
*/

    return (
        <li>
            {
                config.images?.base_url && (
                <img  
                    src={config.images.base_url+"w342"+poster_path} 
                    alt={title + " Poster"}
                />)
            }
            <Link to={`/movie/${id}`}> 
            <h4>{title}</h4>
            </Link>
                
        </li>

        
    )
}


ListItem.propTypes={

        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        poster_path:PropTypes.string.isRequired, 
    config:PropTypes.shape({
        images:PropTypes.shape({
            base_url:PropTypes.string
        })
    })
}
 
export default ListItem;

/*
http://image.tmdb.org/t/p//8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg

*/