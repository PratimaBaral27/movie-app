import React from 'react'
import {Container,Card,Image,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PopularMovies({movieP}) {
    var setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <Container>
            <div className="clearfix mt-5 mb-2">
                <h4 className="float-left">PopularMovies</h4>
                <Link className="float-right text-uppercase" to = "/">see all</Link>
            </div>
            <Slider {...setting}>
            {movieP.map(function(movieP){
                console.log(movieP);
                return(
                    <React.Fragment>
                        <Col>
                       <Card>
                          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movieP.poster_path}`} /> 
                            <Card.Body>  
                                <span>{movieP.title}</span>
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