import { Injectable } from '@nestjs/common';
import { GetAllUsersQueryDto } from './dto/user_requests.controller.dto';
import { UserRepository } from './user.repository';
import { ReqRepository } from './user_request.repository';
import { ResRepository } from './user_response.repository';

@Injectable()
export class UserResponsesService {
  constructor(
    private reqRepository: ReqRepository,
    private resRepository: ResRepository,
    private userRepository: UserRepository,
  ) {}

  getAllUsers({ limit, offset }: GetAllUsersQueryDto) {
    return this.userRepository.findAllUsers({ skip: offset, take: limit });
  }

  getAllReqForUser(userId: number) {
    return this.reqRepository.getAllActiveForUser(userId);
  }
  getRequest(id: number) {
    return this.reqRepository.findById(id);
  }
  async createResponse({
    message,
    reqId,
    title,
    userId,
  }: {
    message: string;
    reqId: number;
    title: string;
    userId: number;
  }) {
    await this.resRepository.create({
      message,
      reqId,
      title,
      userId,
    });
  }
}