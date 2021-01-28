import React, {useEffect,useState} from 'react';
import Axios from "axios";
import {Container, Row,Spinner, Col} from 'react-bootstrap'
import { ContactSupportOutlined } from '@material-ui/icons';


export default function SingleMoviePage(props){
    const[movie, setMovie] = useState({})
    const[isLoading, setIsLoading]=useState(false);

    useEffect(() =>{
        getAllDetail()},[]);
        const getAllDetail = async() => {
        setIsLoading(true);
        const result = await Axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=41d53ce60f81201debd1f58add052d16&language=en-US`);

    setIsLoading(false);
    console.log(result.data);
    setMovie(result.data)
    
};
    return (
        <>
        {isLoading? <div className="spinnerClass"> <Spinner animation="border" variant="warning"  /></div>:(
    
        <Container className="mt-5" fluid>
                <Row >
                    <Col sm ={6}>
                   <img src ={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                   class = "img-fluid"
                   
                   alt="" />
                 </Col>
               
                
                <Col sm = {6}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <ul>
                        <li>Revenue: {movie.revenue}</li>
                        <li>Popularity: {movie.popularity}</li>
                        <li>Original Language: {movie.original_language}</li>
                        <li>Release Date: {movie.release_date}
                        </li>
                    </ul>
                </Col>
                </Row>

            
        
        </Container>
         )} </>
    )
        
}