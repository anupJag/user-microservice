import { IsOptional, IsIn } from 'class-validator';
import { UserRoles } from '../users.model';

export class GetUserFilterDto {
  @IsOptional()
  @IsIn([
    UserRoles.ADMIN,
    UserRoles.COLLABORATOR,
    UserRoles.MEMBER,
    UserRoles.REVIEWER,
    UserRoles.SUPERADMIN,
  ])
  role?: UserRoles;
}
