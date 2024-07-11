import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { Answer } from '../entities/answer'
import { AnswerRepository } from '../repositories/answers-repository'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer) =>{
    return
  }
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'test'
  })

  expect(answer.content).toEqual('test')
})