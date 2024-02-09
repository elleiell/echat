import loginImage from '../images/login.jpg'

const Login = () => {

    return (
        <div className="login h-screen w-full bg-white pt-6 md:pt-18">
                        
            <div className="container mx-auto justify-center px-10 md:p-0 m-0 w-full md:w-1/2">
                <div className="py-10">
                    <div className='w-64 mx-auto'>
                        <img src={loginImage} alt='eChat login image' />
                    </div>
                </div>    
                
                <div className='pb-7'>
                    <h1 className="text-3xl font-bold text-black antialiased font-sans">Log in to e<span className='text-red-500'>Chat</span>!</h1>
                    <p className='font-sans mt-2 text-lg'>Welcome back! Signin using your social account or email to continue</p>
                </div>
                
                
                
                <div className="login-form">
                    <form>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-lg text-red-500">Your email</label>
                            <input type="email" id="email" class="border-solid border-b-2 border-gray-500 border-t-0 border-x-0 text-gray-900 text-xl block w-full py-2 px-0 focus:ring-transparent focus:border-gray-500 " placeholder="heyjoe@gmail.com" required />
                        </div> 
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-lg text-red-500">Password</label>
                            <input type="password" id="password" class="border-solid border-b-2 border-gray-500 border-t-0 border-x-0 text-gray-900 text-xl block w-full py-2 px-0 focus:ring-transparent focus:border-gray-500 " placeholder="•••••••••" required />
                        </div>
                        <div class="pt-4 mb-6">
                            <button type="button" class="w-full md:w-1/3 text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-orange-900">Log in</button>
                        </div>       
                        {/* <div class="pt-4 mb-6 text-center ">
                            <hr />
                            <div className='bg-white w-14 text-center mx-auto'>
                                <p className='text-lg text-gray-400' style={{margin:'-15px 0 0 0'}}>OR</p>
                            </div>                                    
                        </div>              */}
                    </form>
                </div>
            </div>            
        </div>
    );
}

export default Login