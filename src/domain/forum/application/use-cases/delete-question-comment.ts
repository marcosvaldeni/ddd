import { QuestionCommentsRepository } from '../repositories/question-comments-repository';

interface DeleteQuestionOnCommentUseCaseRequest {
  authorId: string;
  questionCommentId: string;
}

interface DeleteQuestionOnCommentUseCaseResponse {}

export class DeleteQuestionOnCommentUseCase {
  constructor(private questionCommentRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionOnCommentUseCaseRequest): Promise<DeleteQuestionOnCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentRepository.findById(questionCommentId);

    if (!questionComment) {
      throw new Error('Question not found.');
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error('Not Allowed.');
    }

    await this.questionCommentRepository.delete(questionComment);

    return {};
  }
}
