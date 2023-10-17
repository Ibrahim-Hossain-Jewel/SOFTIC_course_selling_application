"use client"
import React from 'react';
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './page.module.css';
import { Col, Divider, Row } from 'antd';
const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Courses',
    key: 'coursekey',
    // icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'About',
    key: 'aboutkey'
  },
  {
    label: 'Contact',
    key: 'contactkey'
  },
  {
    label: 'Become an Instructor',
    key: 'instructorkey'
  }
];
const Menubar: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e.domEvent.target);
    setCurrent(e.key);
  };
  return <div>
        <style jsx>{`
        // li.ant-menu-overflow-item.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child {
        //   background: red !important;
        // }
        // :where(.css-dev-only-do-not-override-amq5gd).ant-menu-dark .ant-menu-item-selected, :where(.css-dev-only-do-not-override-amq5gd).ant-menu-dark>.ant-menu .ant-menu-item-selected{
        //   background: red !important;
        // }
        // .man{
        //   background: green;
        // }
      `}</style>
        <Menu selectedKeys={[current]} onClick={onClick} mode="horizontal" items={items} theme='dark' className='man'/>
  </div>
};

export default Menubar;