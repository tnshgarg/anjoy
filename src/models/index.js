// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teachers, Students, Assignments, Notes, Videos, Homework } = initSchema(schema);

export {
  Teachers,
  Students,
  Assignments,
  Notes,
  Videos,
  Homework
};