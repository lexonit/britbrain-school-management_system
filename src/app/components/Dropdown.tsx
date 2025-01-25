import React, { useState } from 'react'

interface MenuItem {
  label: string
  href: string
  icon?: string
  isActive?: boolean
}

interface DropdownProps {
  title: string
  menuItems: MenuItem[]
  icon?: string
  isInitiallyOpen?: boolean
}

const Dropdown = ({
  title,
  menuItems,
  icon,
  isInitiallyOpen = false
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <li className={`submenu ${isOpen ? 'open' : ''}`}>+
      <a
        href='#'
        onClick={e => {
          e.preventDefault()
          toggleDropdown()
        }}
        className={isOpen ? 'subdrop active' : ''}
      >
        {icon && <i className={icon}></i>}
        <span>{title}</span>
        <span className='menu-arrow'></span>
      </a>
      {isOpen && (
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={item.isActive ? 'active' : ''}>
                {item.icon && <i className={item.icon}></i>}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default Dropdown
