export const storage = {
  setToken: (token: string) => localStorage.setItem("token", token),
  getToken: () => localStorage.getItem("token"),
  removeToken: () => localStorage.removeItem("token"),

  setUser: (user: any) =>
    localStorage.setItem("user", JSON.stringify(user)),
  getUser: () => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  },
  removeUser: () => localStorage.removeItem("user"),
};