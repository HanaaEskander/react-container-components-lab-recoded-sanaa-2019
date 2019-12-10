import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
 class LatestMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            r:[]
        };
    }

    render(){
        return(
            <div className="latest-movie-reviews">
            <MovieReviews r={this.state.r} />
            </div>
        );
    }
}
componentDidMount(){
        fetch(URL).then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({
                r:data.results,
            })
        }).catch(err=>console.log(err));
    }
export default LatestMovieReviewsContainer;