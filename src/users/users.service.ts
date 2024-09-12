import { Injectable, Logger } from "@nestjs/common";

import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserByEmail(email: string) {
    try {
      return this.usersRepository.getUserByEmail(email);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
