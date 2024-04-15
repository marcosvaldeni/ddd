import { Question } from '../../enterprise/entities/question';
import { QuestionRepository } from '../repositories/questions-repository';

interface FetchRecentQuestionsCaseRequest {
  page: number;
}

interface FetchRecentQuestionsCaseResponse {
  questions: Question[];
}

export class FetchRecentQuestionsCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsCaseRequest): Promise<FetchRecentQuestionsCaseResponse> {
    const questions = await this.questionRepository.findManyRecent({ page });

    if (!questions) {
      throw new Error('Question not found.');
    }

    return {
      questions,
    };
  }
}
