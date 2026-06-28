export const requestInterceptor = (config: any) => {
    const isBrowser = typeof window !== "undefined";
  
    if (isBrowser) {
      const token = localStorage.getItem("accessToken");
  
      if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  
    return config;
  };
  
  export const requestErrorInterceptor = (error: any) => {
    return Promise.reject(error);
  };