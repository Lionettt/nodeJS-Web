import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Affix, Layout, Row, Col, Menu } from 'antd'
import { nav } from '../../router/index'

export default function Header() {
    const { pathname } = useLocation()
    const activeIndex = nav.findIndex((item) => {
        return pathname === item.to
    })
    return (
        <Affix offsetTop={0}>
            <Layout.Header id="header">
                <div className="wrap">
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <h1 className="logo">
                                <Link to="/">lionet</Link>
                            </h1>
                        </Col>
                        <Col xs={18} sm={20} md={22}>
                            <Menu
                                mode="horizontal"
                                theme="dark"
                                SelectedKeys={[activeIndex + ""]}
                            >{nav.map((item, index) => {
                                return <Menu.Item key={index}>
                                    <Link to={item.to}>{item.txt}</Link>
                                </Menu.Item>
                            })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>
    )
}
