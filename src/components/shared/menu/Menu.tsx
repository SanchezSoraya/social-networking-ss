import { TeamOutlined, WechatOutlined } from '@ant-design/icons'

import { Menu as MenuAntd, type MenuProps } from 'antd'
import React from 'react'

type MenuItem = Required<MenuProps>['items'][number]

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'

): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

export const Menu = () => {
  const items: MenuProps['items'] = [
    getItem('usuarios', '1', <TeamOutlined />),
    getItem('historias', '2', <WechatOutlined />)
  ]

  return (<MenuAntd defaultSelectedKeys={['1']}  items={items} />)
}
