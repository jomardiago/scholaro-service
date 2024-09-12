import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
  @IsEmail(undefined, {
    message: "Email is required.",
  })
  email: string;

  @IsString({
    message: "Password is required.",
  })
  @MinLength(8, {
    message: "Password must be atleast 8 characters.",
  })
  password: string;
}
