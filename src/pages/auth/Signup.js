export const Signup = ()=> {
    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex flex-cols justify-center items-center h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <p className="text-4xl text-center my-8 font-bold">Booking System</p>
                        <form>
                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                type="text"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Email address"
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Enter Password"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Confirm Password"
                                />
                            </div>
                        {/* <!-- Submit button --> */}
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}