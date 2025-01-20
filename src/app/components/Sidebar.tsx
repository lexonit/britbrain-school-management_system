'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/feather.css'
import '../styles/tabler-icons.css'
import '../styles/daterangepicker.css'
import '../styles/select2.min.css'
import '../styles/fontawesome.min.css'
import '../styles/all.min.css'
import '../styles/bootstrap-datetimepicker.min.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'

const Sidebar = () => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  })

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='main-wrapper'>
      <div className='sidebar' id='sidebar'>
        <div
          className='sidebar-inner slimscroll overflow-auto'
          style={{
            border: '1px solid #ddd',
            padding: '10px'
          }}
        >
          <div id='sidebar-menu' className='sidebar-menu'>
            <ul>
              <li>
                <a
                  href='javascript:void(0);'
                  className='d-flex align-items-center mb-4 rounded border bg-white p-2'
                >
                  <img
                    src='images/global-img.svg'
                    className='avatar avatar-md img-fluid rounded'
                    alt='Profile'
                  />
                  <span className='text-dark fw-normal ms-2'>
                    BritBrain Preschool
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Main</span>
                </h6>
                <ul>
                  <li className='submenu'>
                    <a href='javascript:void(0);' className='subdrop active'>
                      <i className='ti ti-layout-dashboard'></i>
                      <span>Dashboard</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='index.html' className='active'>
                          Admin Dashboard
                        </a>
                      </li>
                      <li>
                        <a href='teacher-dashboard.html'>Teacher Dashboard</a>
                      </li>
                      <li>
                        <a href='student-dashboard.html'>Student Dashboard</a>
                      </li>
                      <li>
                        <a href='parent-dashboard.html'>Parent Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li className={`submenu ${isOpen ? 'open' : ''}`}>
                    <a href='#' onClick={toggleMenu}>
                      <i className='ti ti-layout-list'></i>
                      <span>Application</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul style={{ display: isOpen ? 'block' : 'none' }}>
                      <li>
                        <a href='chat.html'>Chat</a>
                      </li>
                      <li>
                        <a href='call.html'>Call</a>
                      </li>
                      <li>
                        <a href='calendar.html'>Calendar</a>
                      </li>
                      <li>
                        <a href='email.html'>Email</a>
                      </li>
                      <li>
                        <a href='todo.html'>To Do</a>
                      </li>
                      <li>
                        <a href='notes.html'>Notes</a>
                      </li>
                      <li>
                        <a href='file-manager.html'>File Manager</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Peoples</span>
                </h6>
                <ul>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-school'></i>
                      <span>Students</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='student-grid.html'>All Students</a>
                      </li>
                      <li>
                        <a href='students.html'>Student List</a>
                      </li>
                      <li>
                        <a href='student-details.html'>Student Details</a>
                      </li>
                      <li>
                        <a href='student-promotion.html'>Student Promotion</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-user-bolt'></i>
                      <span>Parents</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='parent-grid.html'>All Parents</a>
                      </li>
                      <li>
                        <a href='parents.html'>Parent List</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-user-shield'></i>
                      <span>Guardians</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='guardian-grid.html'>All Guardians</a>
                      </li>
                      <li>
                        <a href='guardians.html'>Guardian List</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-users'></i>
                      <span>Teachers</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='teacher-grid.html'>All Teachers</a>
                      </li>
                      <li>
                        <a href='teachers.html'>Teacher List</a>
                      </li>
                      <li>
                        <a href='teacher-details.html'>Teacher Details</a>
                      </li>
                      <li>
                        <a href='routine-teachers.html'>Routine</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Academic</span>
                </h6>
                <ul>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-school-bell'></i>
                      <span>Classes</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='classNamees.html'>All Classes</a>
                      </li>
                      <li>
                        <a href='schedule-classNamees.html'>Schedule</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='className-room.html'>
                      <i className='ti ti-building'></i>
                      <span>Class Room</span>
                    </a>
                  </li>
                  <li>
                    <a href='className-routine.html'>
                      <i className='ti ti-bell-school'></i>
                      <span>Class Routine</span>
                    </a>
                  </li>
                  <li>
                    <a href='className-section.html'>
                      <i className='ti ti-square-rotated-forbid-2'></i>
                      <span>Section</span>
                    </a>
                  </li>
                  <li>
                    <a href='className-subject.html'>
                      <i className='ti ti-book'></i>
                      <span>Subject</span>
                    </a>
                  </li>
                  <li>
                    <a href='className-syllabus.html'>
                      <i className='ti ti-book-upload'></i>
                      <span>Syllabus</span>
                    </a>
                  </li>
                  <li>
                    <a href='className-time-table.html'>
                      <i className='ti ti-table'></i>
                      <span>Time Table</span>
                    </a>
                  </li>
                  <li>
                    <a href='className-home-work.html'>
                      <i className='ti ti-license'></i>
                      <span>Home Work</span>
                    </a>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-hexagonal-prism-plus'></i>
                      <span>Examinations</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='exam.html'>Exam</a>
                      </li>
                      <li>
                        <a href='exam-schedule.html'>Exam Schedule</a>
                      </li>
                      <li>
                        <a href='grade.html'>Grade</a>
                      </li>
                      <li>
                        <a href='exam-attendance.html'>Exam Attendance</a>
                      </li>
                      <li>
                        <a href='exam-results.html'>Exam Results</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='academic-reasons.html'>
                      <i className='ti ti-lifebuoy'></i>
                      <span>Reasons</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Management</span>
                </h6>
                <ul>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-report-money'></i>
                      <span>Fees Collection</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='fees-group.html'>Fees Group</a>
                      </li>
                      <li>
                        <a href='fees-type.html'>Fees Type</a>
                      </li>
                      <li>
                        <a href='fees-master.html'>Fees Master</a>
                      </li>
                      <li>
                        <a href='fees-assign.html'>Fees Assign</a>
                      </li>
                      <li>
                        <a href='collect-fees.html'>Collect Fees</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-notebook'></i>
                      <span>Library</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='library-members.html'>Library Members</a>
                      </li>
                      <li>
                        <a href='library-books.html'>Books</a>
                      </li>
                      <li>
                        <a href='library-issue-book.html'>Issue Book</a>
                      </li>
                      <li>
                        <a href='library-return.html'>Return</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='sports.html'>
                      <i className='ti ti-run'></i>
                      <span>Sports</span>
                    </a>
                  </li>
                  <li>
                    <a href='players.html'>
                      <i className='ti ti-play-football'></i>
                      <span>Players</span>
                    </a>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-building-fortress'></i>
                      <span>Hostel</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='hostel-list.html'>Hostel List</a>
                      </li>
                      <li>
                        <a href='hostel-rooms.html'>Hostel Rooms</a>
                      </li>
                      <li>
                        <a href='hostel-room-type.html'>Room Type</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-bus'></i>
                      <span>Transport</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='transport-routes.html'>Routes</a>
                      </li>
                      <li>
                        <a href='transport-pickup-points.html'>Pickup Points</a>
                      </li>
                      <li>
                        <a href='transport-vehicle-drivers.html'>
                          Vehicle Drivers
                        </a>
                      </li>
                      <li>
                        <a href='transport-vehicle.html'>Vehicle</a>
                      </li>
                      <li>
                        <a href='transport-assign-vehicle.html'>
                          Assign Vehicle
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>HRM</span>
                </h6>
                <ul>
                  <li>
                    <a href='staffs.html'>
                      <i className='ti ti-users-group'></i>
                      <span>Staffs</span>
                    </a>
                  </li>
                  <li>
                    <a href='departments.html'>
                      <i className='ti ti-layout-distribute-horizontal'></i>
                      <span>Departments</span>
                    </a>
                  </li>
                  <li>
                    <a href='designation.html'>
                      <i className='ti ti-user-exclamation'></i>
                      <span>Designation</span>
                    </a>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-calendar-share'></i>
                      <span>Attendance</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='student-attendance.html'>Student Attendance</a>
                      </li>
                      <li>
                        <a href='teacher-attendance.html'>Teacher Attendance</a>
                      </li>
                      <li>
                        <a href='staff-attendance.html'>Staff Attendance</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-calendar-stats'></i>
                      <span>Leaves</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='list-leaves.html'>List of leaves</a>
                      </li>
                      <li>
                        <a href='approve-request.html'>Approve Request</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='holidays.html'>
                      <i className='ti ti-briefcase'></i>
                      <span>Holidays</span>
                    </a>
                  </li>
                  <li>
                    <a href='payroll.html'>
                      <i className='ti ti-moneybag'></i>
                      <span>Payroll</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Finance & Accounts</span>
                </h6>
                <ul>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-swipe'></i>
                      <span>Accounts</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='expenses.html'>Expenses</a>
                      </li>
                      <li>
                        <a href='expenses-category.html'>Expense Category</a>
                      </li>
                      <li>
                        <a href='accounts-income.html'>Income</a>
                      </li>
                      <li>
                        <a href='accounts-invoices.html'>Invoices</a>
                      </li>
                      <li>
                        <a href='invoice.html'>Invoice View</a>
                      </li>
                      <li>
                        <a href='accounts-transactions.html'>Transactions</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <h6 className='submenu-hdr'>
                  <span>Announcements</span>
                </h6>
                <ul>
                  <li>
                    <a href='notice-board.html'>
                      <i className='ti ti-clipboard-data'></i>
                      <span>Notice Board</span>
                    </a>
                  </li>
                  <li>
                    <a href='events.html'>
                      <i className='ti ti-calendar-question'></i>
                      <span>Events</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Reports</span>
                </h6>
                <ul>
                  <li>
                    <a href='attendance-report.html'>
                      <i className='ti ti-calendar-due'></i>
                      <span>Attendance Report</span>
                    </a>
                  </li>
                  <li>
                    <a href='className-report.html'>
                      <i className='ti ti-graph'></i>
                      <span> Class Report</span>
                    </a>
                  </li>
                  <li>
                    <a href='student-report.html'>
                      <i className='ti ti-chart-infographic'></i>
                      <span>Student Report</span>
                    </a>
                  </li>
                  <li>
                    <a href='grade-report.html'>
                      <i className='ti ti-calendar-x'></i>
                      <span>Grade Report</span>
                    </a>
                  </li>
                  <li>
                    <a href='leave-report.html'>
                      <i className='ti ti-line'></i>
                      <span>Leave Report</span>
                    </a>
                  </li>
                  <li>
                    <a href='fees-report.html'>
                      <i className='ti ti-mask'></i>
                      <span>Fees Report</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>User Management</span>
                </h6>
                <ul>
                  <li>
                    <a href='users.html'>
                      <i className='ti ti-users-minus'></i>
                      <span>Users</span>
                    </a>
                  </li>
                  <li>
                    <a href='roles-permission.html'>
                      <i className='ti ti-shield-plus'></i>
                      <span>Roles & Permissions</span>
                    </a>
                  </li>
                  <li>
                    <a href='delete-account.html'>
                      <i className='ti ti-user-question'></i>
                      <span>Delete Account Request</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Membership</span>
                </h6>
                <ul>
                  <li>
                    <a href='membership-plans.html'>
                      <i className='ti ti-user-plus'></i>
                      <span>Membership Plans</span>
                    </a>
                  </li>
                  <li>
                    <a href='membership-addons.html'>
                      <i className='ti ti-cone-plus'></i>
                      <span>Membership Addons</span>
                    </a>
                  </li>
                  <li>
                    <a href='membership-transactions.html'>
                      <i className='ti ti-file-power'></i>
                      <span>Transactions</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Content</span>
                </h6>
                <ul>
                  <li>
                    <a href='pages.html'>
                      <i className='ti ti-page-break'></i>
                      <span>Pages</span>
                    </a>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-brand-blogger'></i>
                      <span>Blog</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='blog.html'>All Blogs</a>
                      </li>
                      <li>
                        <a href='blog-categories.html'>Categories</a>
                      </li>
                      <li>
                        <a href='blog-comments.html'>Comments</a>
                      </li>
                      <li>
                        <a href='blog-tags.html'>Tags</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-map-pin-search'></i>
                      <span>Location</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='countries.html'>Countries</a>
                      </li>
                      <li>
                        <a href='states.html'>States</a>
                      </li>
                      <li>
                        <a href='cities.html'>Cities</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='testimonials.html'>
                      <i className='ti ti-quote'></i>
                      <span>Testimonials</span>
                    </a>
                  </li>
                  <li>
                    <a href='faq.html'>
                      <i className='ti ti-question-mark'></i>
                      <span>FAQ</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Support</span>
                </h6>
                <ul>
                  <li>
                    <a href='contact-messages.html'>
                      <i className='ti ti-message'></i>
                      <span>Contact Messages</span>
                    </a>
                  </li>
                  <li>
                    <a href='tickets.html'>
                      <i className='ti ti-ticket'></i>
                      <span>Tickets</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Pages</span>
                </h6>
                <ul>
                  <li>
                    <a href='profile.html'>
                      <i className='ti ti-user'></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-lock-open'></i>
                      <span>Authentication</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li className='submenu submenu-two'>
                        <a href='javascript:void(0);' className=''>
                          Login
                          <span className='menu-arrow inside-submenu'></span>
                        </a>
                        <ul>
                          <li>
                            <a href='login.html'>Cover</a>
                          </li>
                          <li>
                            <a href='login-2.html'>Illustration</a>
                          </li>
                          <li>
                            <a href='login-3.html'>Basic</a>
                          </li>
                        </ul>
                      </li>
                      <li className='submenu submenu-two'>
                        <a href='javascript:void(0);' className=''>
                          Register
                          <span className='menu-arrow inside-submenu'></span>
                        </a>
                        <ul>
                          <li>
                            <a href='register.html'>Cover</a>
                          </li>
                          <li>
                            <a href='register-2.html'>Illustration</a>
                          </li>
                          <li>
                            <a href='register-3.html'>Basic</a>
                          </li>
                        </ul>
                      </li>
                      <li className='submenu submenu-two'>
                        <a href='javascript:void(0);'>
                          Forgot Password
                          <span className='menu-arrow inside-submenu'></span>
                        </a>
                        <ul>
                          <li>
                            <a href='forgot-password.html'>Cover</a>
                          </li>
                          <li>
                            <a href='forgot-password-2.html'>Illustration</a>
                          </li>
                          <li>
                            <a href='forgot-password-3.html'>Basic</a>
                          </li>
                        </ul>
                      </li>
                      <li className='submenu submenu-two'>
                        <a href='javascript:void(0);'>
                          Reset Password
                          <span className='menu-arrow inside-submenu'></span>
                        </a>
                        <ul>
                          <li>
                            <a href='reset-password.html'>Cover</a>
                          </li>
                          <li>
                            <a href='reset-password-2.html'>Illustration</a>
                          </li>
                          <li>
                            <a href='reset-password-3.html'>Basic</a>
                          </li>
                        </ul>
                      </li>
                      <li className='submenu submenu-two'>
                        <a href='javascript:void(0);'>
                          Email Verification
                          <span className='menu-arrow inside-submenu'></span>
                        </a>
                        <ul>
                          <li>
                            <a href='email-verification.html'>Cover</a>
                          </li>
                          <li>
                            <a href='email-verification-2.html'>Illustration</a>
                          </li>
                          <li>
                            <a href='email-verification-3.html'>Basic</a>
                          </li>
                        </ul>
                      </li>
                      <li className='submenu submenu-two'>
                        <a href='javascript:void(0);'>
                          2 Step Verification
                          <span className='menu-arrow inside-submenu'></span>
                        </a>
                        <ul>
                          <li>
                            <a href='two-step-verification.html'>Cover</a>
                          </li>
                          <li>
                            <a href='two-step-verification-2.html'>
                              Illustration
                            </a>
                          </li>
                          <li>
                            <a href='two-step-verification-3.html'>Basic</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='lock-screen.html'>Lock Screen</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-error-404'></i>
                      <span>Error Pages</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='404-error.html'>404 Error</a>
                      </li>
                      <li>
                        <a href='500-error.html'>500 Error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='blank-page.html'>
                      <i className='ti ti-brand-nuxt'></i>
                      <span>Blank Page</span>
                    </a>
                  </li>
                  <li>
                    <a href='coming-soon.html'>
                      <i className='ti ti-file'></i>
                      <span>Coming Soon</span>
                    </a>
                  </li>
                  <li>
                    <a href='under-maintenance.html'>
                      <i className='ti ti-moon-2'></i>
                      <span>Under Maintenance</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Settings</span>
                </h6>
                <ul>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-shield-cog'></i>
                      <span>General Settings</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='profile-settings.html'>Profile Settings</a>
                      </li>
                      <li>
                        <a href='security-settings.html'>Security Settings</a>
                      </li>
                      <li>
                        <a href='notifications-settings.html'>
                          Notifications Settings
                        </a>
                      </li>
                      <li>
                        <a href='connected-apps.html'>Connected Apps</a>
                      </li>
                    </ul>
                  </li>

                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-device-laptop'></i>
                      <span>Website Settings</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='company-settings.html'>Company Settings</a>
                      </li>
                      <li>
                        <a href='localization.html'>Localization</a>
                      </li>
                      <li>
                        <a href='prefixes.html'>Prefixes</a>
                      </li>
                      <li>
                        <a href='preferences.html'>Preferences</a>
                      </li>
                      <li>
                        <a href='social-authentication.html'>
                          Social Authentication
                        </a>
                      </li>
                      <li>
                        <a href='language.html'>Language</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-apps'></i>
                      <span>App Settings</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='invoice-settings.html'>Invoice Settings</a>
                      </li>
                      <li>
                        <a href='custom-fields.html'>Custom Fields</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-file-symlink'></i>
                      <span>System Settings</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='email-settings.html'>Email Settings</a>
                      </li>
                      <li>
                        <a href='email-templates.html'>Email Templates</a>
                      </li>
                      <li>
                        <a href='sms-settings.html'>SMS Settings</a>
                      </li>
                      <li>
                        <a href='otp-settings.html'>OTP</a>
                      </li>
                      <li>
                        <a href='gdpr-cookies.html'>GDPR Cookies</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-zoom-money'></i>
                      <span>Financial Settings</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='payment-gateways.html'>Payment Gateways </a>
                      </li>
                      <li>
                        <a href='tax-rates.html'>Tax Rates</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-calendar-repeat'></i>
                      <span>Academic Settings</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='school-settings.html'>School Settings </a>
                      </li>
                      <li>
                        <a href='religion.html'>Religion</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu'>
                    <a href='javascript:void(0);'>
                      <i className='ti ti-flag-cog'></i>
                      <span>Other Settings</span>
                      <span className='menu-arrow'></span>
                    </a>
                    <ul>
                      <li>
                        <a href='storage.html'>Storage</a>
                      </li>
                      <li>
                        <a href='ban-ip-address.html'>Ban IP Address</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
