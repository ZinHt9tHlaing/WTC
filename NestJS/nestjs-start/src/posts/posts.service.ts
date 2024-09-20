import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreatePostDto } from './db/create-post.dto';
import { UpdatePostDto } from './db/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntities } from './entities/post-entities';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntities)
    private postsRepository: Repository<PostEntities>,
  ) {}

  getAllPosts(): Promise<PostEntities[]> {
    return this.postsRepository.find();
  }

  getPostById(id: number): Promise<PostEntities | null> {
    return this.postsRepository.findOneBy({ id });
  }

  createPost(createPostDto: CreatePostDto) {
    return this.postsRepository.save(createPostDto);
  }

  updatePost(id: string, updatePostDto: UpdatePostDto) {
    return this.postsRepository.update(id, updatePostDto);
  }

  async deletePost(id: string): Promise<{ message: string }> {
    await this.postsRepository.delete(id);
    return { message: 'Post has been deleted' };
  }
  // getAllPosts() {
  //   return this.posts;
  // }

  // getPostById(@Param('id') id: string) {
  //   // const postId = Number(id);
  //   // const post = this.posts.find((post) => post.id === postId);
  //   const post = this.posts.find((post) => post.id === +id);
  //   if (!post) {
  //     throw new NotFoundException('Post not found');
  //   }
  //   return post;
  // }

  // createPost(createPostDto: CreatePostDto) {
  //   const newPost = {
  //     id: Date.now(),
  //     title: createPostDto.title,
  //     description: createPostDto.description,
  //   };
  //   this.posts.push(newPost);
  //   return newPost;
  // }

  // updatePost(id: string, updatePostDto: UpdatePostDto) {
  //   const post = this.posts.find((p) => p.id === +id);
  //   if (!post) {
  //     throw new NotFoundException(`Post not found with this ${id}`);
  //   }
  //   const update = Object.assign(post, updatePostDto);
  //   return update;
  // }

  // deletePost(id: string) {
  //   const post = this.posts.find((p) => p.id === id);
  //   if (!post) {
  //     throw new NotFoundException(`post with ID ${id} not found`);
  //   }
  //   this.posts = this.posts.filter((p) => p.id !== id);
  //   return { message: 'Post deleted successfully' };
  // }
}
