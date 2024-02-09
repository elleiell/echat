

const Signup = () => {

    return (
        <div className="container signup">
            <h1>Register</h1>
            <div className="signup-form">
                <form>
                    <input type="email" className="form-input px-4 py-3 rounded-full" />
                    <input type="password" className="form-input px-4 py-3 rounded-full" />
                </form>
            </div>
        </div>
    );
}

export default Signup