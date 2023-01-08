import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ConnectionArgs } from 'src/relay';
import { TodoService } from './todo.service';
import { User } from './types';
import { Todo, TodoConnection } from './types/todo.types';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private service: TodoService) {}

  @Query(() => TodoConnection, { name: 'todos' })
  todos(
    @Args() args: ConnectionArgs,
    @Args('query', { nullable: true }) query?: string,
  ): Promise<TodoConnection> {
    return this.service.findAllTodos(args);
  }

  @Query(() => Todo, { name: 'todo' })
  todo(@Args({ type: () => ID, name: 'id' }) id: string): Promise<Todo> {
    return this.service.findTodoById(id);
  }

  @ResolveField(() => User)
  user(@Parent() todo: Todo) {
    return { __typename: 'User', id: todo.user };
  }
}
