/**
 * Backend origin (no trailing slash).
 * Production default matches Render service `edgi-ai-posture` (see render.yaml).
 * For local dev, create `frontend/.env` with: VITE_API_URL=http://127.0.0.1:5000
 */
const PRODUCTION_API_ORIGIN = "https://edgi-ai-posture.onrender.com";

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL ?? PRODUCTION_API_ORIGIN
).replace(/\/$/, "");