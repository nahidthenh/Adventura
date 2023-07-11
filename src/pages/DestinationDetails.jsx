import { useLoaderData } from "react-router-dom";
const DestinationDetails = () => {
    const destinations = useLoaderData();
    return (
        <div className="default-margin-top">
            <h3>{destinations.place}</h3>
        </div>
    );
};

export default DestinationDetails;