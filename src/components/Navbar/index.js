import { Layout, Menu, Dropdown, Divider, Avatar, Drawer } from 'antd';
import { DownOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Header } = Layout;

const menuUser = (
    <Menu>
        <Menu.Item key='0'>Profile</Menu.Item>
        <Menu.Item key='1'>Settings</Menu.Item>
        <Menu.Item key='2'>Log out</Menu.Item>
    </Menu>
);
const menuCurrency = (
    <Menu>
        <Menu.Item key='0'>GBP</Menu.Item>
        <Menu.Item key='1'>EUR</Menu.Item>
        <Menu.Item key='2'>TRY</Menu.Item>
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

            <MenuOutlined className='hamburger-button' onClick={showDrawer}></MenuOutlined>

            <Drawer
                title='ONEE TRAVEL'
                placement='left'
                closable={true}
                onClose={onClose}
                visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className='menu'>
                <Dropdown overlay={menuCurrency} trigger={['click']}>
                    <a className='ant-dropdown-link' href onClick={(e) => e.preventDefault()}>
                        GBP <DownOutlined />
                    </a>
                </Dropdown>
                <Divider type='vertical'></Divider>
                <Dropdown overlay={menuUser} trigger={['click']}>
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
