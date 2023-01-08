import { Directive, Field, ID } from '@nestjs/graphql';
import { NodeInterface, NodeType } from 'src/relay';
import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@NodeType('User')
@Entity()
@Directive('@key(fields: "id")')
export class User implements NodeInterface {
  @ObjectIdColumn({ update: false })
  _id: string;

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID!)
  id: string;

  @Field()
  @Column({ unique: true })
  userName: string;

  @Field()
  @Column()
  fullName: string;

  @Column()
  password: string;
}
