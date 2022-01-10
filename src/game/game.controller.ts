import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, Put,UseGuards } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport'; 

@UseGuards(AuthGuard('jwt'))

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  findAll(): Promise<Game[]> {

    ​let data = this.gameService.findAll({});
    ​return data;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newGame: CreateGameDto) {
    return this.gameService.update(id, newGame);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(id);
  }
}
