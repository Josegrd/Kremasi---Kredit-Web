import CustomerNavbar from "./CustomerNavbar";

export default function PayTrasaction() {
  return (
    <>
      <div className="flex flex-wrap">
        <CustomerNavbar />
        <div className="mt-20 ml-20 w-1/2">
          <h1 className="text-[#02063D] text-6xl font-bold underline">
            Pay Transaction
          </h1>
          <div className="mt-28 flex text-[20px]">
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
              <h1 className="font-medium mb-1">20 September 2004</h1>
              <h1 className="font-medium mb-1">20 September 2004</h1>
            </div>
          </div>

          <div className=" p-4 w-[500px] text-[20px] bg-[#D9D9D9] border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8 mt-16">
            <div className="flex">
              <div>
                <h1 className="font-bold mb-1">Transaction Date</h1>
                <h1 className="font-bold mb-1">Nominal</h1>
                <h1 className="font-bold mb-1">Loan Status</h1>
                <h1 className="font-bold mb-1">Create At</h1>
                <h1 className="font-bold mb-1">Update At</h1>
              </div>
              <div className="ml-6">
                <h1 className="font-medium mb-1">20 September 2004</h1>
                <h1 className="font-medium mb-1">Rp. 2.000.000</h1>
                <h1 className="font-medium mb-1">PAID</h1>
                <h1 className="font-medium mb-1">28 September 2004</h1>
                <h1 className="font-medium mb-1">28 September 2004</h1>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-10 w-1/2 text-white bg-[#1FC504] hover:bg-[#2fc929] focus:ring-4 focus:outline-none focus:ring-green-600  rounded-full text-2xl font-bold px-5 py-4 text-center"
              >
                PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
