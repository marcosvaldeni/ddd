import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'

import { makeQuestion } from 'test/factories/make-question'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to ge a question by slug', async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create('exmple-question'),
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    await sut.execute({ slug: 'exmple-question' })

    // expect(result.value?.question.id).toBeTruthy()
    // expect(result.value?.question.title).toBe(newQuestion.title)
  })
})
