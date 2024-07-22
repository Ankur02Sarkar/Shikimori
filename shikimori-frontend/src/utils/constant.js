const NODE_ENV = process.env.NODE_ENV;
let API_Link =
  NODE_ENV === "production"
    ? "https://shikimori-api.vercel.app"
    : "http://localhost:8000";

export const API_URL = API_Link;
