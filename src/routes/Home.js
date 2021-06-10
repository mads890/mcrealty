import React from 'react';
import { Link } from 'react-router-dom'
import './route-styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='top-blue'></div>
            <div className='stripe-container'>
                <div className='vert-red'></div>
                <div className='vert-white'></div>
                <div className='vert-blue'></div>
            </div>
            <header className='home-header'>
                <img src='https://wwd.com/wp-content/uploads/2020/09/brioni_fw20-ad-campaign_2.jpg?crop=0px%2C254px%2C1813px%2C1210px&resize=640%2C415' alt='photo of a realtor' className='home-img' />
                <div className='intro'>
                    <h1>From Wyoming, For Wyomans</h1>
                    <p>As a Wyoming Native, Michael has earned esteem locally and regionally as a passionate and dedicated real estate pro. His market knowledge from his time as a Cheyenne resident allows him to provide his clients with the most current recommendations for locality and economics. He has worked hard to grow and maintain his relationships professionally. He holds extensive knowledge in rental prop investments, single family homes and commercial properties. </p>
                    <div className='red-border'><div className='white-border'><button className='hello-button'>Say Hello</button></div></div>
                </div>
            </header>
            <section className='home-main'>
                <h2>Welcome To Cheyenne. We're So Glad To Have You.</h2>
                <iframe src='http://cheyenne.paragonrels.com/idx/idx.aspx?Mls=CLSC&Subscriber=f50e4a7e-2554-4bcb0-a673-48ba03fd58dd' /* src='http://cheyenne.paragonrels.com/idx/idx.aspx?Mls=CLSC&Subscriber=f50e4a7e-2554-4bcb0-a673-48ba03fd58dd&MLSSearch=1' */ alt='local listings' /*(sandbox=''? - 'best for html content embedding that dn rely on js rendering')*/ className='listings-box' title="Cheyenne Wyoming real estate listings" />
                <div className='button-box'>
                    <div className='red-border call'><div className='white-border'><button className='call-button'>Schedule Call</button></div></div>
                    <div className='red-border call'><div className='white-border'><button className='call-button'>Schedule Consultation</button></div></div>
                </div>
                <img src='https://cdn.britannica.com/38/5238-004-C070D1F2/flag-citizen-Wyoming-response-contest-field-border-1917.jpg' alt='the wyoming state flag. a white buffalo on a navy background with a red border' className='flag-img' />
            </section>
            <div className='footer-nav'>
                <Link to='/about' className='footer-about'><div className='footer-link'><b>About Cheyenne</b></div></Link>
                <div className='red'></div>
                <div className='white'></div>
                <div className='blue'></div>
                <Link to='/testimonials' className='footer-testimonials'><div className='footer-link black'><b>Testimonials</b></div></Link>
                <div className='red'></div>
                <div className='white'></div>
                <div className='blue'></div>
                <Link to='/calculator' className='footer-calculator'><div className='footer-link'><b>Mortgage Calculator</b></div></Link>
            </div>
            <div className='bottom-red'></div>
            <div className='bottom-white'></div>
            <div className='bottom-blue'></div>
        </div>
    )
}

export default Home;