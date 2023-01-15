import React, { useRef } from 'react';

const CustomerReview = () => {

    const nameRef = useRef();
    const commentRef = useRef();
    const ratingsRef = useRef();


    const handlePlaceReview = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const comment = commentRef.current.value;
        const ratings = ratingsRef.current.value;

        const reviews = { name: name, comment: comment, ratings: ratings };
        console.log(reviews)

        fetch('https://manufacturer-website-server-vercel01.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        }).then(res => res.json()).then(data => {
            console.log(data);
        });
    }

    return (

        <div className=''>
            <h1 className='text-center text-purple-500 uppercase font-bold mt-3'>Place Your Review Here</h1>
            <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                    <span className="label-text">Customer name</span>
                </label>
                <input type="text" placeholder="Type name" ref={nameRef} className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                    <span className="label-text">Your Comment</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" ref={commentRef} placeholder="Comment"></textarea>
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                    <span className="label-text">Ratings</span>
                </label>
                <input type="number" placeholder="Rate 5 Stars" ref={ratingsRef} className="input input-bordered w-full max-w-xs" />
                <button
                    onClick={handlePlaceReview}
                    className="btn btn-success w-full max-w-xs mt-4">Place Review</button>
            </div>
        </div>

    );
};

export default CustomerReview;