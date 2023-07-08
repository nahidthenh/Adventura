import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../pages/index'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;