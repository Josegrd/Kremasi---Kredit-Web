export default function MakeLoan() {
  return (
    <>
      <div className={`mt-20`}>
        <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
          Loan submission
        </h1>
        <div className=" text-white flex flex-col mt-12">
          <div className="flex flex-wrap">
            <div className="lg:w-full md:w-full max-w-lg bg-white sm:p-6 md:p-8 ">
              <form className="space-y-8 mb-10" action="#">
                <div>
                  <label
                    htmlFor="loanType"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Loan Type
                  </label>
                  <select
                    name="loanType"
                    id="loanType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5  text-black"
                  >
                    <option selected>Choose a Loan Type</option>
                    <option value="KPR">KPR</option>
                    <option value="Usaha">Usaha</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Instalment Type
                  </label>
                  <select
                    name="loanType"
                    id="loanType"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5  text-black"
                  >
                    <option selected>Choose a Instalment Type</option>
                    <option value="ONE_MONTH">1 Month</option>
                    <option value="THREE_MONTH">3 Month</option>
                    <option value="SIX_MONTH">6 Month</option>
                    <option value="TWELVE_MONTH">12 Month</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
                    placeholder="10000000"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  Submit Loan!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
