export const responseInterceptor = (response: any) => {
    return response;
  };
  
  export const responseErrorInterceptor = (error: any) => {
    const isBrowser = typeof window !== "undefined";
  
    const status = error?.response?.status;
  
    // 🔐 Handle auth error
    if (status === 401 && isBrowser) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
  
      if (!window.location.pathname.startsWith("/login")) {
        window.location.href = "/login";
      }
    }
  
    // 🧠 Normalize error
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Network error occurred";
  
    return Promise.reject({
      message,
      status,
      data: error?.response?.data,
      isNetworkError: !error?.response,
    });
  };