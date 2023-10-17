"use client"
import React from 'react';
import { useState } from 'react';
import { Col, Divider, Row } from 'antd';
import { DownOutlined, SearchOutlined, ShoppingCartOutlined, HeartOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import { Dropdown, message, Popconfirm, Button, Card} from 'antd';
import Image from 'next/image';
import Link from 'next/link';
/*redux configuration include*/
import { buy, course } from '@/app/Redux/feature/buyCourse-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/Redux/page';

const BestSellingApp: React.FC = () => {
    const [coursename, setCoursename] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const confirm = () =>
    new Promise((resolve) => {
        dispatch(buy(coursename));
      setTimeout(() => resolve(null), 1000);
    });
    
  return <div className='pdTopCategory'>
    <div className='pdTopCategory'></div>
    <center><h2>Best selling courses</h2></center>
    <div className='pdTopCategory'></div>
    <Row gutter={24} className='pdTop'>
        <Col className="gutter-row" span={4} md={4} sm={24} xs={24}></Col>
        <Col className="gutter-row" span={16} md={16} sm={24} xs={24}>
        <Row gutter={24}>
            <Popconfirm
            title="Confirm buy course"
            description="Are you sure want to confirm"
            onConfirm={confirm}
            onOpenChange={() => setCoursename('Machine Learning designed by ibrahim')
        }
            >
                <Col className="gutter-row pdBottom" span={5} md={5} sm={8} xs={12}>
                    <div className='centercard'>
                        <Card
                            hoverable
                            style={{ maxWidth: 150 }}
                            cover={<img alt="not found" src="/MachineLearning.png" />}

                        >
                        <div className='priceCategory'>
                            <div className='category'>
                                <p>DESIGN</p>
                            </div>
                            <div className='price'>
                                <p>$57</p>
                            </div>
                        </div>
                        <div>
                            <b>Machine Learning A-Z: Hands on python & R in Data</b>
                        </div>
                        <div className='pdTop'></div>
                            <Divider />
                            <div className='studentCategory pdTop'>
                            <div className='rating'>
                                <dd>&#9733; 5.0</dd>
                            </div>
                            <div className='totalstudent'>
                                <dd>265.7K students</dd>
                            </div>
                        </div>
                        </Card>
                    </div>
                </Col>
            </Popconfirm>
                <Col className="gutter-row pdBottom" span={5} md={5} sm={8} xs={12}>
                <div className='centercard'>
                            <Card
                                hoverable
                                style={{ maxWidth: 150 }}
                                cover={<img alt="not found" src="/MachineLearning.png" />}
                                
                            >
                            <div className='priceCategory'>
                                <div className='category'>
                                    <p>DESIGN</p>
                                </div>
                                <div className='price'>
                                    <p>$57</p>
                                </div>
                            </div>
                            <div>
                                <b>Machine Learning A-Z: Hands on python & R in Data</b>
                            </div>
                            <div className='pdTop'></div>
                                <Divider />
                                <div className='studentCategory pdTop'>
                                <div className='rating'>
                                    <dd>&#9733; 5.0</dd>
                                </div>
                                <div className='totalstudent'>
                                    <dd>265.7K students</dd>
                                </div>
                            </div>
                            </Card>
                        </div>
                </Col>
                <Col className="gutter-row pdBottom" span={5} md={5} sm={8} xs={12}>
                <div className='centercard'>
                            <Card
                                hoverable
                                style={{ maxWidth: 150 }}
                                cover={<img alt="not found" src="/MachineLearning.png" />}
                            >
                            <div className='priceCategory'>
                                <div className='category'>
                                    <p>DESIGN</p>
                                </div>
                                <div className='price'>
                                    <p>$57</p>
                                </div>
                            </div>
                            <div>
                                <b>Machine Learning A-Z: Hands on python & R in Data</b>
                            </div>
                            <div className='pdTop'></div>
                                <Divider />
                                <div className='studentCategory pdTop'>
                                <div className='rating'>
                                    <dd>&#9733; 5.0</dd>
                                </div>
                                <div className='totalstudent'>
                                    <dd>265.7K students</dd>
                                </div>
                            </div>
                            </Card>
                        </div>
                </Col>
                <Col className="gutter-row pdBottom" span={5} md={5} sm={8} xs={12} >
                <div className='centercard'>
                            <Card
                                hoverable
                                style={{ maxWidth: 150 }}
                                cover={<img alt="not found" src="/MachineLearning.png" />}
                            >
                            <div className='priceCategory'>
                                <div className='category'>
                                    <p>DESIGN</p>
                                </div>
                                <div className='price'>
                                    <p>$57</p>
                                </div>
                            </div>
                            <div>
                                <b>Machine Learning A-Z: Hands on python & R in Data</b>
                            </div>
                            <div className='pdTop'></div>
                                <Divider />
                                <div className='studentCategory pdTop'>
                                <div className='rating'>
                                    <dd>&#9733; 5.0</dd>
                                </div>
                                <div className='totalstudent'>
                                    <dd>265.7K students</dd>
                                </div>
                            </div>
                            </Card>
                        </div>
                </Col>
                <Col className="gutter-row pdBottom" span={4} md={4} sm={8} xs={12} >
                <div className='centercard'>
                            <Card
                                hoverable
                                style={{ maxWidth: 150 }}
                                cover={<img alt="not found" src="/MachineLearning.png" />}
                            >
                            <div className='priceCategory'>
                                <div className='category'>
                                    <p>DESIGN</p>
                                </div>
                                <div className='price'>
                                    <p>$57</p>
                                </div>
                            </div>
                            <div>
                                <b>Machine Learning A-Z: Hands on python & R in Data</b>
                            </div>
                            <div className='pdTop'></div>
                                <Divider />
                                <div className='studentCategory pdTop'>
                                <div className='rating'>
                                    <dd>&#9733; 5.0</dd>
                                </div>
                                <div className='totalstudent'>
                                    <dd>265.7K students</dd>
                                </div>
                            </div>
                            </Card>
                        </div>
                </Col>
            </Row>
        </Col>
        <Col className="gutter-row" span={4} md={4} sm={24} xs={24}></Col>
    </Row>
  </div>
}
export default BestSellingApp;