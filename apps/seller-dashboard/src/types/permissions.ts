export type Role = "admin" | "seller" | "user";

export type Permission =
  | "template:create"
  | "template:update"
  | "template:delete"
  | "template:view"
  | "order:view"
  | "order:update"
  | "analytics:view"
  | "settings:update";