import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";

export default function UpdateProfile({ nasabahId }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValidForm =
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      address &&
      nationalId &&
      birthdate &&
      username &&
      password;
    setIsFormValid(isValidForm);
  }, [
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    nationalId,
    birthdate,
    username,
    password,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateNasabah = {
        id: nasabahId,
        fullName: e.target.firstname.value + " " + e.target.lastname.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        address: e.target.address.value,
        nik: e.target.nationalId.value,
        birthDate: e.target.birthdate.value,
        username: e.target.username.value,
        password: e.target.password.value,
      };

      console.log(updateNasabah);

      const result = await apiFetch(`/nasabah`, "PUT", updateNasabah);
      const data = result.data;

      console.log("nasabah Updated : ", data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setNationalId("");
      setBirthdate("");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={`mt-20`}>
        <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
          Update Profile
        </h1>
        <div className=" flex flex-col mt-12 w-full">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-full md:w-full max-w-lg bg-white sm:p-6 md:p-8 ">
              <form className="space-y-8 mb-10" onSubmit={handleSubmit}>
                <div className="flex gap-10 text-black">
                  <div>
                    <div className="mb-6">
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
                        className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 "
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                        placeholder="Lennon"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="phoneNumber"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="085"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 "
                        placeholder=""
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="birthdate"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        date of birth
                      </label>
                      <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="nationalId"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Nomor Induk Kependudukan
                      </label>
                      <input
                        type="number"
                        name="nationalId"
                        id="nationalId"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                        placeholder="nik"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        new username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        new password
                      </label>
                      <div>
                        <input
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          id="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span
                          onClick={togglePassword}
                          className="relative top-[-33px] right-[-260px] cursor-pointer"
                        >
                          {passwordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-1/3 py-5 text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center ${
                    !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                  }`}
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
