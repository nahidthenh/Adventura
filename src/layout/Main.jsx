import { Outlet } from 'react-router-dom';
import { Header } from '../pages/index'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;