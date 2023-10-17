"use client"
import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'antd';
import { DownOutlined, SearchOutlined, ShoppingCartOutlined, HeartOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import { Dropdown, message, Space , Button} from 'antd';
import Image from 'next/image';

const Header: React.FC = () => {

  return <div className='pdTop'>
    
    <Row gutter={24} className='headerComp'>
        <Col className="gutter-row" span={4}>
            
        </Col>
        <Col className='gutter-row' span={8} md={8} sm={24} xs={24}>
            <div className='headerCenterText'>
                <h2>Learn with expart anytime anywhere</h2>
                <p className='pdTop'>
                    Our mision is to help peple to find the best course 
                    online and learn with expart anytime, anywhere.
                </p>
                <p className='pdTop'>
                    <Button size="middle" className='signin'>Create Account</Button>
                </p>
                <p className='pdTop'></p>
            </div>
        </Col>
        <Col className='gutter-row' span={12} md={12} sm={24} xs={24}>
                <Image
                    src="/Images.png"
                    width={900}
                    height={340}
                    alt="Logo"
                    quality={75}
                    layout='responsive'
                />
        </Col>
    </Row>
  </div>
}
export default Header;