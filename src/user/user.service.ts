import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm'; 

// This should be a real class/interface representing a user entity


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private gameRepository: Repository<User>) {}

  async findOne(user: string): Promise<User> {
    return await this.gameRepository.findOne({ where: { username: user } }); 
  }
}
