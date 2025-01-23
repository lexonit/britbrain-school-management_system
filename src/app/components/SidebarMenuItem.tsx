import React from 'react'

interface SidebarMenuItemProps {
  href: string
  iconClass: string
  text: string
}

const SidebarMenuItem = ({ href, iconClass, text }: SidebarMenuItemProps) => {
  return (
    <li>
      <a href={href}>
        <i className={iconClass}></i>
        <span>{text}</span>
      </a>
    </li>
  )
}

export default SidebarMenuItem
