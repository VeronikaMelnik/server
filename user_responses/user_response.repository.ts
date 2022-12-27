import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRes } from 'src/entities/user_response.entity';

@Injectable()
export class ResRepository {
  constructor(
    @InjectRepository(UserRes)
    private reqRepository: Repository<UserRes>,
  ) {}
  async create({
    message,
    title,
    userId,
    reqId,
  }: {
    userId: number;
    reqId: number;
    title: string;
    message: string;
  }): Promise<UserRes> {
    const req = this.reqRepository.create({ userId, title, message, reqId });
    await this.reqRepository.save(req);
    return req;
  }

  getAllForUser({
    skip = 0,
    take = 10,
    userId,
  }: {
    userId: number;
    skip: number;
    take: number;
  }) {
    const requests = this.reqRepository.find({
      where: { userId },
      skip,
      take,
      select: { title: true, id: true },
    });
    return requests;
  }

  findById(id: number) {
    return this.reqRepository.findOne({ where: { id } });
  }
}