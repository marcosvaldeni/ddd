import { Either, left, right } from '@/core/either';
import { AnswerRepository } from '../repositories/answers-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { Answer } from '../../enterprise/entities/answer';

interface FetchQuestionsAnswersUseCaseRequest {
  questionId: string;
  page: number;
}

type FetchQuestionsAnswersUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    answers: Answer[];
  }
>;

export class FetchQuestionsAnswersUseCase {
  constructor(private answersRepository: AnswerRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionsAnswersUseCaseRequest): Promise<FetchQuestionsAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      {
        page,
      },
    );

    if (!answers) {
      return left(new ResourceNotFoundError());
    }

    return right({
      answers,
    });
  }
}
