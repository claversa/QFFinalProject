import React from 'react';
import { useParams } from 'react-router-dom';
import musicians from '../data/musicians.json';

const MusicReview = () => {
    const { id } = useParams();
    const musician = musicians.find((m) => m.id === parseInt(id));

    if (!musician) {
        return <div>Musician not found!</div>;
    }

    return (
        <div className='flex flex-col items-center mx-20'>
            <h1 className='font-bold text-xl text-indigo-200' >{musician.name}</h1>
            <img src={`/media/${musician.poster}`} className='h-80 my-5 border-2 border-white' />

            <h2><strong className='text-indigo-200'>Genre:</strong> {musician.genre}</h2>
            <p><strong className='text-indigo-200'>Notable Works:</strong> {musician.notable_works.join(", ")}</p>
            <p><strong className='text-indigo-200'>Description:</strong> {musician.description}</p>
            <p className='mt-5'>"{musician.review}"</p>
            <p className='text-indigo-200 font-semibold mb-10'>-- {musician.reviewer}</p>
        </div>
    );
};

export default MusicReview;
