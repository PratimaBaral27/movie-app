import React from 'react'
import {Container,Card,Image,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


 export default function Nowplaying({movie}){
     var setting = {
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 4,
         slidesToScroll: 1
     };
    return (
        <Container>
            <div className="clearfix mt-5 mb-2">
                <h4 className="float-left">Now Playing</h4>
                <Link className="float-right text-uppercase" to = "/">see all</Link>
            </div>
            <Slider {...setting}>
            {movie.map(function(movie){
                console.log(movie);
                return(
                    <React.Fragment>
                        <Col>
                       <Card>
                          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> 
                            <Card.Body>  
                                <span>{movie.title}</span>
                            </Card.Body>
                             </Card>
                             </Col>
                    </React.Fragment>
                );
            })}
        </Slider>
        </Container>
    );
}