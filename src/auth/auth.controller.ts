import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { TokenPayload } from "src/@types";
import { RefreshGuard } from "./guards/refresh.guard";

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

  @Post("refresh")
  @UseGuards(RefreshGuard)
  refresh(@Request() req: { user: TokenPayload }) {
    return this.authService.refresh(req.user);
  }
}
