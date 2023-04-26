import { Resolver, Args, ResolveField, Parent, Query } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { BooksService } from 'src/books/books.service';
import { AuthorsService } from './authors.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
  ) {}

  @Query(() => Author)
  async author(@Args('id', { type: () => String }) id: string) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async books(@Parent() author: Author) {
    const { id } = author;
    return this.booksService.findAll({ authorId: id });
  }
}
