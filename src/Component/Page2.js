import React from "react";
import { Link } from 'react-router-dom'

const Page2 = () => {
    return (
        <form>
            <h1> You have entered wrong password</h1>
            <div>
                <Link to="/" className="btn btn-secondary">Home</Link>
            </div>
        </form>
    )
};

export default Page2;