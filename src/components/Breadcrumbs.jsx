import PropTypes from 'prop-types';

const Breadcrumbs = ({ title, description }) => {
    return (
        <div className="text-center breadcrumbs-main-bg">
            <div className="breadcrumbs-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
// propTypes Validation 
Breadcrumbs.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Breadcrumbs;
