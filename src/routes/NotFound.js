import React from 'react';
import './route-styles/NotFound.css';

function NotFound() {
    return (
        <div className='not-found'>
            <h1>Oops...There's Nothing Here</h1>
            <p>This page does not exist.</p>
            <div className='nf red-border'><div className='white-border'><button className='not-found-button'>Home</button></div></div>
            <div className='nf red-border'><div className='white-border'><button className='not-found-button'>Explore Cheyenne</button></div></div>
            <div className='nf red-border'><div className='white-border'><button className='not-found-button'>Calculate Your Mortgage</button></div></div>
            <div className='nf-stripe-container'>
                <div className='red nf-stripe-bottom'></div>
                <div className='white nf-stripe-bottom'></div>
                <div className='blue nf-stripe-bottom'></div>
            </div>
            <img src='https://cdn.britannica.com/38/5238-004-C070D1F2/flag-citizen-Wyoming-response-contest-field-border-1917.jpg' alt='the wyoming state flag. a white buffalo on a navy background with a red border' className='nf-flag-img' />
        </div>
    )
}

export default NotFound;