import { Either, left, right } from '@/core/either';
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository';

interface DeleteAnswerOnCommentUseCaseRequest {
  authorId: string;
  answerCommentId: string;
}

type DeleteAnswerOnCommentUseCaseResponse = Either<string, object>;

export class DeleteAnswerOnCommentUseCase {
  constructor(private answerCommentRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerOnCommentUseCaseRequest): Promise<DeleteAnswerOnCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentRepository.findById(answerCommentId);

    if (!answerComment) {
      return left('Answer not found.');
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left('Not Allowed.');
    }

    await this.answerCommentRepository.delete(answerComment);

    return right({});
  }
}
