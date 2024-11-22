import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../data/movies.json';

const MovieList = () => {
    return (
        <div>
            <h1 className='ml-32 mb-6 font-bold text-lg'>Movie Reviews</h1>
            <ul className='flex flex-col ml-32'>
                {movies.sort((a, b) => a.title.localeCompare(b.title)).map((movie) => (
                    <li key={movie.id} className='my-1 font-semibold  hover:text-indigo-200'>
                        <Link to={`/movieReview/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
