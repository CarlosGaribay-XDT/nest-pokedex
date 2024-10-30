import { Module } from '@nestjs/common';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    PokemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule { }