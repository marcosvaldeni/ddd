import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repositories';
import { makeQuestion } from 'test/factories/make-question';
import { EditQuestionUseCase } from './edit-question';
import { UniqueEntityID } from '@/core/entities/unique-entity.id';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: EditQuestionUseCase;

describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to edit a question', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityID('author-1'),
      },
      new UniqueEntityID('question-1'),
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await sut.execute({
      questionId: newQuestion.id.toValue(),
      authorId: 'author-1',
      title: 'Test question',
      content: 'Test content',
    });

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: 'Test question',
      content: 'Test content',
    });
  });

  it('should not be able to edit a question from another user', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityID('author-1'),
      },
      new UniqueEntityID('question-1'),
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    expect(() => {
      return sut.execute({
        questionId: newQuestion.id.toValue(),
        authorId: 'author-2',
        title: 'Test question',
        content: 'Test content',
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
