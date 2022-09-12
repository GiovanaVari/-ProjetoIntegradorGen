import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { postagemModule } from './postagem/modules/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_projeto',
      entities: [Postagem],
      synchronize: true
    }),
    postagemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
