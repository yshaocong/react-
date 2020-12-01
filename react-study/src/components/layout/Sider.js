import React from 'react'

import routes from '@/views'
import { NavLink } from 'react-router-dom'

export default props=>{

  // 用于生成菜单
  const createNavLink = ()=>{
    // exact=true，当url和NavLink.to 完全相等时才高亮
    // exact=flase，当url和NavLink.to 相似就高亮
    return routes.map(ele=>(
      <div key={ele.id}>
        <NavLink
          to={ele.path}
          activeClassName='on'
          exact={!ele.notExact}
        >
          {ele.text}
        </NavLink>
      </div>
    ))
  }

  return (
    <div className='qf-sider'>
      { createNavLink() }
    </div>
  )
}
