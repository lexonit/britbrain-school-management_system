'use client'
import './Button.css'

export default function AdminDashboard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-3 contners"  >
      {/* Breadcrumb Section */}
      <div className='my-auto mb-2'>
        <h3 className='mb-1 text-2xl font-semibold'>Admin Dashboard</h3>
        <nav>
          <ol className='breadcrumb mb-0 flex space-x-2 text-gray-600'>
            <li className='breadcrumb-item'>
              <a href='index.html' className='text-blue-500 hover:underline'>
                Dashboard
              </a>
            </li>
            <li className='breadcrumb-item text-gray-500'>/ Admin Dashboard</li>
          </ol>
        </nav>
      </div>

      {/* Buttons Section */}

      <div className='my-xl-auto flex flex-wrap items-center space-x-3 contentbutton' >
        {/* Add New Student Button */}
        <div className='mb-2' >
          <a
            href='add-student.html'
            className='btn-primary flex items-center rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'
          >
            <i className='ti ti-square-rounded-plus mr-2'></i>
            Add New Student
          </a>
        </div>

        {/* Fees Details Button */}
        <div className='mb-2'> 
          <a
            href='collect-fees.html'
            className='btn-light flex items-center rounded bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300'
          >
            Fees Details
          </a>
        </div>
      </div>

    </div>
  );
}
