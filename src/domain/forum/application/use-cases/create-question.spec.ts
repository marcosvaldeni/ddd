import { CreateQuestionUseCase } from './create-question';
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repositories';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      content: 'new question',
      authorId: '1',
      title: 'question',
    });

    expect(question.id).toBeTruthy();
  });
});
