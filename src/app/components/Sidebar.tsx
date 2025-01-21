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
import Dropdown from './Dropdown'
import menuItems from '../../../public/menuItems.json'

const Sidebar = () => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  })

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
                  <Dropdown
                    title='Dashboard'
                    menuItems={menuItems.dashboardMenuItems}
                    icon='ti ti-layout-dashboard'
                    isInitiallyOpen={true}
                  />
                  <Dropdown
                    title='Application'
                    menuItems={menuItems.applicationMenuItems}
                    icon='ti ti-layout-list'
                    isInitiallyOpen={false}
                  />
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Peoples</span>
                </h6>
                <ul>
                  <Dropdown
                    title='Students'
                    menuItems={menuItems.studentsMenuItems}
                    icon='ti ti-school'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Parents'
                    menuItems={menuItems.parentsMenuItems}
                    icon='ti ti-user-bolt'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Guardians'
                    menuItems={menuItems.guardiansMenuItems}
                    icon='ti ti-user-shield'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Teachers'
                    menuItems={menuItems.teachersMenuItems}
                    icon='ti ti-users'
                    isInitiallyOpen={false}
                  />
                </ul>
              </li>
              <li>
                <h6 className='submenu-hdr'>
                  <span>Academic</span>
                </h6>
                <ul>
                  <Dropdown
                    title='Classes'
                    menuItems={menuItems.classesMenuItems}
                    icon='ti ti-school-bell'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
                  <Dropdown
                    title='Examinations'
                    menuItems={menuItems.examinationsMenuItems}
                    icon='ti ti-hexagonal-prism-plus'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
                  <Dropdown
                    title='Fees Collection'
                    menuItems={menuItems.feesCollectionMenuItems}
                    icon='ti ti-report-money'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='Library'
                    menuItems={menuItems.libraryMenuItems}
                    icon='ti ti-notebook'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
                  <Dropdown
                    title='Hostel'
                    menuItems={menuItems.hostelMenuItems}
                    icon='ti ti-building-fortress'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='Transport'
                    menuItems={menuItems.transportMenuItems}
                    icon='ti ti-bus'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
                  <Dropdown
                    title='Attendance'
                    menuItems={menuItems.attendanceMenuItems}
                    icon='ti ti-calendar-share'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Leaves'
                    menuItems={menuItems.leavesMenuItems}
                    icon='ti ti-calendar-stats'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
                  <Dropdown
                    title='Accounts'
                    menuItems={menuItems.accountsMenuItems}
                    icon='ti ti-swipe'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
                  <Dropdown
                    title='Blog'
                    menuItems={menuItems.blogMenuItems}
                    icon='ti ti-brand-blogger'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='Location'
                    menuItems={menuItems.locationMenuItems}
                    icon='ti ti-map-pin-search'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
                  <span>Settings</span>
                </h6>
                <ul>
                  <Dropdown
                    title='General Settings'
                    menuItems={menuItems.generalSettingsMenuItems}
                    icon='ti ti-shield-cog'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />

                  <Dropdown
                    title='Website Settings'
                    menuItems={menuItems.websiteSettingsMenuItems}
                    icon='ti ti-device-laptop'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='App Settings'
                    menuItems={menuItems.appSettingsMenuItems}
                    icon='ti ti-apps'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='System Settings'
                    menuItems={menuItems.systemSettingsMenuItems}
                    icon='ti ti-file-symlink'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='Financial Settings'
                    menuItems={menuItems.financialSettingsMenuItems}
                    icon='ti ti-zoom-money'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='Academic Settings'
                    menuItems={menuItems.academicSettingsMenuItems}
                    icon='ti ti-calendar-repeat'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
                  <Dropdown
                    title='Other Settings'
                    menuItems={menuItems.otherSettingsMenuItems}
                    icon='ti ti-flag-cog'
                    isInitiallyOpen={false} // Set to `true` if you want it open by default
                  />
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
