import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './models/book.model';
import { BooksArgs } from './dto/book.args';
import { NewBookInput } from './dto/new-book.input';
import { BooksService } from './books.service';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => Book)
  async book(@Args('id') id: string): Promise<Book> {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Query(() => [Book])
  books(@Args() booksArgs: BooksArgs): Promise<Book[]> {
    return this.booksService.findAll(booksArgs);
  }

  @Mutation(() => Book)
  async addBook(@Args('newBookData') newBookData: NewBookInput): Promise<Book> {
    const book = await this.booksService.create(newBookData);
    return book;
  }

  @Mutation(() => Boolean)
  async removeBook(@Args('id') id: string) {
    return this.booksService.remove(id);
  }
}
