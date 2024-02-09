import EChatLogo from '../images/chat-logo.png'

const Logo = () => {
    return (
        <>
            <div className='flex flex-wrap'>
                    <div className='shrink-0'>
                        <img className='w-16 md:w-13 h-auto' src={EChatLogo} alt='EChat App' />
                    </div>
                    <h1 className='text-6xl font-bold text-black antialiased font-sans'>e<span className='text-red-500'>Chat</span></h1>
            </div>
        </>
    );
}

export default Logo