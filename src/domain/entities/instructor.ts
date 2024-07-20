import { Entity } from "@/core/enterprise/entities/entities";
import { UniqueEntityID } from "@/core/enterprise/entities/unique-entity-id";

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(
    props: InstructorProps,
    id?: UniqueEntityID
  ) {
    const instructor = new Instructor(props, id);

    return instructor;
  }

}

