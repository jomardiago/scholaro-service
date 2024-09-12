import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

import { StudentsService } from "./students.service";
import { AuthGuard } from "src/auth/guards/auth.guard";

@ApiTags("protected-routes")
@ApiBearerAuth("access_token")
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
