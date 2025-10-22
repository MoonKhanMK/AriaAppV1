export const serverUrl = import.meta.env.VITE_BACKEND_URL;

const checkConfig = (server) => {
  let config = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://aria-app-v1-ee7i.vercel.app",
      };
      break;
    case "local":
      config = {
        baseUrl: "https://aria-app-v1-ee7i.vercel.app",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "production";
export const config = checkConfig(selectServer);