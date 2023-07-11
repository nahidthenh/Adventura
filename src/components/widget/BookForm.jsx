
const BookForm = () => {
    return (
        <div className="widget-wrap">
            <h3 className="widget-title">Book This Tour.</h3>
            <div className="widget-body">
                <form className="book-form">
                    <input className="auth-input mb-4" type="text" name="name" placeholder="Your Name" required />
                    <input className="auth-input mb-4" type="email" name="email" placeholder="Your Email" required />
                    <input className="auth-input mb-4" type="phone" name="phone" placeholder="Phone" required />
                    <input className="auth-input mb-4" type="text" name="number" placeholder="Tckets" required />
                    <input className="auth-input mb-4" type="date" name="date" placeholder="Date" required />
                    <textarea name="message" className="auth-input mb-4" placeholder="Message" id="" cols="30" rows="10" required></textarea>
                    <button disabled type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default BookForm;