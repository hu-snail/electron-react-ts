// eslint-disable-next-line no-use-before-define
import React from 'react';
import './index.scss'
const Home = () => {
   return (
       <div className='container'>
           <h1 className='h1-text'>Hello Home</h1>
       </div>
   ) 
}

export default React.memo(Home);