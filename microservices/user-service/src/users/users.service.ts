import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserRoles } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserFilterDto } from './dto/get-users-filter.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  /**
   * @function getAllUsers
   *
   * @summary
   * Returns back all the users in the database
   *
   * @returns {Promise<Array<User>>}
   */
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find({}).exec();
  }

  /**
   * @function getFilteredUsers
   *
   * @param userFilterDto
   *
   * @returns {Array<User>}
   */
  async getFilteredUsers(userFilterDto: GetUserFilterDto): Promise<User[]> {
    const { role } = userFilterDto;
    return this.userModel.find({ role }).exec();
  }

  /**
   * @function getUserByLLID
   *
   * @summary
   * Returns user if the LLID is available in the database
   *
   * @param {string} llId
   *
   * @returns {User}
   */
  async getUserByLLID(llId: string): Promise<User> {
    const userFound: User = await this.userModel.findOne({ llId }).exec();

    if (!userFound)
      throw new NotFoundException(`User with LLID: ${llId} not available`);

    return userFound;
  }

  /**
   * @function createNewUser
   *
   * @summary
   * Create a new user in the database
   *
   * @param {CreateUserDto} createUserDto
   *
   * @returns {User}
   */
  async createNewUser(createUserDto: CreateUserDto): Promise<User> {
    // Check to see if the user llID is already available in the database
    let existingUser: User;
    try {
      existingUser = await this.getUserByLLID(createUserDto.llId);
    } catch (error) {}

    if (existingUser)
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `User with LLID ${createUserDto.llId} is already registered`,
        },
        HttpStatus.CONFLICT,
      );

    const { name, email, llId, role = UserRoles.MEMBER } = createUserDto;
    const newUser = new this.userModel({
      name,
      email,
      llId,
      role,
    });

    return newUser.save();
  }

  /**
   * @function updateRoleByLLId
   *
   * @summary
   * Update user role by LLID
   *
   * @param {string} llId
   * @param {UserRoles} userRole
   *
   * @returns {User}
   */
  async updateRoleByLLId(llId: string, userRole: UserRoles): Promise<User> {
    return this.userModel.updateOne({ llId }, { role: userRole });
  }
}
