import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChatImg from '../images/chatting.jpg'
import EChatLogo from '../images/chat-logo.png'


function Welcome() {
    const chatTitle = "EChat App";
    const userIcon = <FontAwesomeIcon icon="fa-regular fa-user" />
    return(
        <div className='bg-peach'>
            <div className='container mx-auto h-screen w-full flex flex-wrap justify-center p-0 m-0'>
                <div className='flex flex-wrap justify-center justify-items-center items-center aligh-items self-center pt-6'>
                    <div className='shrink-0'>
                        <img className='w-16 md:w-13 h-auto' src={EChatLogo} alt={chatTitle} />
                    </div>
                    <h1 className='text-6xl font-bold text-black antialiased font-sans'>e<span className='text-red-500'>Chat</span></h1>
                </div>

                <div className='px-4 md:px-1'>
                    <img src={ChatImg} alt={chatTitle} className='w-full md:w-1/3 h-auto m-auto' />
                    <h2 className='text-3xl text-center font-bold font-sans mt-2'>Welcome to our <span className='text-4xl font-bold text-black antialiased font-sans'>e<span className='text-red-500'>Chat</span></span>!</h2>
                    <p className='text-center font-sans mt-2'>Our chat app is the perfect way to be connected privately with your love ones.</p>
                </div>

                <div className='text-center'>
                    <button class="bg-orange-400 hover:bg-orange-500 text-white px-28 md:px-24 py-5 mx-2 my-2 text-xl font-semibold rounded-lg">
                        Sign in
                    </button>
                    <button class="bg-red-500 hover:bg-red-600 text-white px-28 md:px-24 py-5 mx-2 my-2 text-xl font-semibold rounded-lg">
                    {userIcon} Sign up
                    </button>
                </div>
            </div>

            <footer>
                <p>Copyright </p>
            </footer>
        </div>
    )
}

export default Welcome