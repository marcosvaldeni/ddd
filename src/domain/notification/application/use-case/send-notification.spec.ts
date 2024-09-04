import { expect } from 'vitest'
import { InMemoryNotificationssRepository } from 'test/repositories/in-memory-notification-repository'
import { SendNotificationUseCase } from './send-notification'

let inMemoryNotificationsRepository: InMemoryNotificationssRepository
let sut: SendNotificationUseCase

describe('Create Notification', () => {
  beforeEach(() => {
    inMemoryNotificationsRepository = new InMemoryNotificationssRepository()
    sut = new SendNotificationUseCase(inMemoryNotificationsRepository)
  })

  it('should be able to send a notification', async () => {
    const result = await sut.execute({
      recipientId: '1',
      title: 'new notification',
      content: 'test',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryNotificationsRepository.items[0]).toEqual(
      result.value?.notification,
    )
  })
})
