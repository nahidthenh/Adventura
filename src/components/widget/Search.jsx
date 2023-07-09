

const Search = () => {
    return (
        <div className="widget-wrap">
            <h3 className="widget-title">Search</h3>
            <div className="widget-body">
                <form className="">
                    <div className="search-form position-relative">
                        <input type="search" name="search-field" placeholder="Search" required />
                        <button type="submit"><i className="ri-search-line"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;