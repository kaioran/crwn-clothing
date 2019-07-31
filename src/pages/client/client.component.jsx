import React from 'react';


import './client.styles.scss';



const ClientPage = () => (
    <div className='client-page'>
     <div className='client-header'>
       <div className='header-block'>
          <span>#</span>
       </div>
       <div className='header-block'>
          <span>Full Name</span>
       </div>
       <div className='header-block'>
          <span>Address</span>
       </div>
       <div className='header-block'>
          <span>Phone</span>
       </div>
       <div className='header-block'>
          <span>Email</span>
       </div>
       <div className='header-block'>
          <span>Siren</span>
       </div>
       <div className='header-block'>
          <span>Remove</span>
       </div>
     </div>      
    </div>
);

export default ClientPage;