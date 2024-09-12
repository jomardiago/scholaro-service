import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
  @ApiProperty({ example: "test@example.com", description: "The user email." })
  @IsEmail(undefined, {
    message: "Email is required.",
  })
  email: string;

  @ApiProperty({ example: "password12345!", description: "The user password." })
  @IsString({
    message: "Password is required.",
  })
  @MinLength(8, {
    message: "Password must be atleast 8 characters.",
  })
  password: string;
}
