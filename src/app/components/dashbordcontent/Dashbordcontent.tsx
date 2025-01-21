'use client'
import './Dashbordcontent.css'


export default function AlertMessage() {
    return (
      <div className='row'>
      <div className="col-md-10  messages ">
        <div className="w-full">
          <div className="alert-message ">
            <div
              className="bg-green-100 text-green-800 rounded-full flex items-center justify-between border border-green-500 p-2 mb-4 "
              role="alert"
            >
              <div className="flex items-center">
                {/* Avatar */}
                <span className="mr-5 flex-shrink-0">
                  <img
                    src="/images/avatar-27.jpg" 
                    alt="Avatar"
                    className="w-full h-8 rounded-full"
                  />
                </span>
                {/* Alert Message */}
                <p className="text-sm">
                  Fahed III, C has paid Fees for the
                  <strong className="mx-1">“Term1”</strong>
                </p>
              </div>
              {/* Close Button */}
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 p-2"
                // aria-label="Close"
                // onClick={() => console.log("Alert dismissed")}
              >
                {/* Close Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      
    );
  }
  