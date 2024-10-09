import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function RegisterAddIdentity() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const location = useLocation();
  const { email, username, nationalId, password } = location.state || {};

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(
        `fullName: ${firstname} ${lastname}\n
        email: ${email}\n
        phoneNumber: ${phoneNumber}\n
        address: ${address}\n
        nik: ${nationalId}\n
        birthDate: ${birthdate}\n
        username: ${username}\n
        password: ${password}`
      );
      const response = await fetch("http://localhost:8080/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: firstname + " " + lastname,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          nik: nationalId,
          birthDate: birthdate,
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        window.location.href = "/login";
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-[#02063D] h-[100vh]">
        <div className="container text-white mx-auto h-full flex flex-col justify-center">
          <div className="flex flex-wrap justify-center items-center">
            <div className="lg:w-1/2 w-full mx-6 max-w-lg h-full p-4 bg-white border border-gray-200 rounded-3xl shadow sm:p-6 md:p-8 ">
              <form className="space-y-6 mb-10" onSubmit={handleRegister}>
                <h5 className="text-xl font-medium text-black">
                  Sign up to Kremasi
                </h5>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your firstname
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="John"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your lastname
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="Lennon"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your phone number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="085123456789"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your address
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="1234567890"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
