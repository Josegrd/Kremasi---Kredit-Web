import { useEffect, useState } from "react";
import ProfileImage from "../assets/profile.jpeg";
import { jwtDecode } from "jwt-decode";
import { apiFetch } from "../api/api";

export default function Profile() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [nik, setNik] = useState("");

  useEffect(() => {
    const fetchNasabah = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const nasabahId = decodedToken.nasabahId;

        const result = await apiFetch(`/nasabah/${nasabahId}`, "GET");
        const data = result.data;

        setFullName(data.fullName);
        setAddress(data.address);
        setPhoneNumber(data.phoneNumber);
        setBirthdate(data.birthDate);
        setEmail(data.email);
        setNik(data.nik);

        // const token = localStorage.getItem("token");

        // const decodedToken = jwtDecode(token);
        // const nasabahId = decodedToken.nasabahId;

        // const response = await fetch(
        //   `${import.meta.env.VITE_API_URL}/nasabah/${nasabahId}`,
        //   {
        //     credentials: "include",
        //     headers: {
        //       Authorization: `Bearer ${token}`, // Menambahkan Bearer Token di sini
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );

        // if (response.ok) {
        //   const results = await response.json();
        //   const data = results.data;
        //   console.log(data);
        //   setFullName(data.fullName);
        //   setAddress(data.address);
        //   setPhoneNumber(data.phoneNumber);
        //   setBirthdate(data.birthDate);
        //   setEmail(data.email);
        //   setNik(data.nik);
        // } else {
        //   console.log("Failed to fetch nasabah");
        // }
      } catch (error) {
        console.error("Error fetching nasabah:", error);
      }
    };

    fetchNasabah();
  }, []);

  return (
    <>
      <div className={`mt-20`}>
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
            <h1 className="font-bold mb-1">Full Name</h1>
            <h1 className="font-bold mb-1">Email</h1>
            <h1 className="font-bold mb-1">Date Of Birth</h1>
            <h1 className="font-bold mb-1">Address</h1>
            <h1 className="font-bold mb-1">Phone Number</h1>
            <h1 className="font-bold mb-1">National ID</h1>
          </div>
          <div className="ml-6">
            <h1 className="font-medium mb-1">{fullName}</h1>
            <h1 className="font-medium mb-1">{email}</h1>
            <h1 className="font-medium mb-1">{birthdate}</h1>
            <h1 className="font-medium mb-1">{address}</h1>
            <h1 className="font-medium mb-1">{phoneNumber}</h1>
            <h1 className="font-medium mb-1">{nik}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
