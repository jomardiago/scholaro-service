import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { StudentsService } from "./students.service";
import { StudentsController } from "./students.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { StudentsRepository } from "./students.repository";

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService, StudentsRepository, JwtService],
})
export class StudentsModule {}
