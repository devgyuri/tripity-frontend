import axios from "axios";
import { Cookies } from "react-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosBasic = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const cookies = new Cookies();

export const axiosAccessFunc = () => {
  const axiosAccess = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosAccess.interceptors.request.use(
    (config) => {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosAccess.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error;
      if (status === 401) {
        const originalRequest = config;
        return axios
          .post("http://localhost:8080/api/auth/token", {})
          .then((res) => {
            const { accessToken: newAccessToken } = res.data;
            localStorage.setItem("access_token", newAccessToken);
            originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
          })
          .catch(() => {
            localStorage.removeItem("access_token");
            return false;
          });
      } else {
        return Promise.reject(error);
      }
    }
  );

  return axiosAccess;
};
