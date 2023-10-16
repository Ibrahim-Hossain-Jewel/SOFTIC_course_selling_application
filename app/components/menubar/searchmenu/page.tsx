"use client"
import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import { Dropdown, message, Space } from 'antd';
import Image from 'next/image';

const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Selected ${key}`);
  };
const items: MenuProps['items'] = [
    {
      label: 'Browse',
      key: 'Browse',
    },
  ];
const SearchMenu: React.FC = () => {
  return <div className='maindata'>
        <style jsx>{`
        
      `}</style>
        <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
            <Col className="gutter-row one" span={5}>
            <Image
                src="/brand.PNG"
                width={100}
                height={50}
                alt="Logo"
                priority={true}
            />
            </Col>
            <Col className="gutter-row two" span={8} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: "12px", gap: "10px"}}>
                <div style={{border: "1px solid #d9d9d9", padding: "10px"}}>
                    <Dropdown menu={{ items, onClick }} >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                            Browse
                            <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div>
                    <Input size="large" placeholder="What do you want learn..." prefix={<SearchOutlined />} style={{borderRadius: "0px"}}/>
                </div>
            </Col>
            
            <Col className="gutter-row three" span={11}>
                <div>big are</div>
            </Col>
        </Row>
  </div>
};

export default SearchMenu;