import imgSignup from '../images/signup.jpg'

const Signup = () => {

    return (
        <div className="signup h-screen w-full bg-white pt-3 md:pt-18">
            <div className="container mx-auto justify-center px-10 md:p-0 m-0 w-full md:w-1/2">
                <div className="pt-10">
                    <div className='w-60 md:w-80 mx-auto'>
                        <img src={imgSignup} alt='eChat Sign up' />
                    </div>
                </div>            

                <div className='pb-7'>
                        <h1 className="text-3xl font-bold text-black antialiased font-sans">Sign up</h1>
                        <p className='font-sans mt-2 text-lg'>Get chatting with your special someone today by signing up for our chat app!</p>
                </div>

                <div className="signup-form">
                    <form>
                        <div class="mb-6">
                            <label for="name" class="block text-lg text-red-500">Your full name</label>
                            <input type="text" id="name" class="border-solid border-b-2 border-gray-500 border-t-0 border-x-0 text-gray-900 text-lg block w-full py-2 px-0 focus:ring-transparent focus:border-gray-500 " placeholder="Anne Cruz" required />
                        </div>           
                        <div class="mb-6">
                            <label for="phone" class="block text-lg text-red-500">Phone number</label>
                            <input type="tel" id="phone" class="border-solid border-b-2 border-gray-500 border-t-0 border-x-0 text-gray-900 text-lg block w-full py-2 px-0 focus:ring-transparent focus:border-gray-500 " placeholder="1234-567-8910" required />
                        </div>             
                        <div class="mb-6">
                            <label for="email" class="block text-lg text-red-500">Your email</label>
                            <input type="email" id="email" class="border-solid border-b-2 border-gray-500 border-t-0 border-x-0 text-gray-900 text-lg block w-full py-2 px-0 focus:ring-transparent focus:border-gray-500 " placeholder="heyanne@gmail.com" required />
                        </div> 
                        <div class="mb-6">
                            <label for="password" class="block text-lg text-red-500">Password</label>
                            <input type="password" id="password" class="border-solid border-b-2 border-gray-500 border-t-0 border-x-0 text-gray-900 text-lg block w-full py-2 px-0 focus:ring-transparent focus:border-gray-500 " placeholder="•••••••••" required />
                        </div>
                        <div class="mb-6">
                            <label for="confirm_password" class="block text-lg text-red-500">Confirm Password</label>
                            <input type="password" id="confirm_password" class="border-solid border-b-2 border-gray-500 border-t-0 border-x-0 text-gray-900 text-lg block w-full py-2 px-0 focus:ring-transparent focus:border-gray-500 " placeholder="•••••••••" required />
                        </div>
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-white-50 focus:ring-3 focus:ring-red-300 dark:bg-white-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm text-zinc-900 dark:text-zinc-900">I agree with the <a href="#" class="text-red-600 hover:underline dark:text-red-500">terms and conditions</a>.</label>
                        </div>
                        <div class="pt-4 pb-20 mb-6">
                            <button type="button" class="w-full md:w-1/3 text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-red-900">Sign up</button>
                        </div>               
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup