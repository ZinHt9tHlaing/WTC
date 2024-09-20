import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntities } from './entities/post-entities';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntities])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
