import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books.json';

const BookReview = () => {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));
    console.log(book);

    if (!book) {
        return <div>Book not found!</div>;
    }
    return (
        <div className='flex flex-col items-center mx-20'>
            <h2 className='font-bold text-xl text-indigo-200'>{book.title}</h2>
            <img src={`/media/${book.poster}`} className='h-80 my-5 border-2 border-white' />

            <h4>By {book.author}</h4>
            <h5><strong className='text-indigo-200'>Publication Date:</strong> {book.publication_date}</h5>
            <h5><strong className='text-indigo-200'>Genre: </strong>{book.genre}</h5>
            <p><strong className='text-indigo-200'>Description: </strong>{book.description}</p>
            <p className='mt-5'>"{book.review}"</p>
            <h3 className='text-indigo-200 font-semibold mb-10'>-- {book.reviewer}</h3>

        </div>
    )
}

export default BookReview
