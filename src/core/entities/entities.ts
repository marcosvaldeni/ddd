import { randomUUID } from "node:crypto";

export class Entity<Props> {
  private _id: string;
  protected props: any;

  constructor(props: Props, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  get id() {
    return this._id;
  }
}