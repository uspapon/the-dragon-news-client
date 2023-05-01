import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our terms and condetions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus explicabo officia quisquam consequatur! Eos harum quo excepturi nesciunt. Commodi assumenda debitis mollitia, eum similique animi officiis quidem libero, minus quas asperiores consequuntur esse facere totam doloremque rem eaque temporibus!</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;