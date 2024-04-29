import { Either, left, right } from '@/core/either';
import { QuestionCommentsRepository } from '../repositories/question-comments-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { NotAllowedError } from './errors/not-allowed-error';

interface DeleteQuestionOnCommentUseCaseRequest {
  authorId: string;
  questionCommentId: string;
}

type DeleteQuestionOnCommentUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  object
>;

export class DeleteQuestionOnCommentUseCase {
  constructor(private questionCommentRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionOnCommentUseCaseRequest): Promise<DeleteQuestionOnCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentRepository.findById(questionCommentId);

    if (!questionComment) {
      return left(new ResourceNotFoundError());
    }

    if (questionComment.authorId.toString() !== authorId) {
      return left(new NotAllowedError());
    }

    await this.questionCommentRepository.delete(questionComment);

    return right({});
  }
}
