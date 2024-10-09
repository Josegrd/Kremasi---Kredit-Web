import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(email, username, nationalId, password);
      const response = await fetch(
        `http://localhost:8080/api/v1/auth/check-email?email=${email}&username=${username}`
      );
      const data = await response.json();
      console.log(data.data);

      if (data.data) {
        setError("Email or username already exist");
      } else {
        console.log(email, username, nationalId, password);
        navigate("/addIdentity", {
          state: { email, username, nationalId, password },
        });
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
                {error && <p className="text-red-500">{error}</p>}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your National ID number
                  </label>
                  <input
                    type="number"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="1234567890"
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="name@company.com"
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
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-400 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-sm font-medium text-black"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create Account
                </button>
                <div className="text-sm font-medium text-black">
                  Have an account?{" "}
                  <a
                    href="/login"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
