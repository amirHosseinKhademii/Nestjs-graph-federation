import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './types';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async findAllUsers() {
    return await this.repo.find();
  }

  async finduserById(id: string) {
    return await this.repo.findOneBy({ id });
  }
}
