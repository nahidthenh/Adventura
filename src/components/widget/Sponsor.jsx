import adds from '../../assets/images/addds.png'

const Sponsor = () => {
    return (
        <div className="widget-wrap">
            <h3 className="widget-title">Get Special Discount</h3>
            <div className="widget-body">
                <img src={adds} alt="ads" className='img-fluid rounded-4' />
            </div>
        </div>
    );
};

export default Sponsor;