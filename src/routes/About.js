import React from 'react';
import './route-styles/About.css';

function About() {
    return (
        <div className='about'>
            <header>
                <h1>Welcome to Cheyenne. Welcome Home.</h1>
                <img src={require('../images/skyline.jpeg').default} alt='' className='about-img' />
            </header>
            <section className='about-main'>
                <div className='red'></div>
                <h2>Explore the New Old West</h2>
                <div className='blue'></div>
                <div className='todo-grid'>
                    <div className='todo-item item-one'>
                        <h3>Industry</h3>
                        <p>Historically a bastion for oil refineries, Cheyenne is moving into biofuel to keep our city clean and free of pollution.</p>
                    </div>
                    <div className='todo-item right item-two'>
                        <h3>Restaurants</h3>
                        <p>Whether you're looking for a luxury dining experience at the Paramount Ballroom or some western comfort food at the Cowboy Cafe, Cheyenne has everything you want!</p>
                    </div>
                    <div className='todo-item item-three'>
                        <h3>Entertainment</h3>
                        <p>From the rodeo to the dancefloor to one of Cheyenne's many craft breweries or cafes, this city has something for everyone, including numerous public parks and miles of greenway for you to walk.</p>
                    </div>
                    <div className='todo-item right item-four'>
                        <h3>Frontier Days Festival</h3>
                        <p>Annual celebration of everything Cheyenne has to offer! Enjoy samplings of local food and drink, rodeo and horsemanship competitions, and retail sales. Don't forget to try the prize-winning chili!</p>
                    </div>
                    <div className='todo-item item-five'>
                        <h3>Adjacent Attractions</h3>
                        <p>Laramie, WY (50 minutes)<br/>
                            Vedauwoo National Forest (35 minutes)<br/>
                            Curt Gowdy State Park (35 minutes)<br/>
                            Fort Collins, CO (45 minutes)<br/>
                            Rocky Mountain National Park (110 minutes)<br/>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;