import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('TypeMembers', () => {
  it('should get all members type', () =>
    request(Server)
      .get('/api/v1/type_members')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an.an('object');
      }));

  it('should add a new member type', () =>
    request(Server)
      .post('/api/v1/type_members')
      .send({ descricao: 'test', situacao: 'ss' })
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('descricao')
          .equal('test');
      }));

  it('should get an member type by id', () =>
    request(Server)
      .get('/api/v1/type_members/1')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('descricao')
          .equal('test');
      }));
});
