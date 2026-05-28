export const rolePermissions: Record<Role, Permission[]> = {
  admin: [
    "template:create",
    "template:update",
    "template:delete",
    "template:view",
    "order:view",
    "order:update",
    "analytics:view",
    "settings:update",
  ],

  seller: [
    "template:create",
    "template:update",
    "template:view",
    "order:view",
    "analytics:view",
  ],

  user: ["template:view"],
};