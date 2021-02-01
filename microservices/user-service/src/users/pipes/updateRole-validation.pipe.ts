import { PipeTransform, BadRequestException } from '@nestjs/common';
import { UserRoles } from '../users.model';

export class UpdateRoleValidation implements PipeTransform {
  readonly allowedUserRoles = [
    UserRoles.ADMIN,
    UserRoles.COLLABORATOR,
    UserRoles.MEMBER,
    UserRoles.REVIEWER,
    UserRoles.SUPERADMIN,
  ];

  isValidUserRole(role: any): boolean {
    return this.allowedUserRoles.indexOf(role) !== -1;
  }

  transform(value: any): any {
    const userRole = String(value).toUpperCase();

    if (!this.isValidUserRole(userRole))
      throw new BadRequestException(`Role: ${userRole} is not an valid role`);

    return userRole;
  }
}
