import { randomUUID } from "node:crypto";

export class Answer {
  public id: string
  public content;

  constructor(content: string, id?: string) {
    this.content = content;
    this.id = id ?? randomUUID()
  }
}