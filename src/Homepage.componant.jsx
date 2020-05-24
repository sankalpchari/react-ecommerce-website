import React from 'react';
import './Homepage.style.scss';

const Homepage =() =>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
               <div className='content'>
                   <h1 className='title'>Hats</h1>
                   <span className="sub-title">Shop Now</span>
               </div>
            </div>
            <div className='menu-item'>
               <div className='content'>
                   <h1 className='title'>Jackets</h1>
                   <span className="sub-title">Shop Now</span>
               </div>
            </div>
            <div className='menu-item'>
               <div className='content'>
                   <h1 className='title'>Shirts</h1>
                   <span className="sub-title">Shop Now</span>
               </div>
            </div>
            <div className='menu-item'>
               <div className='content'>
                   <h1 className='title'>Men</h1>
                   <span className="sub-title">Shop Now</span>
               </div>
            </div>
            <div className='menu-item'>
               <div className='content'>
                   <h1 className='title'>Wo
                   men</h1>
                   <span className="sub-title">Shop Now</span>
               </div>
            </div>
        </div>
    </div>
)

export default Homepage;