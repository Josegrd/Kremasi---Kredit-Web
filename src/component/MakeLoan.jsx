import { useState, useEffect } from "react";
import { apiFetch } from "../api/api";
import Transaction from "./Transaction";

export default function MakeLoan({ userData }) {
  const [userDataLoanType, setUserDataLoanType] = useState(null);
  const [userDataInstallment, setUserDataInstallment] = useState(null);
  const [loanType, setLoanType] = useState("");
  const [installmentType, setInstallmentType] = useState("");
  const [amount, setAmount] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await apiFetch(`/loan_type`, "GET");
        const data = result.data;
        setUserDataLoanType(data);

        const resultInstallment = await apiFetch(`/installment_type`, "GET");
        const dataInstallment = resultInstallment.data;
        setUserDataInstallment(dataInstallment);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const isValidLoanType = loanType !== "";
    const isValidInstallmentType = installmentType !== "";
    const isValidAmount = amount !== "";
    setIsTrue(isValidLoanType && isValidInstallmentType && isValidAmount);
  }, [loanType, installmentType, amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newLoan = {
        nasabahId: userData.id,
        loanTypeId: e.target.loanType.value,
        installmentTypeId: e.target.installmentType.value,
        amount: e.target.amount.value,
      };

      const result = await apiFetch(`/loan`, "POST", newLoan);
      const data = result.data;

      console.log("Loan created : ", data);

      setLoanType("");
      setInstallmentType("");
      setAmount("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`mt-20`}>
        <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
          Loan submission
        </h1>
        <div className=" text-white flex flex-col mt-12">
          <div className="flex flex-wrap">
            <div className="lg:w-full md:w-full max-w-lg bg-white sm:p-6 md:p-8 ">
              <form className="space-y-8 mb-10" onSubmit={handleSubmit}>
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
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5  text-black"
                    onChange={(e) => setLoanType(e.target.value)}
                    value={loanType}
                  >
                    <option selected>Choose a Loan Type</option>
                    {userDataLoanType?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="installmentType"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Instalment Type
                  </label>
                  <select
                    name="installmentType"
                    id="installmentType"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5  text-black"
                    onChange={(e) => setInstallmentType(e.target.value)}
                    value={installmentType}
                  >
                    <option selected>Choose a Instalment Type</option>
                    {userDataInstallment?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.installmentType}
                      </option>
                    ))}
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
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
                    placeholder="10000000"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={!isTrue}
                  className={`w-full text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ${
                    isTrue ? "" : "cursor-not-allowed opacity-50"
                  }`}
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
