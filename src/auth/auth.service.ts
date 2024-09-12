import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";

import { UsersService } from "src/users/users.service";
import { LoginDto } from "./dtos/login.dto";
import { TokenPayload } from "src/@types";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    try {
      const user = await this.usersService.getUserByEmail(data.email);
      if (!user) throw new NotFoundException("User does not exists.");

      const passwordsMatched = await compare(data.password, user.password);
      if (!passwordsMatched)
        throw new BadRequestException("Invalid credentials.");

      delete user.password;

      const payload = { sub: user.id, email: user.email };
      return {
        ...user,
        access_token: this.jwtService.sign(payload, {
          secret: process.env.JWT_ACCESS_SECRET,
          expiresIn: "30m",
        }),
        refresh_token: this.jwtService.sign(payload, {
          secret: process.env.JWT_REFRESH_SECRET,
          expiresIn: "7d",
        }),
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async refresh(payload: TokenPayload) {
    const user = await this.usersService.getUserByEmail(payload.email);
    delete user.password;

    const newPayload = { sub: user.id, email: user.email };
    try {
      return {
        ...user,
        access_token: this.jwtService.sign(newPayload, {
          secret: process.env.JWT_ACCESS_SECRET,
          expiresIn: "30m",
        }),
        refresh_token: this.jwtService.sign(newPayload, {
          secret: process.env.JWT_REFRESH_SECRET,
          expiresIn: "7d",
        }),
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
