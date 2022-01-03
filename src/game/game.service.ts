import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 

@Injectable()
export class GameService {
  constructor(@InjectRepository(Game) private gameRepository: Repository<Game>) {}
  
  create (newGame: CreateGameDto): Promise<Game> {
    return this.gameRepository.save(newGame);
  }
  async findAll(params): Promise<Game[]> { 
    return await this.gameRepository.find(); 
  }

  async findOne(gameId: string): Promise<Game> {
    return await this.gameRepository.findOne({ where: { id: gameId } }); 
  }

  async update (gameId: string, newGame: CreateGameDto): Promise<Game> { 
    let toUpdate = await this.gameRepository.findOne(gameId); 

    let updated = Object.assign(toUpdate, newGame); 

    return this.gameRepository.save(updated); 
  }
  async remove(gameId: string): Promise<any> {
    return await this.gameRepository.delete({ id: parseInt(gameId) });
  }
}
