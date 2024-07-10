import { randomUUID } from "node:crypto";

interface AnswerProps {
  content: string;
  questionId: string;
  authorId: string;
}

export class Answer {
  public id: string
  public content;
  public authorId: string;
  public questionId: string;

  constructor({ content, authorId, questionId }: AnswerProps, id?: string) {
    this.content = content;
    this.id = id ?? randomUUID()
    this.authorId = authorId;
    this.questionId = questionId;
  }
}