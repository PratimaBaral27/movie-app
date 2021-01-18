import React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Axios from 'axios'
import Nowplaying from './nowplaying'
import {HomeWrapper} from './style'

 export default function HomePage(){
     const [nowPlaying, setnowPlaying] =useState([])
     const [popularMovies, setpopularMovies] = useState([])
     const[topRated,settopRated] = useState([])
     useEffect(() =>{
         getAllMovies()
          },[]);
     const getAllMovies = async () => {
         let apiKey = '02689249b40636b114a2add6006bff65'
        const allMovies= await Axios.all([
             Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`),

             Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`),
             Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
         ]);
         console.log(allMovies[0].data.results);
         setnowPlaying(allMovies[0].data.results)
         setpopularMovies(allMovies[1].data.results)
         settopRated(allMovies[2].data.results)
     };
     return(
         <HomeWrapper>
             <Nowplaying movie ={nowPlaying}/>
         </HomeWrapper>
     )
     return <h1>HomePage</h1>

}