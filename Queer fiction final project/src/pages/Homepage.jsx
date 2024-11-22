import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='flex flex-col items-center content-center mt-16'>
            <h2 className='font-bold text-xl'>Queer Media According to Queer Roommates</h2>
            <h4 className='my-3'>By Caroline LaVersa & Kailey Totland</h4>
            <img src="/media/roomies.jpg" className='h-96 border-2 border-white' />
            {/* <button className='px-3 py-2 bg-indigo-400 rounded-lg mt-4 hover:bg-indigo-300'><Link to="/mediaList" >Let's Get Started!</Link></button> */}
        </div>
    )
}

export default Homepage
