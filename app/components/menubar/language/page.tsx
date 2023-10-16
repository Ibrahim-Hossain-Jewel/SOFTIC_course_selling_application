"use client"
import React from 'react';
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';  
  const items: MenuProps['items'] = [
    {
      label: 'English',
      key: 'English',
    },
    {
      label: 'Bangla',
      key: 'Bangla',
    },
  ];
  
const LanguageDropDown: React.FC = () => {
  const [current, setCurrent] = useState('English');
  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(` Selected ${key}`);
    setCurrent(key);
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

export default LanguageDropDown;