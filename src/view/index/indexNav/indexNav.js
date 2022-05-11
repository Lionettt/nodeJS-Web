import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { indexNav, types } from '../../../router'
import qs from 'qs'
export default function IndexNav() {
    const { search } = useLocation()
    const { tab } = qs.parse(search.substr(1))
    const activeIndex = tab === undefined ? 0 : (types.indexOf(tab))
    return (
        <Menu
            mode={"horizontal"}
            defaultSelectedKeys={[activeIndex + ""]}
            selectedKeys = {[activeIndex + ""]}
            className = "index-nav"
        >{
                indexNav.map((item, index) => {
                    return <Menu.Item key={index}>
                        <Link to={item.to}>{item.txt}</Link>
                    </Menu.Item>
                })}
        </Menu>
    )
}
