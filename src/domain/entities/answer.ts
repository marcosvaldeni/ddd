import { Entity } from "../../core/entities/entities";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface AnswerProps {
  authorId: string;
  questionId: UniqueEntityID;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }
}