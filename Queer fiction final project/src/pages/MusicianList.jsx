import React from 'react';
import { Link } from 'react-router-dom';
import musicians from '../data/musicians.json';

const MusicianList = () => {
    return (
        <div>
            <h1 className='ml-32 mb-6 font-bold text-lg'>Musician Reviews</h1>
            <ul className='flex flex-col ml-32'>
                {musicians.sort((a, b) => a.name.localeCompare(b.name)).map((musician) => (
                    <li key={musician.id} className='my-1 font-semibold hover:text-indigo-200'>
                        <Link to={`/musicReview/${musician.id}`}>{musician.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicianList;
