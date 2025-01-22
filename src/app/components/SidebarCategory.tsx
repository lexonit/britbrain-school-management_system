import React from 'react'

interface SidebarCategoryProps {
  text: string
}

const SidebarCategory = ({ text }: SidebarCategoryProps) => {
  return (
    <h6 className='submenu-hdr'>
      <span>{text}</span>
    </h6>
  )
}

export default SidebarCategory
