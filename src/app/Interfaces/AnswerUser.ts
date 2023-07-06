import { QandAnswerUserDto } from "./QandAnswerUserDto";

export interface AnswerUser {
  userId: string;
  ExamId: number;
  QandAnswerUserDto: QandAnswerUserDto[];
}

