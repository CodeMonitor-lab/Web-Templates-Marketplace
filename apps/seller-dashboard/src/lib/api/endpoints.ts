const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/users/login",
    REGISTER: "/users/register",
    ME: "/users/me",
    LOGOUT: "/users/logout",
  },

  TEMPLATE: {
    GET_ALL: "/templates",
    CREATE: "/templates",
    UPDATE: (id: string) => `/templates/${id}`,
    DELETE: (id: string) => `/templates/${id}`,
  },

  ORDER: {
    GET_ALL: "/orders",
  },
};

export default API_ENDPOINTS;