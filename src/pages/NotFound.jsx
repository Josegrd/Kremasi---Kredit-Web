import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center h-[100vh] items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404 Not Found</h1>
          <p className="text-lg my-2">
            The page you are looking for does not exist.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    </>
  );
}
