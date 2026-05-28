export type UserRole = "admin" | "seller" | "user";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;

  avatarUrl: string | null;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}

export type AuthUser = User;