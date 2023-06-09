import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Book model' })
export class Book {
  @Field(() => ID)
  id: string;

  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(() => [String])
  authors: string[];
}
