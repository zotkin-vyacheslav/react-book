import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({starsSelected = 0, totalStars = 5, onRate = f => f}) =>

    <div className='stars-rating'>
        {
            [...Array(totalStars)].map((n, i) =>
                <Star key={i}
                      selected={i < starsSelected}
                      onClick={() => onRate(i + 1)}
                />
            )
        }
        <p>{starsSelected} of {totalStars} stars</p>
    </div>;

StarRating.propTypes = {
    totalStars: PropTypes.number
};

StarRating.defaultProps = {
    totalStars: 5
};

export default StarRating;