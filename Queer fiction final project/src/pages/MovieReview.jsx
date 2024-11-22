import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies.json';

const MovieReview = () => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    return (
        <div className='flex flex-col items-center mx-20 text-indigo-200 '>
            <h1 className='font-bold text-xl text-indigo-200'>{movie.title}</h1>
            <img src={`/media/${movie.poster}`} className='h-80 my-5 border-2 border-white' />
            <h2>Directed by {movie.director}</h2>
            <p><strong className='text-indigo-200'>Release Date:</strong> {movie.release_date}</p>
            <p><strong className='text-indigo-200'>Description:</strong> {movie.description}</p>
            <p className='mt-5'>"{movie.review}"</p>
            <p className='text-indigo-200 font-semibold mb-10'>-- {movie.reviewer}</p>
        </div>
    );
};

export default MovieReview;
