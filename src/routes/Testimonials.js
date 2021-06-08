import React from 'react';
import './route-styles/Testimonials.css';

function Testimonials() {
    return (
        <div className='testimonials'>
            <header className='testimonials-header'>
                <h1>What your neighbors are saying...</h1>
            </header>
            <div className='test-stripe-container'>
                <div className='red test-stripe-top'></div>
                <div className='white test-stripe-top'></div>
                <div className='blue test-stripe-top'></div>
            </div>
            <section className='testimonials-main'>
                <div className='testimonials-grid'>
                    <div className='testimonials-item'>
                        <img src='https://cdn.onebauer.media/one/media/6065/dcc6/7b2d/d637/9fbc/a5d1/concrete-cowboy-1.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill' alt='picture of the person who wrote this testimonial' className='test-img' />
                        <div className='item-text'>
                            <h2><b>I love this neighborhood!</b></h2>
                            <p>Some text about why...I'm just typing more text here so that the paragraph will be bigger and more closely resemble a true review.</p>
                            <p><b>- Rodeo Rick</b></p>
                        </div>
                    </div>
                    <div className='testimonials-item right'>
                        <div className='item-text'>
                            <h2><b>Mike is my favorite guy!</b></h2>
                            <p>Some text about why...I'm just typing more text here so that the paragraph will be bigger and more closely resemble a true review.</p>
                            <p><b>- Cowgirl Carolyn</b></p>
                        </div>
                        <img src='https://i.pinimg.com/originals/7d/f2/cc/7df2cc9fe6363b236edd1c9b4d6ab8a8.jpg' alt='picture of the person who wrote this testimonial' className='test-img' />
                    </div>
                    <div className='testimonials-item'>
                        <img src='https://cdn.careeronestop.org/OccVids/OccupationVideos/11-3051.00.jpg' alt='picture of the person who wrote this testimonial' className='test-img' />
                        <div className='item-text'>
                            <h2><b>Moving to Cheyenne was the best decision I ever made!</b></h2>
                            <p>Some text about why...I'm just typing more text here so that the paragraph will be bigger and more closely resemble a true review.</p>
                            <p><b>- Biofuel Billy</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='test-stripe-container'>
                <div className='red test-stripe-bottom'></div>
                <div className='white test-stripe-bottom'></div>
                <div className='blue test-stripe-bottom'></div>
            </div>
            <img src='https://cdn.britannica.com/38/5238-004-C070D1F2/flag-citizen-Wyoming-response-contest-field-border-1917.jpg' alt='the wyoming state flag. a white buffalo on a navy background with a red border' className='flag-img test-flag' />
        </div>
    )
}

export default Testimonials;