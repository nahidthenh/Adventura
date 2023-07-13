/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="default-margin-top container">
            <div className="row">
                <Spinner className="mx-auto my-5" animation="border" role="status">
                    <span className="visually-hidden text-danger">Please Wait Loading...</span>
                </Spinner>
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;