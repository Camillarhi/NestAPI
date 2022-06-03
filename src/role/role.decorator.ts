import { SetMetadata } from '@nestjs/common';
import { Roles } from './role.enum';

export const ROLES_KEY = 'roles';
export const Role = (...role: Roles[]) => SetMetadata(ROLES_KEY, role);
