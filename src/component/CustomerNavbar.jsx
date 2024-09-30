import ProfileImage from "../assets/profile.jpeg";

export default function CustomerNavbar() {
  return (
    <>
      <div className="bg-[#02063D] h-[100vh] w-1/4">
        <div className="pt-10">
          <img
            src={ProfileImage}
            alt=""
            className="rounded-full w-32 h-32 object-cover mx-auto "
          />
          <h1 className="text-white text-center mt-3 font-sans text-2xl font-bold">
            Jose Garda
          </h1>
        </div>
        <div className="mt-32 ml-9">
          <div className="flex items-center mb-4">
            <a href="#" className="flex items-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-[#84CECF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <h1 className="text-white text-[24px] font-sans ml-3 font-bold  group-hover:text-[#84CECF]">
                PROFILE
              </h1>
            </a>
          </div>
          <div className="flex items-center mb-4">
            <a href="#" className="flex items-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-[#84CECF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              <h1 className="text-white text-[24px] font-sans ml-3 font-bold group-hover:text-[#84CECF]">
                TRANSACTION
              </h1>
            </a>
          </div>
          <div className="flex items-center mb-4">
            <a href="#" className="flex items-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-[#84CECF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h1 className="text-white text-[24px] font-sans ml-3 font-bold group-hover:text-[#84CECF]">
                PENDING
              </h1>
            </a>
          </div>
          <div className="flex items-center mb-4">
            <a href="#" className="flex items-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-[#84CECF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>

              <h1 className="text-white text-[24px] font-sans ml-3 font-bold group-hover:text-[#84CECF]">
                PAY INSTALLMENT
              </h1>
            </a>
          </div>
          <div className="flex items-center mb-4">
            <a href="#" className="flex items-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-[#84CECF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>

              <h1 className="text-white text-[24px] font-sans ml-3 font-bold group-hover:text-[#84CECF]">
                UPDATE PROFILE
              </h1>
            </a>
          </div>
          <div className="flex items-center mb-4">
            <a href="#" className="flex items-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-[#84CECF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>

              <h1 className="text-white text-[24px] font-sans ml-3 font-bold group-hover:text-[#84CECF]">
                MORE INFORMATION
              </h1>
            </a>
          </div>
          <div className="flex items-center mb-4 mt-52">
            <a href="#" className="flex items-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-[#ce0e0e]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <h1 className="text-white text-[24px] font-sans ml-3 font-bold group-hover:text-[#ce0e0e]">
                LOGOUT
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
