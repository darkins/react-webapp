
import { Link } from 'react-router-dom';
import './App.less';
import { Layout, BackTop } from 'antd';
import { UpCircleFilled } from '@ant-design/icons';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ReliefsPage from './pages/Reliefs';
import HurricaneBrian from './pages/Reliefs/Active/HurricaneBrian';
import ReportsPage from './pages/Reports';
import SettingsPage from './pages/Settings/index_old';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import { Header } from './components/Header';
import { ROUTE } from './constants/route';

const { Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <BrowserRouter>      
        <Header />
        <div className="content-container">
          <Switch>          
            <Route exact component={HomePage} path={ROUTE.HOME} />
            <Route exact component={ReliefsPage} path={ROUTE.RELIEFS} />
            <Route exact component={HurricaneBrian} path={ROUTE.BRIAN} />
            <Route exact component={ReportsPage} path={ROUTE.REPORTS} />
            <Route exact component={SettingsPage} path={ROUTE.SETTINGS} />
            <Route exact component={ProfilePage} path={ROUTE.PROFILE} />
            <Route exact component={LoginPage} path={ROUTE.LOGIN} />
            <Redirect to={ROUTE.HOME} />
          </Switch>          
          <BackTop>
            <div className="up"><UpCircleFilled /></div>
          </BackTop>
        </div>
        <Footer style={{ textAlign: 'center' }}><small>Transparency Engine v2.0 &copy;2021. Powered by <Link to={ROUTE.HOME}>Aid:Tech</Link> </small></Footer>    
      </BrowserRouter>
    </Layout>
  );
}

export default App;
