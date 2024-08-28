import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Holidays in 2024</h1>
            <Link to="/colombia"> 
                <button>Vista de festivos en colombia</button>
            </Link>
            <Link to="/mexico">
                <button>Vista de festivos en mexico</button>
             </Link>
        </>
    )
}

export default Home;