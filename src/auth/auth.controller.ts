import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";

import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { TokenPayload } from "src/@types";
import { RefreshGuard } from "./guards/refresh.guard";

@ApiTags("auth")
@Controller({
  path: "auth",
  version: "1",
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiOperation({ summary: "Login with email and password" })
  @ApiBody({ type: LoginDto })
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Post("refresh")
  @ApiExcludeEndpoint()
  @UseGuards(RefreshGuard)
  refresh(@Request() req: { user: TokenPayload }) {
    return this.authService.refresh(req.user);
  }
}
