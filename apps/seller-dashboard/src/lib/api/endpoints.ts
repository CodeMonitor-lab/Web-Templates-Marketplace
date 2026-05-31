// src/lib/api/endpoints.ts

const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    CHANGE_PASSWORD: "/auth/change-password",
  },
  USERS: {
    PROFILE: "/users/profile",
    GET_ALL: "/users",
    GET_BY_ID: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },

  TEMPLATES: {
    GET_ALL: "/templates",
    GET_BY_ID: (id: string) => `/templates/${id}`,
    CREATE: "/templates",
    UPDATE: (id: string) => `/templates/${id}`,
    DELETE: (id: string) => `/templates/${id}`,
  },

  ORDERS: {
    GET_ALL: "/orders",
    GET_BY_ID: (id: string) => `/orders/${id}`,
  },

  CATEGORIES: {
    GET_ALL: "/categories",
    GET_BY_ID: (id: string) => `/categories/${id}`,
  },

  REVIEWS: {
    CREATE: "/reviews",
    GET_BY_TEMPLATE: (templateId: string) =>
      `/reviews/template/${templateId}`,
  },

  WISHLIST: {
    GET_ALL: "/wishlist",
    ADD: (templateId: string) =>
      `/wishlist/${templateId}`,
    REMOVE: (templateId: string) =>
      `/wishlist/${templateId}`,
  },

  UPLOADS: {
    IMAGE: "/uploads/image",
    FILE: "/uploads/file",
  },
} as const;

export default API_ENDPOINTS;