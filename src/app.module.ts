import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './game/config/config.service';

@Module({
  imports: [GameModule, TypeOrmModule.forRoot( 
    configService.getTypeOrmConfig(),
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
