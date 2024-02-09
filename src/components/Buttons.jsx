
const Buttons = ({ to }) => {

    return (
        <div className="container">           
                <a className="c-btn" 
                    href={(`/${to}`)}>
                    <button className="text-white px-28 md:px-24 py-5 text-xl font-semibold capitalize">
                        {to === '' ? "welcome" : to}
                    </button>                    
                </a> 
        </div>
    );
}

export default Buttons