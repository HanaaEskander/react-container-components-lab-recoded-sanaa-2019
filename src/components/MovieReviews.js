// Code MovieReviews Here

import React from 'react';


const MovieReviews = ({r}) => <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridGap:'10px'}} className="review-list">{reviews.map(rev => {
    return(
        <div className="review" style={{padding:20,boxShadow:'0 0 5px #ccc',borderRadius:'5px'}}><h3>{rev.display_title}</h3><span>{rev.critics_pick}</span></div>
    )
})}</div>

export default MovieReviews;