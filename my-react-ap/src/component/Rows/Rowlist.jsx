import Row from "./Rows"
import requests from "../../utils/requests"

const Rowlist = () => {
    return (
      <>
        <Row 
        title = 'NETFLIX ORIGINAL'
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow = {true}
        />
         <Row 
        title = 'Trending Now'
        fetchUrl = {requests.fetchTrending}
        />
          <Row 
        title = 'Top Rated Movies'
        fetchUrl = {requests.fetchTopRatedMovies}
        />
            <Row 
        title = 'Action Movies'
        fetchUrl = {requests.fetchActionMovies}
        />
            <Row 
        title = 'Comedy Movies'
        fetchUrl = {requests.fetchComedyMovies}
        />
            <Row 
        title = 'Horror Movies'
        fetchUrl = {requests.fetchHorrorMovies}
        />
            <Row 
        title = 'Romance Movies'
        fetchUrl = {requests.fetchRomanceMovies}
        />
            <Row 
        title = 'Documentaries'
        fetchUrl = {requests.fetchDocumentaries}
        />
            <Row 
        title = 'Tv Show'
        fetchUrl = {requests.fetchTvShow}
        />
      </>
    )
  }
  export default Rowlist