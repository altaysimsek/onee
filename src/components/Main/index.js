import { Layout, Row, Col, Divider, Image, Form, Radio, Input, Select, Checkbox } from 'antd';

const { Content } = Layout;
const { Option } = Select;
const prefixSelector = (
    <Form.Item name='prefix' noStyle>
        <Select placeholder='Country' style={{ width: 70 }}>
            <Option value='90'>🇹🇷</Option>
            <Option value='1'>🇨🇦</Option>
        </Select>
    </Form.Item>
);

function Main() {
    return (
        <Content
            style={{
                backgroundColor: 'white',
                padding: '2rem 6rem',
                boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
                margin: '2rem 4rem',
            }}>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <h1>
                        <span className='first-title'>Register & Refer</span>
                        <br></br>
                        <span className='secondary-title'>to Win</span>
                    </h1>
                    <p className='description-title'>
                        Are you a Travel Agent and fancy winning a pair of Apple AirPods Pro with a
                        12-month Spotify Premium subscription? Register for the chance to win and
                        refer other agents to do the same to increase your chances!
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
                        A major breakthrough in the facilitation of bookings between luxury rental
                        property managers and travel agents, ONEE Luxury Travel is a B2B
                        distribution platform that provides access to a vetted inventory and direct
                        engagement between the industry’s most well-respected professionals. With
                        ambitious technology and functionalities to streamline the process of
                        finding, booking and advertising luxury holiday rentals, ONEE is a global
                        platform facilitating the luxury market. Although ONEE’s online platform is
                        publicly accessible, all functionalities and most of the inventory is
                        available only to vetted travel agents once logged in to the closed and
                        secure site. As a primarily B2B platform, ONEE directs any organic traveler
                        enquiries to qualified travel agents in its existing network, as guests
                        cannot make reservations themselves.
                    </p>
                    <br />
                    <p>
                        If you are a Travel Agent, register on our platform to have a chance to win
                        one of six Apple AirPod Pros and a 12-month Spotify Premium subscription.
                        For every competition referral and subsequent registration on the platform -
                        your chances of winning will increase.
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
                        This competition is only valid for Travel Agent’s that have registered with
                        ONEE between xx/xx/xx – xx/xx/xx
                    </li>
                    <li>
                        You must be a ONEE approved and verified Travel Agent to benefit from this
                        offer.
                    </li>
                    <li>Please note that there is a maximum of one prize allotted per person.</li>
                    <li>
                        ONEE Luxury Travel reserves the right to substitute any prizes with a prize
                        of equivalent or higher value in the event of circumstances outside of its
                        control. The prize for the winner is non-exchangeable, non-transferable no
                        cash alternative to the prize is offered.
                    </li>
                    <li>
                        ONEE Luxury Travel reserves the right to hold, void, cancel, suspend or
                        amend the prize draw where it becomes necessary to do so.
                    </li>
                </ul>
            </Row>
            <Divider />
            <h2 style={{ textAlign: 'center', fontSize: '42px' }}>Invite Fellows to Register</h2>
            <Form>
                <Row className='form-container'>
                    <Col span={24} lg={12} className='form-box'>
                        <Row className='input-margin'>
                            <Col span={24}>
                                <Form.Item
                                    name='radio-group'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select one.',
                                        },
                                    ]}>
                                    <Radio.Group>
                                        <Radio value='1'>Property Manager</Radio>
                                        <Radio value='2'>Travel Agent</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='input-margin' gutter={16}>
                            <Col span={24} sm={6} className='gutter-row'>
                                <Form.Item
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select your title.',
                                        },
                                    ]}
                                    name='select'>
                                    <Select placeholder='Title'>
                                        <Option value='mr'>Mr</Option>
                                        <Option value='mrs'>Mrs</Option>
                                        <Option value='ms'>Ms</Option>
                                        <Option value='ms'>Miss</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24} sm={9} className='gutter-row'>
                                <Form.Item
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ]}
                                    name='username'>
                                    <Input placeholder='Firstname' />
                                </Form.Item>
                            </Col>
                            <Col span={24} sm={9} className='gutter-row'>
                                <Form.Item
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your surname',
                                        },
                                    ]}
                                    name='surname'>
                                    <Input placeholder='Surname' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='input-margin'>
                            <Col span={24}>
                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number!',
                                        },
                                    ]}
                                    name='phone'>
                                    <Input
                                        placeholder='Phone Number'
                                        addonBefore={prefixSelector}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='input-margin'>
                            <Col span={24}>
                                <Form.Item
                                    name='email'
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}>
                                    <Input placeholder='E-mail' />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} span={0}>
                        <Divider type='vertical' style={{ height: '100%' }}></Divider>
                    </Col>
                    <Col lg={0} span={24}>
                        <Divider style={{ height: '100%' }}></Divider>
                    </Col>
                    <Col className='form-box' span={24} lg={11}>
                        <Row>
                            <Col style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '18px' }}>
                                    Add a message and give your friends a chance to win this gift.
                                    In order to earn gifts, they must also register to ONEE.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item name='suggestion'>
                                    <Input.TextArea style={{ height: '175px' }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please check this button.',
                                        },
                                    ]}
                                    name='remember'
                                    valuePropName='checked'>
                                    <Checkbox>
                                        I give consent for the information I have provided above to
                                        be used with reference to this competition referral.
                                    </Checkbox>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <button type='submit' className='refer-btn'>
                                    Invite
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Content>
    );
}

export default Main;
