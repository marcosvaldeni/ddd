import { UniqueEntityID } from "./unique-entity-id";

export class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: any;

  constructor(props: Props, id?: string) {
    this._id = new UniqueEntityID();
    this.props = props;
  }

  get id() {
    return this._id;
  }
}