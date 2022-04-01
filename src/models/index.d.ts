import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TeachersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssignmentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeworkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Teachers {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly pass?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Teachers, TeachersMetaData>);
  static copyOf(source: Teachers, mutator: (draft: MutableModel<Teachers, TeachersMetaData>) => MutableModel<Teachers, TeachersMetaData> | void): Teachers;
}

export declare class Students {
  readonly id: string;
  readonly name: string;
  readonly standard: string;
  readonly section: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Students, StudentsMetaData>);
  static copyOf(source: Students, mutator: (draft: MutableModel<Students, StudentsMetaData>) => MutableModel<Students, StudentsMetaData> | void): Students;
}

export declare class Assignments {
  readonly id: string;
  readonly subject: string;
  readonly url: string;
  readonly timestamp: string;
  readonly standard: string;
  readonly section: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Assignments, AssignmentsMetaData>);
  static copyOf(source: Assignments, mutator: (draft: MutableModel<Assignments, AssignmentsMetaData>) => MutableModel<Assignments, AssignmentsMetaData> | void): Assignments;
}

export declare class Notes {
  readonly id: string;
  readonly subject: string;
  readonly url: string;
  readonly timestamp: string;
  readonly standard: string;
  readonly sectio: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Notes, NotesMetaData>);
  static copyOf(source: Notes, mutator: (draft: MutableModel<Notes, NotesMetaData>) => MutableModel<Notes, NotesMetaData> | void): Notes;
}

export declare class Videos {
  readonly id: string;
  readonly subject: string;
  readonly url: string;
  readonly timestamp: string;
  readonly standard: string;
  readonly section: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Videos, VideosMetaData>);
  static copyOf(source: Videos, mutator: (draft: MutableModel<Videos, VideosMetaData>) => MutableModel<Videos, VideosMetaData> | void): Videos;
}

export declare class Homework {
  readonly id: string;
  readonly subject: string;
  readonly title: string;
  readonly timestamp: string;
  readonly standard: string;
  readonly section: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Homework, HomeworkMetaData>);
  static copyOf(source: Homework, mutator: (draft: MutableModel<Homework, HomeworkMetaData>) => MutableModel<Homework, HomeworkMetaData> | void): Homework;
}