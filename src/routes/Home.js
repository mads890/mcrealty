import React from 'react';
import { Link } from 'react-router-dom'
import './route-styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <header>
                <img src='' alt='photo of a realtor' />
                <div className='intro'>
                    <h1>From Wyoming, For Wyomans</h1>
                    <p>As a Wyoming Native, Michael has earned esteem locally and regionally as a passionate and dedicated real estate pro. His market knowledge from his time as a Cheyenne resident allows him to provide his clients with the most current recommendations for locality and economics. He has worked hard to grow and maintain his relationships professionally. He holds extensive knowledge in rental prop investments, single family homes and commercial properties. </p>
                    <button>Say Hello</button>
                </div>
            </header>
            <section>
                <h2>Welcome To Cheyenne. We're So Glad To Have You.</h2>
                <iframe src='' alt='' /*(sandbox=''? - 'best for html content embedding that dn rely on js rendering')*/ className='listings-box' />
                <div className='button-box'>
                    <button>Schedule Call</button>
                    <button>Schedule Consultation</button>
                </div>
                <img src='' alt='the wyoming state flag. a white buffalo on a navy background with a red border' className='flag-pic' />
                <div className='footer-nav'>
                    <Link to='/about' className='footer-nav-link'>About Cheyenne</Link>
                    <Link to='/testimonials' className='footer-nav-link'>Testimonials</Link>
                    <Link to='/calculator' className='footer-nav-link'>Mortgage Calculator</Link>
                </div>
            </section>
        </div>
    )
}

export default Home;