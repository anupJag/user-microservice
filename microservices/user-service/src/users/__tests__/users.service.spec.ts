import { Test } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';

import { UserRoles } from '../users.model';
import { UsersService } from '../users.service';
import { UserSchema } from '../schema/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import dbConfiguration from '../../../test/db.module.config';
import { async } from 'rxjs';

describe('USER SERVICE', () => {
  let userService: UsersService;

  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      imports: [
        dbConfiguration(),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [UsersService],
    }).compile();

    userService = await appModule.get<UsersService>(UsersService);
  });

  test('should be able to create a new user', async () => {
    const newUser: CreateUserDto = {
      name: 'Test User 1',
      email: 'testUser1@test.com',
      llId: 'testUser1',
      role: UserRoles.MEMBER,
    };

    const user = await userService.createNewUser(newUser);
    expect(user).toBeDefined();
  });

  test('should throw error when user with an existing LLID is added', async () => {
    const newUser: CreateUserDto = {
      name: 'Test User 1',
      email: 'testUser1@test.com',
      llId: 'testUser1',
      role: UserRoles.MEMBER,
    };

    await userService.createNewUser(newUser).catch(e => {
      expect(e.response.error).toBe(
        `User with LLID ${newUser.llId} is already registered`,
      );
    });
  });

  test('should be able to retrieve user by LLID', async () => {
    const user = await userService.getUserByLLID('testUser1');
    expect(user.name).toBe('Test User 1');
  });

  test('should be able to update `USER ROLE` by LLID', async () => {
    await userService.updateRoleByLLId('testUser1', UserRoles.ADMIN);
    const user = await userService.getUserByLLID('testUser1');
    expect(user.role).toBe(UserRoles.ADMIN);
  });

  test('should be able to retrieve users', async () => {
    const users = await userService.getAllUsers();
    expect(users.length).toBe(1);
  });

  test('should return `EMPTY ARRAY` while retrieving based on `USER ROLE`', async () => {
    const user = await userService.getFilteredUsers({
      role: UserRoles.REVIEWER,
    });
    expect(user.length).toBe(0);
  });

  test('should throw error when user details are not found', async () => {
    await userService.getUserByLLID('abc').catch(e => {
      expect(e.message).toBe('User with LLID: abc not available');
    });
  });
});
