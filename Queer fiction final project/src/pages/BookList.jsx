import React from 'react';
import { Link } from 'react-router-dom';
import books from '../data/books.json'; // Assuming your JSON is in this location

const BookList = () => {
    return (
        <div>
            <h1 className='ml-32 mb-6 font-bold text-lg'>Book Reviews</h1>
            <ul className='flex flex-col ml-32'>
                {books.sort((a, b) => a.title.localeCompare(b.title)).map((book) => (
                    <li key={book.id} className='my-1 font-semibold hover:text-indigo-200'>
                        <Link to={`/bookReview/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
