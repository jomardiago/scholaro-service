import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class StudentsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getStudents() {
    return this.prismaService.student.findMany();
  }
}
