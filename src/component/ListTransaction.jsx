import AdminNavbar from "./AdminNavbar";
import { useState } from "react";

export default function ListTransaction() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <AdminNavbar isNavOpen={isNavOpen} toggleNavbar={handleToggleNavbar} />
        <div
          className={`mt-20 ml-20 w-1/2 transition-all duration-300 ${
            isNavOpen
              ? "lg:ml-[500px] md:ml-[350px]  w-[calc(100%-300px)]"
              : "ml-[130px] w-[calc(100%-60px)]"
          }`}
        >
          <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
            List Transaction
          </h1>
          <div  className="text-black flex flex-col justify-center">
            <div className="flex flex-wrap items-center me-10">
              <div className="w-full p-4 h-full max-h-[700px]  mt-16 bg-white border border-gray-200 rounded-3xl shadow sm:p-6 md:p-8 overflow-scroll">
                <div className="w-full p-4 h-full max-h-lvh bg-slate-50 border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8 mb-2">
                  <div className="w-full me-20">
                    <h1 className="font-bold mb-5 text-3xl">Jose Garda</h1>
                    <div className="flex lg:text-[20px] md:text-[20px] text-[13px] border border-gray-400 rounded-2xl p-4">
                      <div className="flex text-[20px]">
                        <div>
                          <h1 className="font-bold mb-1">Type</h1>
                          <h1 className="font-bold mb-1">Installment</h1>
                          <h1 className="font-bold mb-1">Nominal</h1>
                          <h1 className="font-bold mb-1">Create At</h1>
                          <h1 className="font-bold mb-1">Approve At</h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="font-medium mb-1">KPR</h1>
                          <h1 className="font-medium mb-1">3 Months</h1>
                          <h1 className="font-medium mb-1">Rp. 10.000.000</h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#02063D] hover:bg-[#1e2370] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          SEE DETAILS
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#c91b15] hover:bg-[#ff3030] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full p-4 h-full max-h-lvh bg-slate-50 border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8 mb-2">
                  <div className="w-full">
                    <h1 className="font-bold mb-5 text-3xl">Jose Garda</h1>
                    <div className="flex text-[20px] border border-gray-400 rounded-2xl p-4">
                      <div className="flex text-[20px]">
                        <div>
                          <h1 className="font-bold mb-1">Type</h1>
                          <h1 className="font-bold mb-1">Installment</h1>
                          <h1 className="font-bold mb-1">Nominal</h1>
                          <h1 className="font-bold mb-1">Create At</h1>
                          <h1 className="font-bold mb-1">Approve At</h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="font-medium mb-1">KPR</h1>
                          <h1 className="font-medium mb-1">3 Months</h1>
                          <h1 className="font-medium mb-1">Rp. 10.000.000</h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#02063D] hover:bg-[#1e2370] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          SEE DETAILS
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#c91b15] hover:bg-[#ff3030] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full p-4 h-full max-h-lvh bg-slate-50 border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8 mb-2">
                  <div className="w-full">
                    <h1 className="font-bold mb-5 text-3xl">Jose Garda</h1>
                    <div className="flex text-[20px] border border-gray-400 rounded-2xl p-4">
                      <div className="flex text-[20px]">
                        <div>
                          <h1 className="font-bold mb-1">Type</h1>
                          <h1 className="font-bold mb-1">Installment</h1>
                          <h1 className="font-bold mb-1">Nominal</h1>
                          <h1 className="font-bold mb-1">Create At</h1>
                          <h1 className="font-bold mb-1">Approve At</h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="font-medium mb-1">KPR</h1>
                          <h1 className="font-medium mb-1">3 Months</h1>
                          <h1 className="font-medium mb-1">Rp. 10.000.000</h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#02063D] hover:bg-[#1e2370] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          SEE DETAILS
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#c91b15] hover:bg-[#ff3030] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full p-4 h-full max-h-lvh bg-slate-50 border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8 mb-2">
                  <div className="w-full">
                    <h1 className="font-bold mb-5 text-3xl">Jose Garda</h1>
                    <div className="flex text-[20px] border border-gray-400 rounded-2xl p-4">
                      <div className="flex text-[20px]">
                        <div>
                          <h1 className="font-bold mb-1">Type</h1>
                          <h1 className="font-bold mb-1">Installment</h1>
                          <h1 className="font-bold mb-1">Nominal</h1>
                          <h1 className="font-bold mb-1">Create At</h1>
                          <h1 className="font-bold mb-1">Approve At</h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="font-medium mb-1">KPR</h1>
                          <h1 className="font-medium mb-1">3 Months</h1>
                          <h1 className="font-medium mb-1">Rp. 10.000.000</h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                          <h1 className="font-medium mb-1">
                            20 September 2004
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#02063D] hover:bg-[#1e2370] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          SEE DETAILS
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="mt-5 w-full text-white bg-[#c91b15] hover:bg-[#ff3030] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
