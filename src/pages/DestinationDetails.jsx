import { useLoaderData } from "react-router-dom";


const DestinationDetails = () => {
    const destination = useLoaderData()
    console.log(destination);
    return (
        <div className="default-margin-top">
            <h3>Destination Details Page</h3>
        </div>
    );
};

export default DestinationDetails;