import React, { useEffect, useState } from 'react';
import RecentReview from './RecentReview';

const HomeReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [reviews])
    return (
        <>
            <h2 className='text-3xl text-teal-700 font-bold text-center my-2'>Read Recent Reviews</h2>
            <div className='grid sm:grid-clos-1 lg:grid-cols-3 lg:w-4/5 mx-auto gap-3 '>
                {
                    reviews.map(review => <RecentReview
                        key={review._id}
                        review={review}
                    ></RecentReview>)
                }
            </div>
        </>
    );
};

export default HomeReview;