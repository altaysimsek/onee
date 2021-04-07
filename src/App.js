import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Bottombar from './components/Bottombar';

function App() {
    return (
        <Layout hasSider='true'>
            <Navbar />
            <Main />
            <Bottombar />
        </Layout>
    );
}

export default App;
