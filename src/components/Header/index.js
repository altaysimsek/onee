import { Layout, Menu, Dropdown, Divider, Avatar, Drawer, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item key='0'>
            <a href>Profile</a>
        </Menu.Item>
        <Menu.Item key='1'>
            <a href>Settings</a>
        </Menu.Item>
        <Menu.Item key='3'>Log out</Menu.Item>
    </Menu>
);

function Navbar() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <Header>
            <div className='logo'>
                <img src='./oneelogo.png' alt='ONEE Logo'></img>
            </div>
            <Button className='hamburger-button' type='primary' onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title='Basic Drawer'
                placement='right'
                closable={false}
                onClose={onClose}
                visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className='menu'>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className='ant-dropdown-link' href onClick={(e) => e.preventDefault()}>
                        GBP <DownOutlined />
                    </a>
                </Dropdown>
                <Divider type='vertical'></Divider>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a
                        className='ant-dropdown-link'
                        href
                        style={{ marginRight: '10px' }}
                        onClick={(e) => e.preventDefault()}>
                        Oscar Cooper <DownOutlined />
                    </a>
                </Dropdown>
                <Avatar size={46} icon={<UserOutlined />} />
            </div>
        </Header>
    );
}

export default Navbar;
