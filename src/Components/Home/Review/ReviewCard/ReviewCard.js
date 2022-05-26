import React from 'react';
import './ReviewCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({review}) => {
    return (
        <div className="review-card  rounded">
        <div className="text-center">
            <img className="review-image rounded-circle" src={review.image} alt="" />
            <h5 className="text-center  review-name fw-bold">{review.name}</h5>
            <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} />
        </div>
        <div className="">
            <p className="text-justify">{review.review}</p>
        </div>
    </div>
    );
};

export default ReviewCard;