import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: string): Promise<Author> {
    return {} as any;
  }
}
