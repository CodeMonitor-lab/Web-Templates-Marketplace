// src/types/user/user.ts

export type UserRole = 'USER' | 'SELLER' | 'ADMIN' | 'SUPPORT';

export interface User {
  _id: string; 
  name: string;
  email: string;
  role: UserRole;
  avatar: string | null;
  isVerified: boolean; 
  createdAt: string; 
  updatedAt: string;
  __v: number; 
}