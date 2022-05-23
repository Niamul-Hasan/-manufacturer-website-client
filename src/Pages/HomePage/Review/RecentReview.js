import React from 'react';

const RecentReview = ({ review }) => {
    const { name, ratings, comment } = review;
    return (
        <div class="card lg:max-w-lg bg-base-200 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{comment}</p>
                <p><small>{ratings} Stars</small></p>

            </div>
        </div>
    );
};

export default RecentReview;