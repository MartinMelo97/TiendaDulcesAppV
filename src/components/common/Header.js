import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedKey: null,
            items: [
                {
                    to: "/",
                    key: "home",
                    name: "Home"
                },
                {
                    to: "/login",
                    key: "login",
                    name: "Login"
                }
            ]
        }
    }

    render() {
        const { Header } = Layout
        const { Item } = Menu
        return (
            <Header className="header">
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                style={{ lineHeight: "64px" }}
                >
                    {this.state.items.map((item, index)=>(
                        <Item key={item.key}>
                            <NavLink to={item.to}>
                                {item.name}
                            </NavLink>
                        </Item>
                    ))}
                </Menu>
            </Header>
        )
    }

}

export default HeaderComponent