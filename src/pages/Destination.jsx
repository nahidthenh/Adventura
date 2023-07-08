import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
// import Breadcrumbs from "../components/Breadcrumbs";


const Destination = () => {

    const destinations = useLoaderData()
    console.log(destinations);

    return (
        <div className="default-margin-top">
            {destinations.length}
            {/* <Breadcrumbs></Breadcrumbs> */}
            <Container>
                {
                    destinations.map(data => (
                        <div key={data.id}>
                            <img src={data.image} alt="" />
                            <li >{data.place}</li>
                        </div>
                    ))
                }
            </Container>
        </div>
    );
};

export default Destination;