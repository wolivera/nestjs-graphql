import { Injectable } from '@nestjs/common';
import { NewBookInput } from './dto/new-book.input';
import { Book } from './models/book.model';
import { BooksArgs } from './dto/book.args';

@Injectable()
export class BooksService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewBookInput): Promise<Book> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Book> {
    return {} as any;
  }

  async findAll(booksArgs: BooksArgs): Promise<Book[]> {
    return [] as Book[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
