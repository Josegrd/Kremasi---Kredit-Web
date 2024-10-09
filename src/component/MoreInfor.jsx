import ProfileImage from "../assets/profile.jpeg";

export default function MoreInformation() {
  return (
    <>
        <div
          className={`mt-20`}
        >
          <h1 className="text-[#02063D] lg:text-6xl md:text-4xl text-4xl font-bold underline">
            More Information
          </h1>
          <div className="mt-14 text-justify me-6 md:me-28">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              blanditiis quas molestias ab ad animi nostrum tenetur, sit
              tempore. Numquam doloremque, eligendi nemo veritatis eveniet natus
              dolore qui laudantium harum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus blanditiis quas molestias
              ab ad animi nostrum tenetur, sit tempore. Numquam doloremque,
              eligendi nemo veritatis eveniet natus dolore qui laudantium harum!
            </p>
            <div className="mt-10">
              <h1 className="font-bold mb-8 text-3xl">Board Of directors</h1>
              <div className="flex flex-wrap lg:justify-start md:justify-start justify-center gap-10  "> {/*flex-col lg:flex-row md:flex-row row-auto*/}
                <div className="bg-[#02063D] w-72 h-96 rounded-2xl">
                  <img
                    src={ProfileImage}
                    alt=""
                    className="w-72 h-72 rounded-2xl object-cover"
                  />
                  <div className="text-white text-center my-4">
                    <h1 className="font-bold text-2xl">Joko Sembung</h1>
                    <p className="opacity-50 mb-10">Director</p>
                  </div>
                </div>
                <div className="bg-[#02063D] w-72 h-96 rounded-2xl ">
                  <img
                    src={ProfileImage}
                    alt=""
                    className="w-72 h-72 rounded-2xl object-cover"
                  />
                  <div className="text-white text-center my-4">
                    <h1 className="font-bold text-2xl">Reino Barrack</h1>
                    <p className="opacity-50 mb-10">Komisaris Utama</p>
                  </div>
                </div>
                <div className="bg-[#02063D] w-72 h-96 rounded-2xl">
                  <img
                    src={ProfileImage}
                    alt=""
                    className="w-72 h-72 rounded-2xl object-cover"
                  />
                  <div className="text-white text-center my-4">
                    <h1 className="font-bold text-2xl">Chandra Santoso</h1>
                    <p className="opacity-50 mb-10">Supervisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
