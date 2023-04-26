import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/books/models/book.model';

@ObjectType()
export class Author {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Book])
  books: Book[];
}
