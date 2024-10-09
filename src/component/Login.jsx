import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // console.log(username, password);
      const response = await fetch("http://localhost:8080/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      // console.log(`response ${response}`);

      if (response.ok) {
        const result = await response.json();
        // const data = result.data;

        // localStorage.setItem("token", data.token);
        // localStorage.setItem("role", data.role);

        // console.log(`token : ${data.token}`);
        // console.log(`role : ${data.role}`);

        // if (data.role === "ROLE_SUPER_ADMIN" || data.role === "ROLE_ADMIN") {
        //   window.location.href = "/list-customer";
        // } else {
        //   window.location.href = "/profile";
        // }

        // langsung dari jwt
        const token = result.data.token;
        localStorage.setItem("token", token);

        const decodeToken = jwtDecode(token);
        console.log(`decodeToken: ${decodeToken}`);
        const roles = decodeToken.roles;
        console.log(`roles: ${roles}`);
        const username = decodeToken.username;
        console.log(`username: ${username}`);

        // localStorage.setItem("role", roles[0]);

        if (
          roles.includes("ROLE_SUPER_ADMIN") ||
          roles.includes("ROLE_ADMIN")
        ) {
          window.location.href = "/list-customer";
        } else {
          window.location.href = "/profile";
        }
        alert("Login Success");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#02063D] h-[100vh] overflow-hidden">
        <div className="container text-white mx-auto lg:h-full flex flex-col justify-center items-center">
          <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap lg:mt-[150px] mt-52 mb-36  lg:flex-row w-full lg:items-center justify-center">
            <div className="lg:w-1/2 md:w-1/2 lg:max-w-lg p-4 bg-white border border-gray-200 rounded-3xl shadow md:p-8 mx-10 md:mx-0">
              <form className="space-y-6 mb-10" onSubmit={handleLogin}>
                <h5 className="text-xl font-medium text-black">
                  Sign in to Kremasi
                </h5>
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
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
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
                  <a
                    href="#"
                    className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#02063D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-black">
                  Not registered?{" "}
                  <a
                    href="/register"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create Account
                  </a>
                </div>
              </form>
            </div>
            <div className="w-full self-end lg:px-10 lg:text-left lg:mb-32 font-sans mt-10 md:px-4 mb-36 text-center lg:w-1/2">
              <h1 className="lg:text-[40px] text-[16px] md:text-[26px] font-bold">
                <span className="text-[#84CECF] lg:text-8xl text-6xl block">
                  Kremasi
                </span>{" "}
                Your Financial <u className="lg:block md:block">Partner.</u>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
