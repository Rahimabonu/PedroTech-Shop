import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
        <header>
            <h1>Rahimabonu's Shop</h1>

            <ul className='pages-list'>
                <li>
                    <Link className='nav-link' to={"/"}>Shop</Link>
                </li>
                <li>
                    <Link className='nav-link' to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link className='nav-link' to={"/cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                </li>
            </ul>
        </header>
    </>
)
}

export default Navbar
