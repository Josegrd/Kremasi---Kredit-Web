export default function UpdateProfile() {

  return (
    <>
        <div
          className={`mt-20`}
        >
          <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
            Update Profile
          </h1>
          <div className=" text-white flex flex-col mt-12">
            <div className="flex flex-wrap">
              <div className="lg:w-full md:w-full max-w-lg bg-white sm:p-6 md:p-8 ">
                <form className="space-y-8 mb-10" action="#">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      firstname
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      lastname
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white"
                      placeholder="Lennon"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      email
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
                      htmlFor="birthday"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      date of birth
                    </label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      // value="2000-01-01"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                  >
                    Save Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
