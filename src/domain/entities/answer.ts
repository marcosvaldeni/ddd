import { Entity } from "../../core/entities/entities";

interface AnswerProps {
  content: string;
  questionId: string;
  authorId: string;
}

export class Answer extends Entity<AnswerProps> {}