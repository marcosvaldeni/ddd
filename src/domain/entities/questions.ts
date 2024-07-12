import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";

export interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: string;
}

export class Question {
  public id: string;
  public title: string;
  public slug: Slug;
  public content: string;
  public authorId: string;

  constructor(pros: QuestionProps, id?: string) {
    this.title = pros.title;
    this.content = pros.content;
    this.slug = pros.slug;
    this.authorId = pros.authorId;
    this.id = id ?? randomUUID();
  }
}