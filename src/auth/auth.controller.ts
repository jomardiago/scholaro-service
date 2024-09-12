import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";

@Controller({
  path: "auth",
  version: "1",
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }
}
