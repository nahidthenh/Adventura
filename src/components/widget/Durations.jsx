

const Durations = () => {
    return (
        <div className="widget-wrap">
            <h3 className="widget-title">Durations</h3>
            <div className="widget-body">
                <ul className="category-list">
                    <li className="custom-check-box">
                        <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                                <input type="checkbox" className="material-control-input" />
                                <span className="material-control-indicator"></span>
                                <span className="description">0 - 24 hours</span>
                            </label>
                        </div>
                    </li>

                    <li className="custom-check-box">
                        <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                                <input type="checkbox" className="material-control-input" />
                                <span className="material-control-indicator"></span>
                                <span className="description">1 - 2 days</span>
                            </label>
                        </div>
                    </li>
                    <li className="custom-check-box">
                        <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                                <input type="checkbox" className="material-control-input" />
                                <span className="material-control-indicator"></span>
                                <span className="description">2 - 3 days</span>
                            </label>
                        </div>
                    </li>
                    <li className="custom-check-box">
                        <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                                <input type="checkbox" className="material-control-input" />
                                <span className="material-control-indicator"></span>
                                <span className="description">3 - 4 days</span>
                            </label>
                        </div>
                    </li>
                    <li className="custom-check-box">
                        <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                                <input type="checkbox" className="material-control-input" />
                                <span className="material-control-indicator"></span>
                                <span className="description">4 - 5 days</span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Durations;