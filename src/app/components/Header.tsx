import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../styles/bootstrap.min.css'
import '../styles/style.css'

const Header = () => {
  return (
    <div className='main-wrapper'>
      <div className='header'>
        <div className='header-left active'>
          <a href='index.html' className='logo logo-normal'>
            <img src='images/logo.png' alt='Logo' />
          </a>
          <a href='index.html' className='logo-small'>
            <img src='images/logo-small.svg' alt='Logo' />
          </a>
          <a href='index.html' className='dark-logo'>
            <img src='images/logo-dark.svg' alt='Logo' />
          </a>
          <a id='toggle_btn' href='javascript:void(0);'>
            <i className='ti ti-menu-deep'></i>
          </a>
        </div>

        <a id='mobile_btn' className='mobile_btn' href='#sidebar'>
          <span className='bar-icon'>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div className='header-user'>
          <div className='nav user-menu'>
            <div className='nav-item nav-search-inputs me-auto'>
              <div className='top-nav-search'>
                <a href='javascript:void(0);' className='responsive-search'>
                  <i className='fa fa-search'></i>
                </a>
                <form action='#' className='dropdown'>
                  <div className='searchinputs' id='dropdownMenuClickable'>
                    <input type='text' placeholder='Search' />
                    <div className='search-addon'>
                      <button type='submit'>
                        <i className='ti ti-command'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='d-flex align-items-center'>
              <div className='dropdown me-2'>
                <a
                  href='#'
                  className='btn btn-outline-light fw-normal d-flex align-items-center bg-white p-2'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <i className='ti ti-calendar-due me-1'></i>Academic Year :
                  2024 / 2025
                </a>
                <div className='dropdown-menu dropdown-menu-right'>
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item d-flex align-items-center'
                  >
                    Academic Year : 2023 / 2024
                  </a>
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item d-flex align-items-center'
                  >
                    Academic Year : 2022 / 2023
                  </a>
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item d-flex align-items-center'
                  >
                    Academic Year : 2021 / 2022
                  </a>
                </div>
              </div>
              <div className='ms-1 pe-1'>
                <div className='dropdown'>
                  <a
                    href='#'
                    className='btn btn-outline-light btn-icon d-flex align-items-center me-1 bg-white p-2'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <img
                      src='images/us.png'
                      alt='Language'
                      className='img-fluid rounded-pill'
                    />
                  </a>
                  <div className='dropdown-menu dropdown-menu-right'>
                    <a
                      href='javascript:void(0);'
                      className='dropdown-item active d-flex align-items-center'
                    >
                      <img
                        className='rounded-pill me-2'
                        src='images/us.png'
                        alt='Img'
                        height='22'
                        width='22'
                      />
                      English
                    </a>
                    <a
                      href='javascript:void(0);'
                      className='dropdown-item d-flex align-items-center'
                    >
                      <img
                        className='rounded-pill me-2'
                        src='images/fr.png'
                        alt='Img'
                        height='22'
                        width='22'
                      />
                      French
                    </a>
                    <a
                      href='javascript:void(0);'
                      className='dropdown-item d-flex align-items-center'
                    >
                      <img
                        className='rounded-pill me-2'
                        src='images/es.png'
                        alt='Img'
                        height='22'
                        width='22'
                      />
                      Spanish
                    </a>
                    <a
                      href='javascript:void(0);'
                      className='dropdown-item d-flex align-items-center'
                    >
                      <img
                        className='rounded-pill me-2'
                        src='images/de.png'
                        alt='Img'
                        height='22'
                        width='22'
                      />
                      German
                    </a>
                  </div>
                </div>
              </div>
              <div className='pe-1'>
                <div className='dropdown'>
                  <a
                    href='#'
                    className='btn btn-outline-light btn-icon me-1 bg-white'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='ti ti-square-rounded-plus'></i>
                  </a>
                  <div className='dropdown-menu dropdown-menu-right dropdown-md border shadow-sm'>
                    <div className='border-bottom p-3'>
                      <h5>Add New</h5>
                    </div>
                    <div className='p-3 pb-0'>
                      <div className='row gx-2'>
                        <div className='col-6'>
                          <a
                            href='add-student.html'
                            className='d-block bg-primary-transparent ronded className-hover mb-3 p-2 text-center'
                          >
                            <div className='avatar avatar-lg mb-2'>
                              <span className='d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle'>
                                <i className='ti ti-school'></i>
                              </span>
                            </div>
                            <p className='text-dark'>Students</p>
                          </a>
                        </div>
                        <div className='col-6'>
                          <a
                            href='add-teacher.html'
                            className='d-block bg-success-transparent ronded className-hover mb-3 p-2 text-center'
                          >
                            <div className='avatar avatar-lg mb-2'>
                              <span className='d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle'>
                                <i className='ti ti-users'></i>
                              </span>
                            </div>
                            <p className='text-dark'>Teachers</p>
                          </a>
                        </div>
                        <div className='col-6'>
                          <a
                            href='add-staff.html'
                            className='d-block bg-warning-transparent ronded className-hover mb-3 p-2 text-center'
                          >
                            <div className='avatar avatar-lg rounded-circle mb-2'>
                              <span className='d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle'>
                                <i className='ti ti-users-group'></i>
                              </span>
                            </div>
                            <p className='text-dark'>Staffs</p>
                          </a>
                        </div>
                        <div className='col-6'>
                          <a
                            href='add-invoice.html'
                            className='d-block bg-info-transparent ronded className-hover mb-3 p-2 text-center'
                          >
                            <div className='avatar avatar-lg mb-2'>
                              <span className='d-inline-flex align-items-center justify-content-center w-100 h-100 bg-info rounded-circle'>
                                <i className='ti ti-license'></i>
                              </span>
                            </div>
                            <p className='text-dark'>Invoice</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pe-1'>
                <a
                  href='#'
                  id='dark-mode-toggle'
                  className='dark-mode-toggle activate btn btn-outline-light btn-icon me-1 bg-white'
                >
                  <i className='ti ti-moon'></i>
                </a>
                <a
                  href='#'
                  id='light-mode-toggle'
                  className='dark-mode-toggle btn btn-outline-light btn-icon me-1 bg-white'
                >
                  <i className='ti ti-brightness-up'></i>
                </a>
              </div>
              <div className='pe-1' id='notification_item'>
                <a
                  href='#'
                  className='btn btn-outline-light btn-icon position-relative me-1 bg-white'
                  id='notification_popup'
                >
                  <i className='ti ti-bell'></i>
                  <span className='notification-status-dot'></span>
                </a>
                <div className='dropdown-menu dropdown-menu-end notification-dropdown p-4'>
                  <div className='d-flex align-items-center justify-content-between border-bottom mb-3 p-0 pb-3'>
                    <h4 className='notification-title'>Notifications (2)</h4>
                    <div className='d-flex align-items-center'>
                      <a href='#' className='text-primary fs-15 lh-1 me-3'>
                        Mark all as read
                      </a>
                      <div className='dropdown'>
                        <a
                          href='javascript:void(0);'
                          className='dropdown-toggle bg-white'
                          data-bs-toggle='dropdown'
                        >
                          <i className='ti ti-calendar-due me-1'></i>Today
                        </a>
                        <ul className='dropdown-menu mt-2 p-3'>
                          <li>
                            <a
                              href='javascript:void(0);'
                              className='dropdown-item rounded-1'
                            >
                              This Week
                            </a>
                          </li>
                          <li>
                            <a
                              href='javascript:void(0);'
                              className='dropdown-item rounded-1'
                            >
                              Last Week
                            </a>
                          </li>
                          <li>
                            <a
                              href='javascript:void(0);'
                              className='dropdown-item rounded-1'
                            >
                              Last Week
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='noti-content'>
                    <div className='d-flex flex-column'>
                      <div className='border-bottom mb-3 pb-3'>
                        <a href='activities.html'>
                          <div className='d-flex'>
                            <span className='avatar avatar-lg me-2 flex-shrink-0'>
                              <img src='images/avatar-27.jpg' alt='Profile' />
                            </span>
                            <div className='flex-grow-1'>
                              <p className='mb-1'>
                                <span className='text-dark fw-semibold'>
                                  Shawn
                                </span>
                                performance in Math is below the threshold.
                              </p>
                              <span>Just Now</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className='border-bottom mb-3 pb-3'>
                        <a href='activities.html' className='pb-0'>
                          <div className='d-flex'>
                            <span className='avatar avatar-lg me-2 flex-shrink-0'>
                              <img src='images/avatar-23.jpg' alt='Profile' />
                            </span>
                            <div className='flex-grow-1'>
                              <p className='mb-1'>
                                <span className='text-dark fw-semibold'>
                                  Sylvia
                                </span>
                                added appointment on 02:00 PM
                              </p>
                              <span>10 mins ago</span>
                              <div className='d-flex justify-content-start align-items-center mt-1'>
                                <span className='btn btn-light btn-sm me-2'>
                                  Deny
                                </span>
                                <span className='btn btn-primary btn-sm'>
                                  Approve
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className='border-bottom mb-3 pb-3'>
                        <a href='activities.html'>
                          <div className='d-flex'>
                            <span className='avatar avatar-lg me-2 flex-shrink-0'>
                              <img src='images/avatar-25.jpg' alt='Profile' />
                            </span>
                            <div className='flex-grow-1'>
                              <p className='mb-1'>
                                New student record
                                <span className='text-dark fw-semibold'>
                                  George
                                </span>
                                is created by
                                <span className='text-dark fw-semibold'>
                                  Teressa
                                </span>
                              </p>
                              <span>2 hrs ago</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className='mb-3 border-0 pb-0'>
                        <a href='activities.html'>
                          <div className='d-flex'>
                            <span className='avatar avatar-lg me-2 flex-shrink-0'>
                              <img src='images/avatar-01.jpg' alt='Profile' />
                            </span>
                            <div className='flex-grow-1'>
                              <p className='mb-1'>
                                A new teacher record for
                                <span className='text-dark fw-semibold'>
                                  Elisa
                                </span>
                              </p>
                              <span>09:45 AM</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex p-0'>
                    <a href='#' className='btn btn-light w-100 me-2'>
                      Cancel
                    </a>
                    <a href='activities.html' className='btn btn-primary w-100'>
                      View All
                    </a>
                  </div>
                </div>
              </div>
              <div className='pe-1'>
                <a
                  href='chat.html'
                  className='btn btn-outline-light btn-icon position-relative me-1 bg-white'
                >
                  <i className='ti ti-brand-hipchat'></i>
                  <span className='chat-status-dot'></span>
                </a>
              </div>
              <div className='pe-1'>
                <a
                  href='#'
                  className='btn btn-outline-light btn-icon me-1 bg-white'
                >
                  <i className='ti ti-chart-bar'></i>
                </a>
              </div>
              <div className='pe-1'>
                <a
                  href='#'
                  className='btn btn-outline-light btn-icon me-1 bg-white'
                  id='btnFullscreen'
                >
                  <i className='ti ti-maximize'></i>
                </a>
              </div>
              <div className='dropdown ms-1'>
                <a
                  href='javascript:void(0);'
                  className='dropdown-toggle d-flex align-items-center'
                  data-bs-toggle='dropdown'
                >
                  <span className='avatar avatar-md rounded'>
                    <img
                      src='images/avatar-27.jpg'
                      alt='Img'
                      className='img-fluid'
                    />
                  </span>
                </a>
                <div className='dropdown-menu'>
                  <div className='d-block'>
                    <div className='d-flex align-items-center p-2'>
                      <span className='avatar avatar-md online avatar-rounded me-2'>
                        <img src='images/avatar-27.jpg' alt='img' />
                      </span>
                      <div>
                        <h6 className=''>Kevin Larry</h6>
                        <p className='text-primary mb-0'>Administrator</p>
                      </div>
                    </div>
                    <hr className='m-0' />
                    <a
                      className='dropdown-item d-inline-flex align-items-center p-2'
                      href='profile.html'
                    >
                      <i className='ti ti-user-circle me-2'></i>My Profile
                    </a>
                    <a
                      className='dropdown-item d-inline-flex align-items-center p-2'
                      href='profile-settings.html'
                    >
                      <i className='ti ti-settings me-2'></i>Settings
                    </a>
                    <hr className='m-0' />
                    <a
                      className='dropdown-item d-inline-flex align-items-center p-2'
                      href='login.html'
                    >
                      <i className='ti ti-login me-2'></i>Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='dropdown mobile-user-menu'>
          <a
            href='javascript:void(0);'
            className='nav-link dropdown-toggle'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <i className='fa fa-ellipsis-v'></i>
          </a>
          <div className='dropdown-menu dropdown-menu-end'>
            <a className='dropdown-item' href='profile.html'>
              My Profile
            </a>
            <a className='dropdown-item' href='profile-settings.html'>
              Settings
            </a>
            <a className='dropdown-item' href='login.html'>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
