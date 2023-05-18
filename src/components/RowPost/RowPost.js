import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then(response =>{
        console.log(response.data)
        setMovies(response.data.results)
      })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie = (id) =>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0].key)
            }else{
                console.log('Empty Array');
            }
        }).catch(error => {
            if (error.response && error.response.status === 404) {
              console.log('Resource not found');
              // Handle the 404 error, such as showing an error message to the user
            } else {
              console.log('An error occurred', error);
              // Handle other types of errors
            }
          });
      }

     
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj) => 
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.poster_path}`} alt="poster" />
            )}
            
        </div>
        
        {urlId && <Youtube opts={opts} videoId={urlId} />}
    </div>
  )
}

export default RowPost 