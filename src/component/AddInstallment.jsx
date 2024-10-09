export default function AddInstallment() {
  return (
    <>
        <div
          className={`mt-20`}
        >
          <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
            Add Installment
          </h1>
          <div className=" text-white flex flex-col mt-12">
            <div className="flex flex-wrap">
              <div className="lg:w-full  max-w-lg bg-white sm:p-6 md:p-8 ">
                <form className="space-y-8 mb-10" action="#">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      type
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white"
                      placeholder="new installment type"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white  bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center"
                  >
                    Add New Installment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
