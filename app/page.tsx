"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Col, Divider, Row } from 'antd';
import Menubar from './components/menubar/topmenu/page';
import { Dropdown, message, Space } from 'antd';
import {  DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import MoneyDropDown from './components/menubar/money/page';
import LanguageDropDown from './components/menubar/language/page';
import SearchMenu from './components/menubar/searchmenu/page';
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const items1: MenuProps['items'] = [
  {
    label: 'English',
    key: 'English',
  },
  {
    label: 'Bangla',
    key: 'Bangla',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Row justify="space-between">
        <Col className="gutter-row" span={14}>
          <Menubar />
        </Col>
        <Col className="gutter-row" span={10} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', background: '#001529', color: 'rgba(255, 255, 255, 0.65)', paddingRight: "12px", gap: "30px"}}>
          <div>
            <MoneyDropDown />
          </div>
          <div>
            <LanguageDropDown />
          </div>
        </Col>
      </Row>
      <div>
        <SearchMenu />
      </div>
    </main>
  )
}
