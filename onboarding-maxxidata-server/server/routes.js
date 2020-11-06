import membersRouter from './api/controllers/members/router';
import typeMembersRouter from './api/controllers/type-members/router';

export default function routes(app) {
  app.use('/api/v1/members', membersRouter);
  app.use('/api/v1/type_members', typeMembersRouter);
}
