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
import sidebarConfig from '../../../public/sidebarConfig.json'
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
              {sidebarConfig.map((section, index) => (
                <li key={index}>
                  <SidebarCategory text={section.category} />
                  <ul>
                    {section.items.map((item, idx) => {
                      if (item.type === 'dropdown') {
                        return (
                          <Dropdown
                            key={idx}
                            title={item.title}
                            menuItems={item.menuItems}
                            icon={item.icon}
                            isInitiallyOpen={item.isInitiallyOpen}
                          />
                        )
                      } else if (item.type === 'menuItem') {
                        return (
                          <SidebarMenuItem
                            key={idx}
                            href={item.href}
                            iconClass={item.iconClass}
                            text={item.text}
                          />
                        )
                      }
                      return null
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
