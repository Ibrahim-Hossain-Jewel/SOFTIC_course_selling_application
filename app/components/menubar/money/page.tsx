"use client"
import React from 'react';
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
  
  const items: MenuProps['items'] = [
    {
      label: 'USD',
      key: 'USD',
    },
    {
      label: 'BDT',
      key: 'BDT',
    },
  ];
  
const MoneyDropDown: React.FC = () => {
  const [current, setCurrent] = useState('USD');
  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(` Selected ${key}`);
    setCurrent(key)
  };
return <div>
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className='dropdownfont'>
                  {current}
                  <DownOutlined className='dropdown' />
                </Space>
              </a>
            </Dropdown>
  </div>
};

export default MoneyDropDown;