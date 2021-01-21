import React from 'react'
import {FootWrapper} from './style'
import {Link} from 'react-router-dom'

const Footer=()=> {
    return (
        <FootWrapper>
        <div className ="footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                        <h4>Quick Links</h4>
                        <ul className ="list-unstyled">
                        <li > <Link to = "#nowplaying/index.js">Nowplaying</Link></li>
                       <li> <Link to ="#popularMovies">Popular Movies</Link></li>
                      <li>  <Link to = "#topRatedMovies">Top rated Movies</Link></li> 
                        </ul>
                    </div>
                    <div className = "col">
                        <h4>About</h4>
                        <ul className ="list-unstyled">
                        <li>Home</li>
                        <li>Links</li>
                        <li>Movies</li>
                        </ul>
                    </div>
                    <div className = "col">
                        <h4>Contact Us</h4>
                        <ul className ="list-unstyled" >
                        <li>MovieBox Office</li>
                        <li>moviebox@moviebox.com</li>
                        <li>9875948573</li>
                        <li>Kathmandu, Nepal</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className ="col-sm">
                        &copy;{new Date().getFullYear()}| MOVIEBOX Office | All right reserved | Terms of Services |Privacy
                    </p>
                </div>
            </div>

              
        </div>
        </FootWrapper>
    )
}

export default Footer
