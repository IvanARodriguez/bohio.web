import axios from "axios";

const privateAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

privateAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("401 Unauthorized - Attempting token refresh");
      try {
        await axios.get("/api/auth/refresh", {
          baseURL: process.env.NEXT_PUBLIC_API_URL,
          withCredentials: true,
        });
        return axios(error.config);
      } catch (error) {
        console.warn("Token refresh failed, logging out...");
      }
      return Promise.reject(error);
    }
  }
);

export default privateAxios;
