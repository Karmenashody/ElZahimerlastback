import {answer} from './answer'
export interface question {
  testId: number;
  question: string;
  qId: number;
  answers: answer[];
}
