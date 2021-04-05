import { Layout, Row, Col, Divider, Image, Form, Radio, Input } from 'antd';
import Navbar from './components/Navbar';
import {
    PhoneOutlined,
    LinkedinFilled,
    InstagramFilled,
    FacebookFilled,
    TwitterSquareFilled,
    YoutubeFilled,
} from '@ant-design/icons';
const { Content, Footer } = Layout;

function App() {
    return (
        <Layout hasSider='true'>
            <Navbar></Navbar>
            <Content
                style={{
                    backgroundColor: 'white',
                    padding: '2rem 6rem',
                    boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
                    margin: '3rem 6rem',
                }}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <h1>
                            <span className='first-title'>Register & Refer</span>
                            <br></br>
                            <span className='secondary-title'>to Win</span>
                        </h1>
                        <p className='description-title'>
                            Are you a Travel Agent and fancy winning a pair of Apple AirPods Pro
                            with a 12-month Spotify Premium subscription? Register for the chance to
                            win and refer other agents to do the same to increase your chances!
                        </p>
                        <button className='refer-btn'>Refer Now</button>
                    </Col>
                    <Col className='image-container' xs={0} sm={0} md={0} span={12}>
                        <Image
                            src='./image.png'
                            width='100%'
                            preview={false}
                            alt='Welcome for all of you'></Image>
                    </Col>
                </Row>
                <Row className='description-container'>
                    <Col style={{ paddingRight: '2rem' }} xs={24} sm={24} md={24} lg={18}>
                        <p>
                            A major breakthrough in the facilitation of bookings between luxury
                            rental property managers and travel agents, ONEE Luxury Travel is a B2B
                            distribution platform that provides access to a vetted inventory and
                            direct engagement between the industry’s most well-respected
                            professionals. With ambitious technology and functionalities to
                            streamline the process of finding, booking and advertising luxury
                            holiday rentals, ONEE is a global platform facilitating the luxury
                            market. Although ONEE’s online platform is publicly accessible, all
                            functionalities and most of the inventory is available only to vetted
                            travel agents once logged in to the closed and secure site. As a
                            primarily B2B platform, ONEE directs any organic traveler enquiries to
                            qualified travel agents in its existing network, as guests cannot make
                            reservations themselves.
                        </p>
                        <br />
                        <p>
                            If you are a Travel Agent, register on our platform to have a chance to
                            win one of six Apple AirPod Pros and a 12-month Spotify Premium
                            subscription. For every competition referral and subsequent registration
                            on the platform - your chances of winning will increase.
                        </p>
                        <br />
                        <p>Good luck!</p>
                    </Col>
                    <Col span={6}>
                        <Image
                            preview={false}
                            width='100%'
                            src='./airpods.png'
                            alt='Airpods and spotify'></Image>
                    </Col>
                </Row>
                <Divider />
                <Row className='term-container'>
                    <h2>Terms & Condition</h2>
                    <ul>
                        <li>
                            This competition is only valid for Travel Agent’s that have registered
                            with ONEE between xx/xx/xx – xx/xx/xx
                        </li>
                        <li>
                            You must be a ONEE approved and verified Travel Agent to benefit from
                            this offer.
                        </li>
                        <li>
                            Please note that there is a maximum of one prize allotted per person.
                        </li>
                        <li>
                            ONEE Luxury Travel reserves the right to substitute any prizes with a
                            prize of equivalent or higher value in the event of circumstances
                            outside of its control. The prize for the winner is non-exchangeable,
                            non-transferable no cash alternative to the prize is offered.
                        </li>
                        <li>
                            ONEE Luxury Travel reserves the right to hold, void, cancel, suspend or
                            amend the prize draw where it becomes necessary to do so.
                        </li>
                    </ul>
                </Row>
                <Divider />
                <h2 style={{ textAlign: 'center', fontSize: '42px' }}>
                    Invite Fellows to Register
                </h2>
                <Row className='form-container'>
                    <Form></Form>
                </Row>
            </Content>
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
                                LONDON <br /> ONEE Travel Services Ltd <br /> Newton House <br />{' '}
                                118 Piccadilly <br /> Mayfair <br /> W1J 7NW
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
        </Layout>
    );
}

export default App;
