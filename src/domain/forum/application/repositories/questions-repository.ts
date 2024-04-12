import { Question } from '../../enterprise/entities/question';

export interface QuestionRepository {
  findById(id: string): Promise<Question | null>;
  findBySlug(slug: string): Promise<Question | null>;
  save(answer: Question): Promise<void>;
  create(answer: Question): Promise<void>;
  delete(questionRepository: Question): Promise<void>;
}
