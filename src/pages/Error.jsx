import { Link } from 'react-router-dom';
import { Header, Footer } from '../pages/index'
import ScrollToTop from '../components/others/ScrollToTop';

const Error = () => {
    return (
        <>
            <Header></Header>
            <div className="default-margin-top">
                <div className="error-wrap">
                    <h1>404</h1>
                    <h2>
                        page is not found. <br />
                        the page is doesnt exist or deleted.
                    </h2>
                    <Link to='/'>GO TO HOME</Link>
                </div>
            </div>
            <Footer></Footer>
            <ScrollToTop />
        </>
    );
};

export default Error;