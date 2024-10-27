import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between py-6 px-4 text-center'>
        <span className='text-3xl font-bold'>
            <Link to={"/"}>
            Fake Store
            </Link>
        </span>
        <ul className='flex gap-3'>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </ul>

    </div>
  )
}

export default Header