export const apiFetch = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  const token = localStorage.getItem("token"); // Ambil token dari localStorage (opsional)

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "", // Jika ada token, tambahkan Authorization
    ...headers, // Merge headers yang diberikan dengan defaultHeaders
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
      method,
      headers: defaultHeaders,
      body: body ? JSON.stringify(body) : null, // Body diisi hanya jika ada
      credentials: "include", // Jika perlu kirim cookies
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return data JSON yang diambil
  } catch (error) {
    console.error("API fetch error:", error.message);
    throw error; // Lempar kembali error jika terjadi masalah
  }
};
