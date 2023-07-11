import { useLoaderData } from "react-router-dom";

const TourDetails = () => {
    const tours = useLoaderData()
    console.log(tours);
    return (
        <div className="default-margin-top">
            <div className="tours-details-baner py-5 bg-danger">
                <h3>Hello</h3>
            </div>
            <h3>{tours.place}</h3>
        </div>
    );
};

export default TourDetails;