import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './game/config/config.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [GameModule, TypeOrmModule.forRoot( 
    configService.getTypeOrmConfig(),
  ), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
