import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <h3>SHELFIE</h3>
            <Link to='/'><button>Dashboard</button></Link>
            <Link to='/add'><button>Add to Inventory</button></Link>
        </header>
    )
}

export default Header
