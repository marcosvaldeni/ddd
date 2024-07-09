import { randomUUID } from "node:crypto";

export class Question {
  public id: string
  public title;
  public content;

  constructor(title: string, content: string, id?: string) {
    this.title = title;
    this.content = content;
    this.id = id ?? randomUUID()
  }
}