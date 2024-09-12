import { Controller, Get, UseGuards } from "@nestjs/common";

import { StudentsService } from "./students.service";
import { AuthGuard } from "src/auth/guards/auth.guard";

@Controller({
  path: "students",
  version: "1",
})
@UseGuards(AuthGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getStudents() {
    return this.studentsService.getStudents();
  }
}
