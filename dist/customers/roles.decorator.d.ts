import { Role } from './roles.enum';
export declare const ROLES_KEY = "roles";
export declare const UserRoles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
