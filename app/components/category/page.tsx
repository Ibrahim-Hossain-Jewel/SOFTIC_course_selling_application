"use client"
import React from 'react';
import { useState } from 'react';
import { Col, Divider, Row } from 'antd';
import { DownOutlined, SearchOutlined, ShoppingCartOutlined, HeartOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import { Dropdown, message, Space , Button} from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Category: React.FC = () => {

  return <div className='pdTop'>
    <div className='pdTopCategory'></div>
    <div className='pdTopCategory'></div>
    <center><h1>Browse Top Category</h1></center>
    
    <div className='pdTopCategory'></div>
    <Row gutter={20} className='pdTop'>
        <Col className="gutter-row" span={4} md={4} sm={24} xs={24}>
            
        </Col>
        <Col className="gutter-row" span={16} md={16} sm={24} xs={24}>
            <Row gutter={15}>
                    <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                        <div className='componentSection'>
                            <div className='imageSection'>
                                <Image
                                    src="/Cpu.png"
                                    width={320}
                                    height={104}
                                    alt="Logo"
                                    priority={true}
                                    quality={75}
                                    layout='responsive'
                                />
                            </div>
                            <div className='dataSection'>
                                <p>Label</p>
                                <dd>63,476 Courses</dd>
                            </div>
                        </div>
                    </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                <div className='componentSection business'>
                        <div className='imageSection'>
                            <Image
                                src="/Frame 145.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                // priority={true}
                                quality={75}
                                // layout='responsive'
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Business</p>
                            <dd>52,822 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24} >
                    <div className='componentSection itsoftware'>
                        <div className='imageSection'>
                            <Image
                                src="/card.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Finance & Accounting</p>
                            <dd>33,848 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24} >
                <div className='componentSection itsoftware'>
                        <div className='imageSection'>
                            <Image
                                src="/itservice.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>IT & Software</p>
                            <dd>33,848 Courses</dd>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={15}>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                    <div className='componentSection personaldevelopment'>
                        <div className='imageSection'>
                            <Image
                                src="/personaldevelopment.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                priority={true}
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Personal Developent</p>
                            <dd>20,126 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                <div className='componentSection officePrductivity'>
                        <div className='imageSection'>
                            <Image
                                src="/officeproductivity.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Office Productivity</p>
                            <dd>13,932 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                    <div className='componentSection business'>
                        <div className='imageSection'>
                            <Image
                                src="/meeting.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Meeting</p>
                            <dd>12,068 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                <div className='componentSection officePrductivity'>
                        <div className='imageSection'>
                            <Image
                                src="/camera.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Photography & Video</p>
                            <dd>6,196 Courses</dd>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={15}>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                    <div className='componentSection itsoftware'>
                        <div className='imageSection'>
                            <Image
                                src="/lifestyle.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                priority={true}
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Lifestyle</p>
                            <dd>2,734 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                <div className='componentSection itsoftware'>
                        <div className='imageSection'>
                            <Image
                                src="/design.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                // priority={true}
                                quality={75}
                                // layout='responsive'
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Design</p>
                            <dd>26,000 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                    <div className='componentSection business'>
                        <div className='imageSection'>
                            <Image
                                src="/FirstAidKit.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Health & Fitness</p>
                            <dd>1,678 Courses</dd>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row pdBottom" span={6} md={6} sm={24} xs={24}>
                <div className='componentSection itsoftware'>
                        <div className='imageSection'>
                            <Image
                                src="/music.png"
                                width={32}
                                height={32}
                                alt="Logo"
                                quality={75}
                            />
                        </div>
                        <div className='dataSection'>
                            <p>Music</p>
                            <dd>959 Courses</dd>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col className="gutter-row" span={4} md={4} sm={24} xs={24}>
            
        </Col>
    </Row>
    <div className='pdTop'>
    <center><p>We have more category & subcategory. <Link href="#" style={{color: "#FF835C"}}>Browse All &#8594;</Link></p></center>
    </div>
    </div>

}
export default Category;