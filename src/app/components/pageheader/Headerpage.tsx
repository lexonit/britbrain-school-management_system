  'use client'

  import './Headerpage.css'

 const DashboardCard = () => {
  return (
             
    <div className='row'>
    <div className="flex flex- col-12  headersection ">

    <div className=" ">

      {/* Overlay Images */}
      <div className="overlay-img relative">
        <img
          src="/images/shape-04.png"
          alt="Shape 04"
          className="absolute top-0 left-12 w-5 h-8 shape-01"
        />
        <img
          src="/images/shape-01.png"
          alt="Shape 01"
          className="absolute top-12 left-0 w-20 h-12 shape-02"
        />
        <img
          src="/images/shape-02.png"
          alt="Shape 02"
          className="absolute top-17 left-0 w-10 h-15 shape-03 "
        />
        <img
          src="/images/shape-03.png"
          alt="Shape 03"
          className="absolute top-20 left-50 w-13 h-5 shape-04"
        />
      </div>

      {/* Card Body */}

      <div className="p-2 ">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          {/* Left Content */}
          <div className="mb-4 xl:mb-0">
            <div className="flex items-center flex-wrap mb-2">
              <h1 className="text-white text-2xl font-bold mr-2 welcome">
                Welcome Back, Mr. Herald
              </h1>
              <a
                href="/profile"
                className="h-4 w-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <i className="ti ti-edit text-white"></i>
              </a>
            </div>
            <p className="text-white text-sm ">Have a Good day at work</p>
          </div>

          {/* Right Content */}
          <p className="text-white text-sm flex items-center recent ">
            <i className="ti ti-refresh mr-1"></i> Updated Recently on 15 Jun 2024
          </p>
        </div>
      </div>
    
    
    </div>
    </div>
    </div>
  )
}

export default DashboardCard
