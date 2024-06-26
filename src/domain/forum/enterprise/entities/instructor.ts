import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity.id';

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity<InstructorProps> {
  static instructor(props: InstructorProps, id?: UniqueEntityID) {
    const instructor = new Instructor(props, id);

    return instructor;
  }
}
