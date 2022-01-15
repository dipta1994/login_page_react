import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => {
    return (
        <form>
            <h1> You have entered right password</h1>
            <div>
                <Link to="/" className="btn btn-secondary">Logout</Link>
            </div>
        </form>
    )
};

export default Page1;