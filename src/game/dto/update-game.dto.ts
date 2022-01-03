import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
    readonly id: number; 
    readonly title: string;
    readonly genre: string;
    readonly description: string;
    readonly image_url: string;
    //readonly date: Date;
}
