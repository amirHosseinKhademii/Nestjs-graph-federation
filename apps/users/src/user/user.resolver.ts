import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UserService } from './user.service';

import { User } from './types';

@Resolver(() => User)
export class UserResolver {
  constructor(private service: UserService) {}

  @Query(() => [User])
  users() {
    return this.service.findAllUsers();
  }

  @Query(() => User)
  user(@Args('userId') id: string) {
    return this.service.finduserById(id);
  }

  @ResolveReference()
  resolveReference({ id }: { __typename: string; id: string }) {
    return this.service.finduserById(id);
  }
}
