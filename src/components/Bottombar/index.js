import { Layout, Row, Col, Divider } from 'antd';

import {
    PhoneOutlined,
    LinkedinFilled,
    InstagramFilled,
    FacebookFilled,
    TwitterSquareFilled,
    YoutubeFilled,
} from '@ant-design/icons';
const { Footer } = Layout;

function Bottombar() {
    return (
        <Footer>
            <Row className='upper-footer' gutter={16}>
                <Col className='gutter-row' sm={6} span={24}>
                    <p>COMPANY</p>
                    <ul className='list-footer'>
                        <li>
                            <a href='/about'>About Us</a>
                        </li>
                        <li>
                            <a href='/agreement/privacy-policy'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='/agreement/user-terms-conditions'>
                                ONEE Luxury Travel Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href='/travel-guide'>Travel Guide</a>
                        </li>
                        <li>
                            <a href='/we-in-press'>ONEE in the Press</a>
                        </li>
                        <li>
                            <a href='/competition'>Competition</a>
                        </li>
                    </ul>
                </Col>
                <Col className='gutter-row' sm={6} span={24}>
                    <p>HOW TO WORK WITH US</p>
                    <ul className='list-footer'>
                        <li>
                            <a href='/property-managers'>Vacation Rental Property Managers</a>
                        </li>
                        <li>
                            <a href='/travel-agents'>Travel Agents</a>
                        </li>
                        <li>
                            <a href='/guests'>Guests</a>
                        </li>
                        <li>
                            <a href='/service-partners'>Service Partners</a>
                        </li>
                    </ul>
                </Col>
                <Col className='gutter-row' sm={6} span={24}>
                    <p>GENERAL INQUIRIES</p>
                    <ul className='list-footer'>
                        <li>
                            <a href='/working-at-onee'>Working at ONEE</a>
                        </li>
                        <li>
                            <a href='/send-us-an-email'>Send Us an Email</a>
                        </li>
                        <li>
                            <a href='/faq/default'>FAQ</a>
                        </li>
                    </ul>
                </Col>
                <Col className='gutter-row' sm={6} span={24}>
                    <p>CONTACT US</p>
                    <ul className='list-footer'>
                        <li>
                            LONDON <br /> ONEE Travel Services Ltd <br /> Newton House <br /> 118
                            Piccadilly <br /> Mayfair <br /> W1J 7NW
                        </li>
                        <li>
                            <PhoneOutlined /> LONDON{' '}
                            <a href='tel:+44 20 8142 4801'>+44 20 8142 4801</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Divider></Divider>
            <Row>
                <Col sm={18} span={24}>
                    © 2021 All Rights Reserved to ONEE Luxury Travel.
                </Col>
                <Col sm={6} span={24}>
                    <ul className='social-links'>
                        <li>
                            <LinkedinFilled style={{ fontSize: '24px' }} />
                        </li>
                        <li>
                            <InstagramFilled style={{ fontSize: '24px' }} />
                        </li>
                        <li>
                            <FacebookFilled style={{ fontSize: '24px' }} />
                        </li>
                        <li>
                            <TwitterSquareFilled style={{ fontSize: '24px' }} />
                        </li>
                        <li>
                            <YoutubeFilled style={{ fontSize: '24px' }} />
                        </li>
                    </ul>
                </Col>
            </Row>
        </Footer>
    );
}

export default Bottombar;
