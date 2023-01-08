import { Directive, Field, ID } from '@nestjs/graphql';
import { NodeInterface, NodeType } from 'src/relay';
import { Entity } from 'typeorm';

@NodeType('User')
@Entity()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User implements NodeInterface {
  @Field(() => ID!)
  @Directive('@external')
  id: string;
}
