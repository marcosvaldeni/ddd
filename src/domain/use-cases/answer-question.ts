import { Answer } from '../entities/answer';

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId: instructorId, questionId });

    return answer;
  }
}
