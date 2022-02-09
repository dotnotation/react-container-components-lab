import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Q8GYQ7wkeDRW7nsUxnghztGMAaqAtIeT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
// will provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match

class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()

        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    fetchSearch = event => {
        event.preventDefault()

        fetch(URL + this.state.searchTerm)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results }))
        
        event.target.value = ""
    }

    render(){
    
        return(
            <div className='searchable-movie-reviews'>
                <label>Search Reviews</label>
                <form onSubmit={this.fetchSearch}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer