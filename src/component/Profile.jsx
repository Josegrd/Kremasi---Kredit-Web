import CustomerNavbar from "./CustomerNavbar";
import ProfileImage from "../assets/profile.jpeg";
import { useState } from "react";

export default function Profile() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <CustomerNavbar
          isNavOpen={isNavOpen}
          toggleNavbar={handleToggleNavbar}
        />
        <div
          className={`mt-20 transition-all duration-300 ${
            isNavOpen
              ? "lg:ml-[500px] md:ml-[350px]  w-[calc(100%-300px)]"
              : "ml-[130px] w-[calc(100%-60px)]"
          }`}
        >
          <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
            Profile
          </h1>
          <img
            src={ProfileImage}
            alt=""
            className="rounded-full w-48 h-48 object-cover mt-20"
          />
          <div className="mt-9 flex lg:text-[20px] md:text-[20px] text-[16px]">
            <div>
              <h1 className="font-bold mb-1">First Name</h1>
              <h1 className="font-bold mb-1">Last Name</h1>
              <h1 className="font-bold mb-1">Email</h1>
              <h1 className="font-bold mb-1">Date Of Birth</h1>
            </div>
            <div className="ml-6">
              <h1 className="font-medium mb-1">Jose</h1>
              <h1 className="font-medium mb-1">Garda</h1>
              <h1 className="font-medium mb-1">josegarda8@gmail.com</h1>
              <h1 className="font-medium mb-1">20 September 2004</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
