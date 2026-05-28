import type { Permission, Role } from "@/types/permissions";

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

export function hasPermission(
  role: Role,
  permission: Permission
): boolean {
  return rolePermissions[role]?.includes(permission);
}

export function getRolePermissions(role: Role): Permission[] {
  return rolePermissions[role] || [];
}

export function canCreateTemplate(role: Role): boolean {
  return hasPermission(role, "template:create");
}

export function canUpdateTemplate(role: Role): boolean {
  return hasPermission(role, "template:update");
}

export function canDeleteTemplate(role: Role): boolean {
  return hasPermission(role, "template:delete");
}

export function canViewOrders(role: Role): boolean {
  return hasPermission(role, "order:view");
}

export function canViewAnalytics(role: Role): boolean {
  return hasPermission(role, "analytics:view");
}

export function canUpdateSettings(role: Role): boolean {
  return hasPermission(role, "settings:update");
}