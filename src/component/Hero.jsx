import ImageHeroes from "../assets/money.png";
import AstraImage from "../assets/logo-astrapay.png";
import ShopeeImage from "../assets/shopee-pay-logo.png";
import OvoImage from "../assets/logo-ovo.png";
import LinkajaImage from "../assets/logo-linkaja.png";
import JeniusImage from "../assets/ewallet_jenius-pay.png";
import ReactTypingEffect from "react-typing-effect";

export default function Hero() {
  return (
    <>
      <div className="bg-[#02063D] h-[100vh]">
        <div className="container text-white mx-auto pt-28">
          <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full self-end px-4 lg:w-1/2 ">
              <div className="relative">
                <img
                  src={ImageHeroes}
                  alt="Heroes Images"
                  className="w-60 h-60 lg:w-[520px] lg:h-[520px] mx-auto mb-32 object-cover "
                />
              </div>
            </div>
            <div className="w-full self-end px-4 text-center lg:w-1/2 lg:text-left lg:mb-32 font-sans">
              <h2 className="text-[32px] font-bold text-[#84CECF] mb-2">
                Hello Creditpeople!
              </h2>
              <h1 className="font-bold">
                <span className="text-8xl">Welcome to </span>{" "}
                <span className="text-[#84CECF] text-8xl">
                  <ReactTypingEffect text={["Kremasi", "Kredit Yuk!"]} />
                </span>
              </h1>
              <p className="max-w-md my-9 text-[18px] opacity-80">
                The easiest and most affordable platform for managing online
                loans and installment payments.
              </p>

              <div className="text-white text-2xl flex gap-5">
                <button
                  type="button"
                  className="w-52 text-2xl py-2.5 bg-[#8E8EDB] rounded-full text-center mb-2 hover:bg-[#6A6AC2] transition-colors duration-300"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="w-52 text-2xl py-2.5 outline outline-[#84CECF] rounded-full text-center mb-2 hover:bg-[#84CECF] hover:text-[#150E5E] transition-colors duration-300"
                >
                  Register
                </button>
              </div>
            </div>
          </div>

          <div className="w-full -mt-16">
            <h1 className="font-sans text-[20px] font-semibold pb-3 opacity-50 ms-3">
              CONNECT ON
            </h1>
            <div className="relative w-full h-32 rounded-2xl">
              <div className="absolute inset-0 bg-[#150E5E] opacity-20 rounded-2xl"></div>
              <div className="relative flex justify-evenly items-center h-full">
                <div className="w-48">
                  <img src={AstraImage} alt="Astra" />
                </div>
                <div className="w-48">
                  <img src={ShopeeImage} alt="Shopee" />
                </div>
                <div className="w-48">
                  <img src={OvoImage} alt="OVO" />
                </div>
                <div className="w-48">
                  <img src={LinkajaImage} alt="LinkAja" />
                </div>
                <div className="w-48">
                  <img src={JeniusImage} alt="Jenius" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
