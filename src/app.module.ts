import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { StudentsModule } from "./students/students.module";

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
