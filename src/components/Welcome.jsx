import ChatImg from '../images/chatting.jpg'
import EChatLogo from '../images/chat-logo.png'
import Buttons from './Buttons'
import Logo from './Logo'

const Welcome = () => {
    
    return(
        <div className='bg-peach h-screen w-full'>
            <div className='container mx-auto flex flex-wrap justify-center p-0 m-0'>
                <div className='pt-20'>
                    <Logo />
                </div>
                

                <div className='px-4 md:px-1 pt-8 pb-8'>
                    <img src={ChatImg} alt="EChat App" className='w-full md:w-1/3 h-auto m-auto' />
                    <h2 className='text-3xl text-center font-bold font-sans mt-8'>Welcome to our <span className='text-4xl font-bold text-black antialiased font-sans'>e<span className='text-red-500'>Chat</span></span>!</h2>
                    <p className='text-center font-sans mt-2 text-lg'>Our chat app is the perfect way to be connected privately with your love ones.</p>
                </div>
            </div>

            <div className='text-center'>
                <div className='flex flex-wrap justify-center pt-8 m-0'>
                    <div className="bg-orange-400 hover:bg-orange-500 rounded-lg mx-2 my-2 w-2/3 md:w-1/4">
                        <Buttons to="login" />
                    </div>
                    
                    <div className="bg-red-500 hover:bg-red-600 rounded-lg mx-2 my-2 w-2/3 md:w-1/4">
                        <Buttons to="signup" />                        
                    </div>
                </div>
            </div>
            
       </div>
    )
}

export default Welcome