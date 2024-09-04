import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export class InMemoryNotificationssRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  async create(notifications: Notification) {
    this.items.push(notifications)
  }
}
