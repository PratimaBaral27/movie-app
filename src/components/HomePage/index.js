import React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Axios from 'axios'
import Nowplaying from './nowplaying'
import {HomeWrapper} from './style'
import PopularMovies from './popularMovies';
import TopRatedMovies from './topRatedMovies';
import { Spinner } from 'react-bootstrap';

 export default function HomePage(){
     const [nowPlaying, setnowPlaying] =useState([])
     const [popularMovies, setpopularMovies] = useState([])
     const[topRated,settopRated] = useState([])
     const[isLoading, setIsLoading]=useState(false);
    
     useEffect(() =>{
         getAllMovies()
          },[]);
     const getAllMovies = async () => {
        setIsLoading(true);
         let apiKey = '41d53ce60f81201debd1f58add052d16'
        const allMovies= await Axios.all([
             Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`),
             Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`),
             Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
         ]);
         setIsLoading(false);

         console.log(allMovies[0].data.results);
         console.log(allMovies[1].data.results);
         console.log(allMovies[2].data.results);
         setnowPlaying(allMovies[0].data.results)
         setpopularMovies(allMovies[1].data.results)
         settopRated(allMovies[2].data.results)
     };
     return(
         <>
         {isLoading? <div className="spinnerClass"> <Spinner animation="border" variant="warning"  /></div>:(
         <HomeWrapper>
             <Nowplaying movie ={nowPlaying}/>
             <PopularMovies movieP = {popularMovies} />
             <TopRatedMovies movieT ={topRated} />
         </HomeWrapper>
         )}
         </>
     )
    
}