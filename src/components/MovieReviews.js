// Code MovieReviews Here
// presentation component
// lists a series of movie reviews

import React from "react"

const Review = ({
    id,
    display_title,
    headline,
    summary_short
}) => {
    return(
        <div className="review" key={display_title} >
            <h2>{display_title}</h2>
            <h4>{summary_short}</h4>
            <h6>{headline}</h6>
        </div>
    )
}

const MovieReviews =  ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews
