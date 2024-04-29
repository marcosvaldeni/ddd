import { Either, left, right } from '@/core/either';
import { Question } from '../../enterprise/entities/question';
import { QuestionRepository } from '../repositories/questions-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

interface FetchRecentQuestionsCaseRequest {
  page: number;
}

type FetchRecentQuestionsCaseResponse = Either<
  ResourceNotFoundError,
  {
    questions: Question[];
  }
>;

export class FetchRecentQuestionsCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsCaseRequest): Promise<FetchRecentQuestionsCaseResponse> {
    const questions = await this.questionRepository.findManyRecent({ page });

    if (!questions) {
      return left(new ResourceNotFoundError());
    }

    return right({
      questions,
    });
  }
}
