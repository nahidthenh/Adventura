
const BookForm = () => {
    return (
        <div className="widget-wrap">
            <h3 className="widget-title">Book This Tour.</h3>
            <div className="widget-body">
                <ul className="category-list">
                    <li className="custom-check-box">
                        <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                                <input type="checkbox" className="material-control-input" />
                                <span className="material-control-indicator"></span>
                                <span className="description">Adventure Tours</span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BookForm;