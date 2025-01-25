'use client'

 
 import React, { useState } from "react";
// import { useState } from 'react';
 
   import Banner from './components/banner/Banner'
   import Button from './components/button/Button'
   import Banner2 from "./components/baneer2/Banner2";


   export default function Home() {

   const [showBanner, setShowBanner] = useState(true);

  // Handler to close the banner
  const handleBannerClose = () => {
    setShowBanner(false);

  };

  // Banner data
  const bannerData = {
    avatar: "/images/avatar-27.jpg", // Path to avatar image
    message: "Fahed III,C has paid Fees for the",
    term: "Term1",
  };

  const bannerData2 = {
    username: "Mr. Herald",
    profileLink: "/profile.html",
    lastUpdated: "15 Jun 2024",
  };

  return(

      <div className='main-wrapper'>
        <div className='page-wrapper'>
          <div className='content'>

            <div className='d-md-flex d-block align-items-center justify-content-between mb-3'>
              
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Admin Dashboard</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Admin Dashboard
                  </li>
                </ol>
              </nav>

            </div>
            <div className="flex items-center gap-2">
             <Button title="Add New Student" />
              <Button title="Fees Details" />
                </div>

            </div>
            <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          {showBanner && (

            <Banner
              avatar={bannerData.avatar}
              message={bannerData.message}
              term={bannerData.term}
              onClose={handleBannerClose}
            />
          )}
               <Banner2
               username={bannerData2.username}
               profileLink={bannerData2.profileLink}
               lastUpdated={bannerData2.lastUpdated}
               />

          </div>

        </div>
     
      </div>

    </div>
    </div>
    </div>

  )
};
