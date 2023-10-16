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
    
    <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }} className='headerComp'>
        <Col className="gutter-row" span={5}>
            
        </Col>
        <Col className='gutter-row' span={6} md={6} sm={24} xs={24}>
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
        <Col className='gutter-row' span={13} md={13} sm={24} xs={24}>
            <Image
                src="/Images.png"
                width={657}
                height={340}
                alt="Logo"
                priority={true}
                quality={75}
                layout='responsive'
            />
        </Col>
    </Row>
  </div>
}
export default Header;