import React from 'react'
import movieTrailer from "movie-trailer"
import YouTube from "react-youtube"
import { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import "./Rows.css"

    const Rows = ({ title, fetchUrl, isLargeRow }) => {
        const [movies, setMovies] = useState([]);
        const [trailerUrl, setTrailerUrl] = useState('');
      
        const base_url = 'https://image.tmdb.org/t/p/original';
      
        useEffect(() => {
          async function fetchData() {
            try {
              const request = await axios.get(fetchUrl);
              setMovies(request.data.results);
            } catch (error) {
              console.error('Error fetching movies:', error);
            }
          }
          fetchData();
        }, [fetchUrl]);
      
        const handleClick = async (movie) => {
          if (trailerUrl) {
            setTrailerUrl('');
          } else {
            try {
              const url = await movieTrailer(movie?.title || movie?.name || movie?.original_name || '');
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            } catch (error) {
              console.error('Error fetching trailer:', error);
            }
          }
        };
      
        const opts = {
          height: '461px',
          width: '800px',
          playerVars: {
            autoplay: 1,
          },
        };

  return (
    <div className="app-container">
      <div className={`content ${trailerUrl ? 'content--blurred' : ''}`}>
        <div className="row">
          <h1 className="title">{title}</h1>
          <div className="row_posters">
            {movies?.map((movie) => (
              movie.poster_path && (
                <img
                  onClick={() => handleClick(movie)}
                  key={movie.id}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.title || movie.name || movie.original_name}
                  className={`row_poster ${isLargeRow ? 'row_posterLarge' : ''}`}
                />
              )
            ))}
          </div>
        </div>
      </div>
      {trailerUrl && (
        <div className="trailer-modal" onClick={() => setTrailerUrl('')}>
          <div className="trailer-modal-content">
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Rows
