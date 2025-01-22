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
import SidebarCategory from './SidebarCategory'
import SidebarMenuItem from './SidebarMenuItem'

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
                <SidebarCategory text='Main' />
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
                <SidebarCategory text='People' />
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
                <SidebarCategory text='Academics' />
                <ul>
                  <Dropdown
                    title='Classes'
                    menuItems={menuItems.classesMenuItems}
                    icon='ti ti-school-bell'
                    isInitiallyOpen={false}
                  />
                  <SidebarMenuItem
                    href='className-room.html'
                    iconClass='ti ti-building'
                    text='Class Room'
                  />
                  <SidebarMenuItem
                    href='className-routine.html'
                    iconClass='ti ti-bell-school'
                    text='Class Routine'
                  />

                  <SidebarMenuItem
                    href='className-section.html'
                    iconClass='ti ti-square-rotated-forbid-2'
                    text='Section'
                  />

                  <SidebarMenuItem
                    href='className-subject.html'
                    iconClass='ti ti-book'
                    text='Subject'
                  />

                  <SidebarMenuItem
                    href='className-syllabus.html'
                    iconClass='ti ti-book-upload'
                    text='Syllabus'
                  />

                  <SidebarMenuItem
                    href='className-time-table.html'
                    iconClass='ti ti-table'
                    text='Time Table'
                  />

                  <SidebarMenuItem
                    href='className-home-work.html'
                    iconClass='ti ti-license'
                    text='Home Work'
                  />

                  <Dropdown
                    title='Examinations'
                    menuItems={menuItems.examinationsMenuItems}
                    icon='ti ti-hexagonal-prism-plus'
                    isInitiallyOpen={false}
                  />
                  <SidebarMenuItem
                    href='academic-reasons.html'
                    iconClass='ti ti-lifebuoy'
                    text='Reasons'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='Manegment' />
                <ul>
                  <Dropdown
                    title='Fees Collection'
                    menuItems={menuItems.feesCollectionMenuItems}
                    icon='ti ti-report-money'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Library'
                    menuItems={menuItems.libraryMenuItems}
                    icon='ti ti-notebook'
                    isInitiallyOpen={false}
                  />
                  <SidebarMenuItem
                    href='sports.html'
                    iconClass='ti ti-run'
                    text='Sports'
                  />

                  <SidebarMenuItem
                    href='players.html'
                    iconClass='ti ti-play-football'
                    text='Players'
                  />

                  <Dropdown
                    title='Hostel'
                    menuItems={menuItems.hostelMenuItems}
                    icon='ti ti-building-fortress'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Transport'
                    menuItems={menuItems.transportMenuItems}
                    icon='ti ti-bus'
                    isInitiallyOpen={false}
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='HRM' />
                <ul>
                  <SidebarMenuItem
                    href='staffs.html'
                    iconClass='ti ti-users-group'
                    text='Staffs'
                  />

                  <SidebarMenuItem
                    href='departments.html'
                    iconClass='ti ti-layout-distribute-horizontal'
                    text='Departments'
                  />

                  <SidebarMenuItem
                    href='designation.html'
                    iconClass='ti ti-user-exclamation'
                    text='Designation'
                  />

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
                    isInitiallyOpen={false}
                  />
                  <SidebarMenuItem
                    href='holidays.html'
                    iconClass='ti ti-briefcase'
                    text='Holidays'
                  />

                  <SidebarMenuItem
                    href='payroll.html'
                    iconClass='ti ti-moneybag'
                    text='Payroll'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='Finance & Accounts' />
                <ul>
                  <Dropdown
                    title='Accounts'
                    menuItems={menuItems.accountsMenuItems}
                    icon='ti ti-swipe'
                    isInitiallyOpen={false}
                  />
                </ul>
              </li>

              <li>
                <SidebarCategory text='Announcements' />
                <ul>
                  <SidebarMenuItem
                    href='notice-board.html'
                    iconClass='ti ti-clipboard-data'
                    text='Notice Board'
                  />

                  <SidebarMenuItem
                    href='events.html'
                    iconClass='ti ti-calendar-question'
                    text='Events'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='Reports' />
                <ul>
                  <SidebarMenuItem
                    href='attendance-report.html'
                    iconClass='ti ti-calendar-due'
                    text='Attendance Report'
                  />

                  <SidebarMenuItem
                    href='className-report.html'
                    iconClass='ti ti-graph'
                    text='Class Report'
                  />

                  <SidebarMenuItem
                    href='student-report.html'
                    iconClass='ti ti-chart-infographic'
                    text='Student Report'
                  />

                  <SidebarMenuItem
                    href='grade-report.html'
                    iconClass='ti ti-calendar-x'
                    text='Grade Report'
                  />

                  <SidebarMenuItem
                    href='leave-report.html'
                    iconClass='ti ti-line'
                    text='Leave Report'
                  />

                  <SidebarMenuItem
                    href='fees-report.html'
                    iconClass='ti ti-mask'
                    text='Fees Report'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='User mangemnent' />
                <ul>
                  <SidebarMenuItem
                    href='users.html'
                    iconClass='ti ti-users-minus'
                    text='Users'
                  />

                  <SidebarMenuItem
                    href='roles-permission.html'
                    iconClass='ti ti-shield-plus'
                    text='Roles & Permissions'
                  />

                  <SidebarMenuItem
                    href='delete-account.html'
                    iconClass='ti ti-user-question'
                    text='Delete Account Request'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='membership' />
                <ul>
                  <SidebarMenuItem
                    href='membership-plans.html'
                    iconClass='ti ti-user-plus'
                    text='Membership Plans'
                  />

                  <SidebarMenuItem
                    href='membership-addons.html'
                    iconClass='ti ti-cone-plus'
                    text='Membership Addons'
                  />

                  <SidebarMenuItem
                    href='membership-transactions.html'
                    iconClass='ti ti-file-power'
                    text='Transactions'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='content' />
                <ul>
                  <SidebarMenuItem
                    href='pages.html'
                    iconClass='ti ti-page-break'
                    text='Pages'
                  />

                  <Dropdown
                    title='Blog'
                    menuItems={menuItems.blogMenuItems}
                    icon='ti ti-brand-blogger'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Location'
                    menuItems={menuItems.locationMenuItems}
                    icon='ti ti-map-pin-search'
                    isInitiallyOpen={false}
                  />
                  <SidebarMenuItem
                    href='testimonials.html'
                    iconClass='ti ti-quote'
                    text='Testimonials'
                  />

                  <SidebarMenuItem
                    href='faq.html'
                    iconClass='ti ti-question-mark'
                    text='FAQ'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='support' />
                <ul>
                  <SidebarMenuItem
                    href='contact-messages.html'
                    iconClass='ti ti-message'
                    text='Contact Messages'
                  />

                  <SidebarMenuItem
                    href='tickets.html'
                    iconClass='ti ti-ticket'
                    text='Tickets'
                  />
                </ul>
              </li>
              <li>
                <SidebarCategory text='settings' />
                <ul>
                  <Dropdown
                    title='General Settings'
                    menuItems={menuItems.generalSettingsMenuItems}
                    icon='ti ti-shield-cog'
                    isInitiallyOpen={false}
                  />

                  <Dropdown
                    title='Website Settings'
                    menuItems={menuItems.websiteSettingsMenuItems}
                    icon='ti ti-device-laptop'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='App Settings'
                    menuItems={menuItems.appSettingsMenuItems}
                    icon='ti ti-apps'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='System Settings'
                    menuItems={menuItems.systemSettingsMenuItems}
                    icon='ti ti-file-symlink'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Financial Settings'
                    menuItems={menuItems.financialSettingsMenuItems}
                    icon='ti ti-zoom-money'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Academic Settings'
                    menuItems={menuItems.academicSettingsMenuItems}
                    icon='ti ti-calendar-repeat'
                    isInitiallyOpen={false}
                  />
                  <Dropdown
                    title='Other Settings'
                    menuItems={menuItems.otherSettingsMenuItems}
                    icon='ti ti-flag-cog'
                    isInitiallyOpen={false}
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
