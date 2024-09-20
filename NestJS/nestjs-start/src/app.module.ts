import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntities } from './posts/entities/post-entities';

@Module({
  imports: [PostsModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest_db',
    entities: [PostEntities], // table name
    synchronize: true, // not for production
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
