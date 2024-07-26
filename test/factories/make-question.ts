import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/questions'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override?: Partial<QuestionProps>) {
  const question = Question.create({
    authorId: new UniqueEntityID(),
    title: 'Test',
    slug: Slug.create('exmple-question'),
    content: 'test',
    ...override,
  })

  return question
}
