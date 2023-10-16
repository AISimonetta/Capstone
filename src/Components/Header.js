import React from 'react';
import restaurantfood from '../img/restauranfood.jpg'

function Header() {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranen Restaurant, focused on traditional recipes and organic products served with a contemporary twist. </p>
                   {/* //they use link or Link in video instead of a . */}
                    <a src="../Components/Booking.js"><button aria-label='on Click'>Reserve a table</button></a>
                </div>
                <div className='banner-img'>
                    <img src={restaurantfood} alt='restaurant food'></img>
                </div>  
            </section>
        </header>
    )
}

export default Header;
