import ProfileImage from "../assets/profile.jpeg";

export default function Profile() {
  

  return (
    <>
        <div
          className={`mt-20`}
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
    </>
  );
}
