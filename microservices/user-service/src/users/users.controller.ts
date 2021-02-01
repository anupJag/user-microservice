import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Header,
  Patch,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRoles } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateRoleValidation } from './pipes/updateRole-validation.pipe';
import { GetUserFilterDto } from './dto/get-users-filter.dto';
import { User } from './schema/user.schema';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAllUsers(
    @Query(ValidationPipe) userFilterDto: GetUserFilterDto,
  ): Promise<User[]> {
    if (Object.keys(userFilterDto).length) {
      return await this.userService.getFilteredUsers(userFilterDto);
    }

    return await this.userService.getAllUsers();
  }

  @Get(':llId')
  async getUserByLLId(@Param('llId') llId: string): Promise<User> {
    return await this.userService.getUserByLLID(llId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @Header('Accept', 'application/json')
  async createNewUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user: User = await this.userService.createNewUser(createUserDto);
    return user;
  }

  @Patch('/:llId/role')
  async updateRoleByLLId(
    @Param('llId') llId: string,
    @Body('role', UpdateRoleValidation) role: UserRoles,
  ): Promise<User> {
    return await this.userService.updateRoleByLLId(llId, role);
  }
}
