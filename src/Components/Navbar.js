import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'> 


        <span class="material-icons"> <Link  style={{textDecoration: 'none',color:'black',marginLeft:'20px',marginTop:'-20px'}} to='/Menus'>menu</Link> </span>
    
      <span className='Links'>

      <botton className='Icons'><span class="material-icons"><Link style={{textDecoration: 'none',color:'black'}} to='/Home'>home</Link></span>  </botton>
      <botton className='Icons'><span class="material-icons"><Link style={{textDecoration: 'none',color:'black'}} to='/Settings'>settings</Link></span>   </botton>
      <botton className='Icons'><span class="material-icons"><Link style={{textDecoration: 'none',color:'black'}} to='/Notifications'>notifications</Link></span>   </botton>
      <botton className='Icons'><span class="material-icons"><Link style={{textDecoration: 'none',color:'black'}} to='/Help'>help</Link></span>   </botton>
      <botton className='Icons'><span class="material-icons"><Link style={{textDecoration: 'none',color:'black'}} to='/User'>person</Link></span>   </botton>

      </span>

    </div>
  )
}

export default Navbar