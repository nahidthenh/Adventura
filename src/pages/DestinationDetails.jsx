
import { useLoaderData } from "react-router-dom";


const DestinationDetails = () => {
    const destinations = useLoaderData()
    console.log(destinations);
    return (
        <div className="default-margin-top">
            <h3>Destination Details Page{destinations.length}</h3>
            {
                destinations.map(data => <p key='data.id'>{data.place}</p>)
            }
        </div>
    );
};

export default DestinationDetails;