import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRoles } from '../users.model';

describe('USERS CONTROLLER', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useFactory: () => ({
            getAllUsers: jest.fn(() => []),
            getUserByLLID: jest.fn(() => {}),
            createNewUser: jest.fn(() => {}),
            updateRoleByLLId: jest.fn(() => {}),
            getFilteredUsers: jest.fn(() => []),
          }),
        },
      ],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
  });

  test('should call mock getAllUsers for GET /users', () => {
    usersController.getAllUsers({});
    expect(usersService.getAllUsers).toHaveBeenCalled();
  });

  test('should call mock getFilteredUsers for /users?role=DATA', () => {
    usersController.getAllUsers({ role: UserRoles.COLLABORATOR });
    expect(usersService.getFilteredUsers).toHaveBeenCalledWith({
      role: UserRoles.COLLABORATOR,
    });
  });

  test('should call mock getUserByLLId for /users/:llId', () => {
    const testLLId: string = 'testLLID';
    usersController.getUserByLLId(testLLId);
    expect(usersService.getUserByLLID).toHaveBeenCalledWith(testLLId);
  });

  test('should call mock createUser for POST /users', () => {
    const newUser: CreateUserDto = {
      name: 'Test Candidate',
      email: 'test@test.com',
      llId: 'test',
      role: UserRoles.MEMBER,
    };

    usersController.createNewUser(newUser);
    expect(usersService.createNewUser).toHaveBeenCalledWith(newUser);
  });

  test('should call mock updateRole PATCH for /users/:llId/role', () => {
    usersController.updateRoleByLLId('testId', UserRoles.ADMIN);
    expect(usersService.updateRoleByLLId).toHaveBeenCalledWith(
      'testId',
      'ADMIN',
    );
  });
});
