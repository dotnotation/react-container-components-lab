import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Q8GYQ7wkeDRW7nsUxnghztGMAaqAtIeT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// fetch a list of the most recent reviews and display them

class LatestMovieReviewsContainer extends Component{
    constructor(){
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results }))
    }

    render(){

        return(
            <div className='latest-movie-reviews'>
                <h2>Newest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
