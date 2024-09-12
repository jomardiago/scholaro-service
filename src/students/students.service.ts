import { Injectable, Logger } from "@nestjs/common";

import { StudentsRepository } from "./students.repository";

@Injectable()
export class StudentsService {
  private readonly logger = new Logger(StudentsService.name);

  constructor(private readonly studentsRepository: StudentsRepository) {}

  getStudents() {
    try {
      return this.studentsRepository.getStudents();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
