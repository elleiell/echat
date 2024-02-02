import './Welcome.css'
import ChatImg from '../images/chatting.jpg'
import EChatLogo from '../images/chat-logo.png'

function Welcome() {
    return(
        <div className='container'>
            <div className='welcome'>
                <div className='logo'>
                    <img src={EChatLogo} alt='EChat Logo' />
                    <h1>E<span className='orange'>Chat</span></h1>
                </div>

                <div className='welcome-img'>
                    <img src={ChatImg} alt="Welcome to EChat" />
                </div>
                
                <h2 className='text-3xl font-bold underline text-center text-red-500'>Welcome to EChat!</h2>
                <p>Our chat app is the perfect wat to stay connected with friends.</p>
                
                <div className='signin-form'>
                    <form>
                        <button className='btn btn-lightorange'>Sign in</button>
                        <button className='btn btn-darkorange'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Welcome