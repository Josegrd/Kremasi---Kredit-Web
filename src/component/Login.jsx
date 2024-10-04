export default function Login() {
  return (
    <>
      <div className="bg-[#02063D] h-[100vh] overflow-hidden">
        <div className="container text-white mx-auto lg:h-full flex flex-col justify-center items-center">
          <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap lg:mt-[150px] mt-52 mb-36  lg:flex-row w-full lg:items-center justify-center">
            <div className="lg:w-1/2 md:w-1/2 lg:max-w-lg p-4 bg-white border border-gray-200 rounded-3xl shadow md:p-8 mx-10 md:mx-0">
              <form className="space-y-6 mb-10" action="#">
                <h5 className="text-xl font-medium text-black">
                  Sign in to Kremasi
                </h5>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-400 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-sm font-medium text-black"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-black">
                  Not registered?{" "}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
            <div className="w-full self-end lg:px-10 lg:text-left lg:mb-32 font-sans mt-10 md:px-4 mb-36 text-center lg:w-1/2">
              <h1 className="lg:text-[40px] text-[16px] md:text-[26px] font-bold">
                <span className="text-[#84CECF] lg:text-8xl text-6xl block">
                  Kremasi
                </span>{" "}
                Your Financial <u className="lg:block md:block">Partner.</u>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
