import React from 'react'
import { Link } from 'react-router'


const Header = () => {
  return (
    <>
   <div className='flex justify-between'>
    <h2>BlogShelf</h2> 
    <div>
    <span><Link to="/">Add Blog</Link></span>
    <span>
      <Link to="/displayShelf/id">View Blog</Link>
    </span>
    </div>
    </div>

    
    </>
  )
}

export default Header