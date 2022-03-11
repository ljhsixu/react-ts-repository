import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
    return <Menu mode='vertical' className={styles['side-menu']}>
        {sideMenuList.map((v, index) => {
            return <Menu.SubMenu
                key={`side-menu-${index}`}
                title={<span><GifOutlined ></GifOutlined>{v.title}</span>}>
                {v.subMenu.map((z, zindex) => {
                    return <Menu.SubMenu key={`sub-menu-${zindex}`}
                        title={<span><GifOutlined></GifOutlined>{z.title}</span>}
                    >

                        {z.subMenu.map((s, sindex) => {
                            return <Menu.Item key={`sub-sub-menu-${sindex}`}
                                title={<span><GifOutlined></GifOutlined>{s}</span>}
                            ></Menu.Item>
                        })}
                    </Menu.SubMenu>
                })}
            </Menu.SubMenu>
        })}
    </Menu>
}
