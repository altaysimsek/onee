import { Layout, Row, Col, Divider } from 'antd';
import Navbar from './components/Navbar';
const { Content } = Layout;

function App() {
    return (
        <Layout hasSider='true'>
            <Navbar></Navbar>
            <Content
                style={{
                    margin: '50px',
                    backgroundColor: 'white',
                    padding: '2rem',
                    boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
                }}>
                <Row>
                    <Col span={14}>
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
                    <Col span={10}>
                        <img src='./image.png' alt='Welcomer image for all of you'></img>
                    </Col>
                </Row>
                <Row className='description-container'>
                    <Col style={{ marginRight: 'auto' }} span={16}>
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
                        <img src='./airpods.png' alt='W'></img>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <h2>Terms & Condition</h2>
                </Row>
            </Content>
        </Layout>
    );
}

export default App;
