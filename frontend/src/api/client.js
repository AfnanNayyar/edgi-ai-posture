import axios from "axios";
import { API_BASE_URL } from "../config";

/** Pose + JPEG encode can be slow on cold Render instances; avoid premature client timeouts. */
const DEFAULT_TIMEOUT_MS = 90_000;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: DEFAULT_TIMEOUT_MS,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
