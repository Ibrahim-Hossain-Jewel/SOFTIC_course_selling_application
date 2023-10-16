"use client"
import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'antd';
import { DownOutlined, SearchOutlined, ShoppingCartOutlined, HeartOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import { Dropdown, message, Space , Button} from 'antd';
import Image from 'next/image';


const items: MenuProps['items'] = [
    {
      label: 'Browse',
      key: 'Browse',
    },
  ];
const SearchMenu: React.FC = () => {
  const [current, setCurrent] = useState('Browse');
  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(` Selected ${key}`);
    setCurrent(key);
  };
  return <div className='maindata'>
        <style jsx>{`
        
      `}</style>
        <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }} className='pdTop'>
            <Col className="gutter-row one" span={4} md={4} xs={8} sm={12}>
            <Image
                src="/LOGO.png"
                width={100}
                height={50}
                alt="Logo"
                priority={true}
            />
            </Col>
            <Col className="gutter-row two" span={8} md={10} sm={12} xs={16} style={{display: 'flex', justifyContent: 'start', alignItems: 'center', paddingRight: "12px", gap: "10px"}}>
                <div style={{border: "1px solid #d9d9d9", padding: "7px 10px"}}>
                    <Dropdown menu={{ items, onClick }} >
                        <a onClick={(e) => e.preventDefault()} style={{color: "#717373"}}>
                            <Space>
                            {current}
                            <DownOutlined width={16} height={16} style={{paddingLeft: "30px"}}/>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div>
                    <Input size="middle" placeholder="What do you want learn..." prefix={<SearchOutlined />} style={{borderRadius: "0px", color: "#717373", paddingRight: "30px"}}/>
                </div>
            </Col>
            
            <Col className="gutter-row three" span={12} md={10} sm={24} xs={24}>
              <Space wrap>
                <Space>
                  <BellOutlined width={24} height={24}/>
                  <HeartOutlined  width={24} height={24} />
                  <ShoppingCartOutlined  width={24} height={24} />
                </Space>
                <Button size='middle' className='createbutton'>Create Account</Button>
                <Button size="middle" className='signin'>Sign In</Button>
              </Space>
            </Col>
        </Row>
  </div>
};

export default SearchMenu;