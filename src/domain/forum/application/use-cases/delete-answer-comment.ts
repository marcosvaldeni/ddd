import { AnswerCommentsRepository } from '../repositories/answer-comments-repository';

interface DeleteAnswerOnCommentUseCaseRequest {
  authorId: string;
  answerCommentId: string;
}

interface DeleteAnswerOnCommentUseCaseResponse {}

export class DeleteAnswerOnCommentUseCase {
  constructor(private answerCommentRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerOnCommentUseCaseRequest): Promise<DeleteAnswerOnCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentRepository.findById(answerCommentId);

    if (!answerComment) {
      throw new Error('Answer not found.');
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('Not Allowed.');
    }

    await this.answerCommentRepository.delete(answerComment);

    return {};
  }
}
